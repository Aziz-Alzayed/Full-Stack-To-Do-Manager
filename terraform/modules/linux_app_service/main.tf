resource "azurerm_linux_web_app" "linux_app_service" {
  name                = var.name
  location            = var.location
  resource_group_name = var.resource_group_name
  service_plan_id     = var.service_plan_id
  tags = var.tags
  app_settings = {
    "ASPNETCORE_ENVIRONMENT"       = var.ASPNETCORE_ENVIRONMENT
    "DOCKER_REGISTRY_SERVER_URL"   = var.docker_registry_server_url
    "DOCKER_REGISTRY_SERVER_USERNAME" = var.docker_registry_server_username
    "DOCKER_REGISTRY_SERVER_PASSWORD" = var.docker_registry_server_password
    "WEBSITES_ENABLE_APP_SERVICE_STORAGE" = "false"
    "DOCKER_CUSTOM_IMAGE_NAME"     = "${var.docker_image}:${var.docker_image_tag}"
  }

  site_config {

  }

  identity {
    type = "SystemAssigned"  # This enables system-assigned managed identity
  }

}
