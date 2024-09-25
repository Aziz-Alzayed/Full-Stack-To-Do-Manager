# The principal ID (service principal or managed identity)
variable "principal_id" {
  description = "The ID of the principal (Service Principal, Managed Identity, etc.)"
  type        = string
}

# The role name to assign (e.g., SQL DB Contributor)
variable "role_name" {
  description = "The name of the role to assign (e.g., SQL DB Contributor)"
  type        = string
}

# The scope of the role assignment (e.g., SQL server or resource group)
variable "scope" {
  description = "The scope for the role assignment (e.g., the SQL server or resource group)"
  type        = string
}
