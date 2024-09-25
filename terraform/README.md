Folder PATH listing for volume Windows
Volume serial number is 9E0D-6129
C:.
¦   .gitignore
¦   .terraform.lock.hcl
¦   directory_structure.txt
¦   main.tf
¦   provider.tf
¦   secrets.tfvars
¦   terraform.tfstate
¦   terraform.tfstate.backup
¦   variables.tf
¦   
+---FSTD
¦   ¦   locals.tf
¦   ¦   main.tf
¦   ¦   variables.tf
¦   ¦   
¦   +---services
¦           app_services.tf
¦           container_registry.tf
¦           function_app.tf
¦           rbac.tf
¦           resource_group.tf
¦           sql_server.tf
¦           
+---modules
¦   +---container_registry
¦   ¦       main.tf
¦   ¦       outputs.tf
¦   ¦       variables.tf
¦   ¦       
¦   +---function_app
¦   ¦       main.tf
¦   ¦       outputs.tf
¦   ¦       variables.tf
¦   ¦       
¦   +---linux_app_service
¦   ¦       main.tf
¦   ¦       outputs.tf
¦   ¦       variables.tf
¦   ¦       
¦   +---rbac_role_assignment
¦   ¦       main.tf
¦   ¦       outputs.tf
¦   ¦       variables.tf
¦   ¦       
¦   +---resource_group
¦   ¦       main.tf
¦   ¦       outputs.tf
¦   ¦       variables.tf
¦   ¦       
¦   +---service_plan
¦   ¦       main.tf
¦   ¦       outputs.tf
¦   ¦       variables.tf
¦   ¦       
¦   +---sql_db
¦   ¦       main.tf
¦   ¦       outputs.tf
¦   ¦       variables.tf
¦   ¦       
¦   +---sql_server
¦   ¦       main.tf
¦   ¦       outputs.tf
¦   ¦       variables.tf
¦   ¦       
¦   +---storage_account
¦           main.tf
¦           outputs.tf
¦           variables.tf
¦           
+---polices
        require_tags.tf
        
