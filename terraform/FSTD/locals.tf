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

  docker_registry_url = "fstdacr.azurecr.io"

  docker_images = {
    frontend = {
      image = "${local.docker_registry_url}/frontend"
      tag   = "latest"
    }
    backend = {
      image = "${local.docker_registry_url}/backend"
      tag   = "latest"
    }
    function_trigger = {
      image = "${local.docker_registry_url}/trigger-function"
      tag   = "latest"
    }
  }
}