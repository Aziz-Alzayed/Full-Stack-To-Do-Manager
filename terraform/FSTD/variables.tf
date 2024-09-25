variable "sql_server_login" {
  description = "Login for the Azure SQL Server"
  type        = string
  sensitive   = true
}

variable "sql_server_login_password" {
  description = "Password for the Azure SQL Server"
  type        = string
  sensitive   = true
}