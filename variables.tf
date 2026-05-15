variable "location" {
  description = "Azure region for resources"
  type        = string
  default     = "eastus"
}

variable "vm_size" {
  description = "Azure VM size"
  type        = string
  default     = "Standard_D2s_v3"
}

variable "resource_group_name" {
  description = "Resource group name"
  type        = string
}

variable "admin_username" {
  description = "Admin username for the VM"
  type        = string
}

variable "ssh_public_key" {
  description = "SSH public key for VM login"
  type        = string
}