resource "aws_s3_bucket_object" "html" {
  for_each     = fileset("./library/dist", "**/*.html")
  bucket       = aws_s3_bucket.library_bucket.id
  key          = each.value
  source       = "./library/dist/${each.value}"
  etag         = filemd5("./library/dist/${each.value}")
  content_type = "text/html"
}
resource "aws_s3_bucket_object" "css" {
  for_each = fileset("./library/dist", "**/*.css")
  bucket       = aws_s3_bucket.library_bucket.id
  key          = each.value
  source       = "./library/dist/${each.value}"
  etag         = filemd5("./library/dist/${each.value}")
  content_type = "text/css"
}
resource "aws_s3_bucket_object" "js" {
  for_each = fileset("./library/dist", "**/*.js")
  bucket       = aws_s3_bucket.library_bucket.id
  key          = each.value
  source       = "./library/dist/${each.value}"
  etag         = filemd5("./library/dist/${each.value}")
  content_type = "application/javascript"
}
resource "aws_s3_bucket_object" "ico" {
  for_each     = fileset("./library/dist", "**/*.ico")
  bucket       = aws_s3_bucket.library_bucket.id
  key          = each.value
  source       = "./library/dist/${each.value}"
  etag         = filemd5("./library/dist/${each.value}")
  content_type = "image/x-icon"
}
locals {
  s3_origin_id = aws_s3_bucket.library_bucket.id
}
resource "aws_cloudfront_origin_access_identity" "origin_access_identity" {
  comment = "dev.atom-spikes"
}
resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name = aws_s3_bucket.library_bucket.bucket_regional_domain_name
    origin_id   = local.s3_origin_id
    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.origin_access_identity.cloudfront_access_identity_path
    }
  }
  # aliases = ["library.atom.cloud"]
  enabled             = true
  is_ipv6_enabled     = true
  comment             = "library-cloudfront-distribution"
  default_root_object = "index.html"
  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id
    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
    viewer_protocol_policy = "allow-all"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }
  # Cache behavior with precedence 0
  ordered_cache_behavior {
    path_pattern     = "/content/immutable/*"
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD", "OPTIONS"]
    target_origin_id = local.s3_origin_id
    forwarded_values {
      query_string = false
      headers      = ["Origin"]
      cookies {
        forward = "none"
      }
    }
    min_ttl                = 0
    default_ttl            = 86400
    max_ttl                = 31536000
    compress               = true
    viewer_protocol_policy = "redirect-to-https"
  }
  # Cache behavior with precedence 1
  ordered_cache_behavior {
    path_pattern     = "/content/*"
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id
    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
    compress               = true
    viewer_protocol_policy = "redirect-to-https"
  }
  price_class = "PriceClass_200"
  restrictions {
    geo_restriction {
      restriction_type = "none"
      locations        = []
    }
  }
  tags = {
    Environment = "development"
    Name        = "atom-spikes-cdn"
  }
  viewer_certificate {
    cloudfront_default_certificate = true
    acm_certificate_arn            = "arn:aws:acm:us-east-1:737151555887:certificate/4744bef1-54ae-4a93-ba55-8935f7e26360"
    ssl_support_method             = "sni-only"
  }
  depends_on = [
    aws_s3_bucket.library_bucket,
    # aws_apigatewayv2_api.lambda,
  ]
}
data "aws_iam_policy_document" "s3_policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.library_bucket.arn}/*"]
    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.origin_access_identity.iam_arn]
    }
  }
}
resource "aws_s3_bucket_policy" "lambda_bucket" {
  bucket = aws_s3_bucket.library_bucket.bucket
  policy = data.aws_iam_policy_document.s3_policy.json
}
resource "aws_s3_bucket_public_access_block" "library_bucket" {
  bucket = aws_s3_bucket.library_bucket.id
  block_public_acls   = true
  block_public_policy = true
}
# resource "aws_route53_record" "atom_athena_console" {
#   zone_id = "Z03277569BIBWE438J1"
#   name    = "librarysys.atom.cloud"
#   type    = "A"
#   alias {
#     name                   = aws_cloudfront_distribution.s3_distribution.domain_name
#     zone_id                = aws_cloudfront_distribution.s3_distribution.hosted_zone_id
#     evaluate_target_health = false
#   }
# }