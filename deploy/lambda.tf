resource "aws_lambda_function" "library_lambda" {
  function_name = "Library_System_Lambda_spike"
  s3_bucket = aws_s3_bucket.library_bucket.id
  s3_key    = aws_s3_bucket_object.library_lambda_object.key
  runtime = "nodejs12.x"
  handler = "lambda.handler"
  source_code_hash = "./lambda.zip"
  role             = aws_iam_role.lambda_exec.arn
}
resource "aws_lambda_permission" "api_gw" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.library_lambda.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn = "${aws_api_gateway_rest_api.library-api-gateway.execution_arn}/*/*"
}
resource "aws_iam_policy" "lambda_dynamodb_access" {
  name        = "library_lambda_dynamodb_access_policy_test_mujeeb"
  path        = "/"
  description = "IAM policy for DynamoDB access from lambda"
  policy = <<EOF
{
    "Version": "2012-10-17",
        "Statement": [
            {
                "Effect":"Allow",
                "Action": [
                    "dynamodb:*",
                    "lambda:*"
                ],
                "Resource":"*"
            }
        ]
}
EOF
}
data "archive_file" "lambda_zip" {
  type        = "zip"
  source_dir  = "../lambda"
  output_path = "lambda.zip"
}






