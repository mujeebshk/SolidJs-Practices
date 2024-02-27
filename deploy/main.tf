terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }
}
# provider "aws" {
#   region = "ap-south-1"
# }
resource "aws_s3_bucket" "library_bucket" {
  bucket        = "library-bucket-mujeeb"
  acl           = "public-read"
  force_destroy = true
  website {
    index_document = "index.html"
  }
  tags = {
    Environment = "development"
    Name        = "Demo app"
  }
}
resource "aws_s3_bucket_object" "library_lambda_object" {
  bucket = aws_s3_bucket.library_bucket.id
  key    = "lambda.zip"
  source = "./lambda.zip"
}
resource "aws_iam_role" "lambda_exec" {
  name = "serverless_library_System"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Sid    = ""
      Principal = {
        Service = "lambda.amazonaws.com"
      }
      }
    ]
  })
}
resource "aws_iam_role_policy_attachment" "lambda_policy" {
  role       = aws_iam_role.lambda_exec.name
  policy_arn = aws_iam_policy.lambda_dynamodb_access.arn
}







