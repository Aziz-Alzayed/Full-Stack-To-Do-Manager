# modules/policy/main.tf

resource "azurerm_policy_definition" "require_tags" {
  name         = "require-tags"
  policy_type  = "Custom"
  mode         = "All"
  display_name = "Require Tags on Resources"
  description  = "Ensure all resources have specific tags."

  policy_rule = <<POLICY_RULE
  {
    "if": {
      "not": {
        "field": "tags",
        "exists": "true"
      }
    },
    "then": {
      "effect": "deny"
    }
  }
  POLICY_RULE
}

resource "azurerm_resource_group_policy_assignment" "require_tags_assignment" {
  name                 = "require-tags-assignment"
  resource_group_id    = var.scope
  policy_definition_id = azurerm_policy_definition.require_tags.id
}
