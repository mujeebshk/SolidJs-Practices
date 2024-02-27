# output API base-url
output "base_url" {
  description = "Base URL for API Gateway stage."
  value       = aws_api_gateway_stage.library_api_stage.invoke_url
}
# to get the Cloud front URL if doamin/alias is not configured
output "cloudfront_domain_name" {
  description = "Coludfront domain name"
  value       = aws_cloudfront_distribution.s3_distribution.domain_name
}




