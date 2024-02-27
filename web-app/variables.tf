variable "region"{
    default = "ap-south-1"
}
# Input variable definitions

variable "aws_profile" {
  default     = "default"
  description = "AWS profile you'd like to use. Default = default"
}

variable "credentials_path" {
  default     = "~/.aws/credentials"
  description = "AWS credentials path. Default = ~/.aws/credentials"
}

variable "api_gateway_api_name" {
  default     = "APIGatewayLab"
  description = "Name of the API"
}