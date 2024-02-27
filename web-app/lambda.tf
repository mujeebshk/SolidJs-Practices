resource "aws_lambda_function" "hello_world" {
  function_name = "BooksAPI"

  s3_bucket = aws_s3_bucket.mujju.id
  s3_key    = aws_s3_bucket_object.lambda_hello_world.key

  runtime = "nodejs12.x"
  handler = "lambda.handler"


# source file
  source_code_hash = "./lambda/lambda.js"
  role = aws_iam_role.lambda_exec.arn
}

resource "aws_lambda_permission" "api_gw" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.hello_world.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_apigatewayv2_api.lambdafile.execution_arn}/*/*"
}