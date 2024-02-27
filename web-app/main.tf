# 

# New one

terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
    random = {
      source = "hashicorp/random"
    }
    archive = {
      source = "hashicorp/archive"
    }
  }

  required_version = "~> 1.0"
}

provider "aws" {
  region = "ap-south-1"
  profile = "Mujeeb default"
}

resource "random_pet" "lambda_bucket_name" {
  prefix = "lambda-function"
  length = 2
}

resource "aws_s3_bucket" "mujju" {
  bucket = random_pet.lambda_bucket_name.id

  acl           = "public-read"
  force_destroy = true
    website {
    index_document="index.html"
  }
  tags = {
    Environment = "development"
    Name        = "Demo app"
  }
}
data "archive_file" "lambda_hello_world" {
  type = "zip"

  source_dir  = "${path.module}/lambda"
  output_path = "${path.module}/lambda-api_gateway.zip"
}

resource "aws_s3_bucket_object" "lambda_hello_world" {
  bucket = aws_s3_bucket.mujju.id

  key    = "lambda.zip"
  source = "./lambda-api_gateway.zip"
}

resource "aws_cloudwatch_log_group" "hello" {
  name = "/aws/lambda/${aws_lambda_function.hello_world.function_name}"

  retention_in_days = 30
}

resource "aws_iam_role" "lambda_exec" {
  name = "serverless_lambda_ameen"

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
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_cloudwatch_log_group" "api_gw" {
  name = "/aws/api_gw/${aws_apigatewayv2_api.lambdafile.name}"

  retention_in_days = 30
}
