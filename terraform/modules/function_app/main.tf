resource "azurerm_linux_function_app" "function_app" {
  name                = var.name
  location            = var.location
  resource_group_name = var.resource_group_name
  service_plan_id = var.service_plan_id
  storage_account_name = var.storage_account_name
  storage_account_access_key = var.storage_account_access_key

  # Docker image configuration for the function app
  site_config {

  }

  app_settings = {
    "DOCKER_REGISTRY_SERVER_URL"      = var.docker_registry_server_url
    "DOCKER_REGISTRY_SERVER_USERNAME" = var.docker_registry_server_username
    "DOCKER_REGISTRY_SERVER_PASSWORD" = var.docker_registry_server_password
    "WEBSITES_ENABLE_APP_SERVICE_STORAGE" = "false" # Required for Docker containerized apps
  }

  tags = var.tags
}
