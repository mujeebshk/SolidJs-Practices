# Input variable definitions
variable "aws_profile" {
  default     = "default"
  description = "AWS profile you'd like to use. Default = default"
}
variable "credentials_path" {
  default     = "~/.aws/credentials"
  description = "AWS credentials path. Default = ~/.aws/credentials"
}
variable "lambda_identity_timeout" { default = 1000 }