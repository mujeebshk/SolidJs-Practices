# #Upload files of your static website
# resource "aws_s3_object" "html" {
#   for_each = fileset("./Mujeeb/dist", "**/*.html")

#   bucket = aws_s3_bucket.mujju.id
#   key    = each.value
#   source = "./Mujeeb/dist/${each.value}"
#   etag   = filemd5("./Mujeeb/dist/${each.value}")
#   content_type = "text/html"
# }


# resource "aws_s3_object" "css" {
#   for_each = fileset("./Mujeeb/dist/assets/", "**/*.css")

#   bucket = aws_s3_bucket.mujju.id
#   key    = each.value
#   source = "./Mujeeb/dist/assets/${each.value}"
#   etag   = filemd5("./Mujeeb/dist/assets/${each.value}")
#   content_type = "text/css"
# }

# resource "aws_s3_object" "js" {
#   for_each = fileset("./Mujeeb/dist/assets/", "**/*.js")

#   bucket = aws_s3_bucket.mujju.id
#   key    = each.value
#   source = "./Mujeeb/dist/assets/${each.value}"
#   etag   = filemd5("./Mujeeb/dist/assets/${each.value}")
#   content_type = "application/javascript"
# }


# # resource "aws_s3_object" "images" {
# #   for_each = fileset("./Mujeeb/", "**/*.png")

# #   bucket = aws_s3_bucket.mujju.id
# #   key    = each.value
# #   source = "./Mujeeb/${each.value}"
# #   etag   = filemd5("./Mujeeb/${each.value}")
# #   content_type = "image/png"
# # }

# # Add more aws_s3_bucket_object for the type of files you want to upload
# # The reason for having multiple aws_s3_bucket_object with file type is to make sure
# # we add the correct content_type for the file in S3. Otherwise website load may have issues

# locals {
#   s3_origin_id = aws_s3_bucket.mujju.id
# }

# resource "aws_cloudfront_origin_access_identity" "origin_access_identity" {
#   comment = "s3-my-webapp"
# }

# resource "aws_cloudfront_distribution" "s3_distribution" {
#   origin {
#     domain_name = aws_s3_bucket.mujju.bucket_regional_domain_name
#     origin_id   = local.s3_origin_id

#     s3_origin_config {
#       origin_access_identity = aws_cloudfront_origin_access_identity.origin_access_identity.cloudfront_access_identity_path
#     }
#   }

#   enabled             = true
#   is_ipv6_enabled     = true
#   comment             = "my-cloudfront"
#   default_root_object = "index.html"


#   default_cache_behavior {
#     allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
#     cached_methods   = ["GET", "HEAD"]
#     target_origin_id = local.s3_origin_id

#     forwarded_values {
#       query_string = false

#       cookies {
#         forward = "none"
#       }
#     }

#     viewer_protocol_policy = "allow-all"
#     min_ttl                = 0
#     default_ttl            = 3600
#     max_ttl                = 86400
#   }

#   # Cache behavior with precedence 0
#   ordered_cache_behavior {
#     path_pattern     = "/content/immutable/*"
#     allowed_methods  = ["GET", "HEAD", "OPTIONS"]
#     cached_methods   = ["GET", "HEAD", "OPTIONS"]
#     target_origin_id = local.s3_origin_id

#     forwarded_values {
#       query_string = false
#       headers      = ["Origin"]

#       cookies {
#         forward = "none"
#       }
#     }

#     min_ttl                = 0
#     default_ttl            = 86400
#     max_ttl                = 31536000
#     compress               = true
#     viewer_protocol_policy = "redirect-to-https"
#   }

#   # Cache behavior with precedence 1
#   ordered_cache_behavior {
#     path_pattern     = "/content/*"
#     allowed_methods  = ["GET", "HEAD", "OPTIONS"]
#     cached_methods   = ["GET", "HEAD"]
#     target_origin_id = local.s3_origin_id

#     forwarded_values {
#       query_string = false

#       cookies {
#         forward = "none"
#       }
#     }

#     min_ttl                = 0
#     default_ttl            = 3600
#     max_ttl                = 86400
#     compress               = true
#     viewer_protocol_policy = "redirect-to-https"
#   }

#   price_class = "PriceClass_200"

#   restrictions {
#     geo_restriction {
#       restriction_type = "none"
#       locations        = []
#     }
#   }

#   tags = {
#     Environment = "development"
#     Name        = "my-tags"
#   }

#   viewer_certificate {
#     cloudfront_default_certificate = true
#   }
#   depends_on = [
#     aws_s3_bucket.mujju,
#     aws_apigatewayv2_api.lambdafile,
#   ]
# }

# data "aws_iam_policy_document" "s3_policy" {
#   statement {
#     actions   = ["s3:GetObject"]
#     resources = ["${aws_s3_bucket.mujju.arn}/*"]

#     principals {
#       type        = "AWS"
#       identifiers = [aws_cloudfront_origin_access_identity.origin_access_identity.iam_arn]
#     }
#   }
# }

# resource "aws_s3_bucket_policy" "my_bucket" {
#   bucket = aws_s3_bucket.mujju.bucket
#   policy = data.aws_iam_policy_document.s3_policy.json
# }

# resource "aws_s3_bucket_public_access_block" "mybucket" {
#   bucket = aws_s3_bucket.mujju.id

#   block_public_acls       = true
#   block_public_policy     = true
# }


# New one


resource "aws_s3_bucket_object" "html" {
  for_each     = fileset("./Mujeeb/dist", "**/*.html")
  bucket       = aws_s3_bucket.mujju.id
  key          = each.value
  source       = "./Mujeeb/dist/${each.value}"
  etag         = filemd5("./Mujeeb/dist/${each.value}")
  content_type = "text/html"
}

resource "aws_s3_bucket_object" "css" {
  for_each = fileset("./Mujeeb/dist/assets/", "**/*.css")

  bucket       = aws_s3_bucket.mujju.id
  key          = each.value
  source       = "./Mujeeb/dist/assets/${each.value}"
  etag         = filemd5("./Mujeeb/dist/assets/${each.value}")
  content_type = "text/css"
}

resource "aws_s3_bucket_object" "js" {
  for_each = fileset("./Mujeeb/dist/assets/", "**/*.js")

  bucket       = aws_s3_bucket.mujju.id
  key          = each.value
  source       = "./Mujeeb/dist/assets/${each.value}"
  etag         = filemd5("./Mujeeb/dist/assets/${each.value}")
  content_type = "application/javascript"
}

resource "aws_s3_object" "svg" {
  for_each = fileset("./Mujeeb/dist", "**/*.svg")

  bucket = aws_s3_bucket.mujju.id
  key    = each.value
  source = "./Mujeeb/dist/${each.value}"
  etag   = filemd5("./Mujeeb/dist/${each.value}")
  content_type = "image/svg+xml"
}

locals {
  s3_origin_id = aws_s3_bucket.mujju.id
}

resource "aws_cloudfront_origin_access_identity" "origin_access_identity" {
  comment = "dev.atom-spikes"
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name = aws_s3_bucket.mujju.bucket_regional_domain_name
    origin_id   = local.s3_origin_id

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.origin_access_identity.cloudfront_access_identity_path
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "my-cloudfront"
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
  }
  depends_on = [
    aws_s3_bucket.mujju,
    aws_apigatewayv2_api.lambdafile,
  ]
}


data "aws_iam_policy_document" "s3_policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.mujju.arn}/*"]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.origin_access_identity.iam_arn]
    }
  }
}

resource "aws_s3_bucket_policy" "lambda_bucket" {
  bucket = aws_s3_bucket.mujju.bucket
  policy = data.aws_iam_policy_document.s3_policy.json
}

resource "aws_s3_bucket_public_access_block" "lambda_bucket" {
  bucket = aws_s3_bucket.mujju.id

  block_public_acls   = true
  block_public_policy = true
}
