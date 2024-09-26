resource "time_sleep" "wait" {
  create_duration = var.duration  # Duration to wait, passed as a variable
}