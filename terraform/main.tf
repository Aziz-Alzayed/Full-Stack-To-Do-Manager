# -------------------------------------------------------------------------------------
# fstd_infrastructure Module
# -------------------------------------------------------------------------------------
# This block calls the `fstd_infrastructure` module to provision infrastructure
# components defined in the `./FSTD` directory.
#
# Variables passed to the module:
# - sql_server_login: The login username for the Azure SQL Server.
# - sql_server_login_password: The password for the Azure SQL Server.
#
# The `providers` block ensures that the AzureRM provider is used for all resources
# within the `fstd_infrastructure` module.
#
# Usage Notes:
# - Ensure that the variables `sql_server_login` and `sql_server_login_password` are
#   declared and passed securely, either through a `.tfvars` file or environment
#   variables.
# -------------------------------------------------------------------------------------

module "fstd_infrastructure" {
  source = "./FSTD"

  # Login credentials for Azure SQL Server
  sql_server_login          = var.sql_server_login
  sql_server_login_password = var.sql_server_login_password

  # Specify the AzureRM provider for this module
  providers = {
    azurerm = azurerm
  }
}