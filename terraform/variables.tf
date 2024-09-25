# -------------------------------------------------------------------------------------
# Terraform Variables for Azure Configuration
# -------------------------------------------------------------------------------------
# This file defines the input variables required for authenticating and interacting 
# with Azure resources via the AzureRM provider.
#
# These variables include:
# - Azure Subscription ID, Client ID, Client Secret, and Tenant ID:
#   These are the credentials needed to authenticate Terraform with Azure using a 
#   Service Principal.
# - SQL Server Login and Password:
#   These are credentials used to create or manage an Azure SQL Server instance.
#
# All of these variables are marked as sensitive to ensure that they are not displayed
# in the Terraform output. These values should be securely passed through a .tfvars
# file or environment variables.
#
# Usage:
# 1. Define these variables in a secrets.tfvars file or pass them via environment 
#    variables.
# 2. Do not hardcode sensitive values in the configuration files to maintain security.
#
# Example tfvars file:
# subscription_id           = "your-subscription-id"
# client_id                 = "your-client-id"
# client_secret             = "your-client-secret"
# tenant_id                 = "your-tenant-id"
# sql_server_login          = "sqladmin"
# sql_server_login_password = "your-secure-password"
# -------------------------------------------------------------------------------------

variable "subscription_id" {
  type        = string
  description = "Azure Subscription ID"
  sensitive   = true
}

variable "client_id" {
  type        = string
  description = "Azure Client ID"
  sensitive   = true
}

variable "client_secret" {
  type        = string
  description = "Azure Client Secret"
  sensitive   = true
}

variable "tenant_id" {
  type        = string
  description = "Azure Tenant ID"
  sensitive   = true
}

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
