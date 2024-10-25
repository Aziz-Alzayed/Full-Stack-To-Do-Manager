output "storage_account_name" {
  value = azurerm_storage_account.storage_account.name
}

output "storage_account_access_key" {
  value = azurerm_storage_account.storage_account.primary_access_key
}
