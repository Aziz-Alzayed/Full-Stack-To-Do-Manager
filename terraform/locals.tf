locals {
  resource_group_name  = "fstd-rg"
  location             = "North Europe"
  static_web_app_name  = "fstd-static-web"
  app_service_name     = "fstd-app-service"
  sql_server_name      = "fstd-sql-server"
  sql_db_name          = "fstd-sql-db"
  storage_account_name = "fstdstorageaccount"
  app_environment      = "Production"
  common_tags = {
    Environment = "Production"
    Project     = "FSTD"
    CostCenter  = "FSTDProdBudget"
    Owner       = "Aziz Alzayed"
    ManagedBy   = "Terraform"
  }

  frontend_docker_image     = "fstdacr.azurecr.io/frontend"
  frontend_docker_image_tag = "latest"
  backend_docker_image      = "fstdacr.azurecr.io/backend"
  backend_docker_image_tag  = "latest"
}