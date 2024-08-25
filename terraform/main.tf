provider "azurerm" {
  features {}
}

variable "cluster_name" {
  default = "my-cluster"
}

variable "resource_group_location" {
  default     = "North Europe"
  type        = string
  description = "Location of the resource group."
}

variable "env" {
    default     = "dev"
    type        = string
    description = "The stage of the environment"
}

resource "azurerm_resource_group" "resource-group" {
  name     = "AKS-resource-group"
  location = var.resource_group_location
  
}

resource "azurerm_virtual_network" "vnet" {
  name                = "vnet-${var.cluster_name}-${var.env}_env"
  address_space       = ["10.10.0.0/16"]
  location            = azurerm_resource_group.resource-group.location
  resource_group_name = azurerm_resource_group.resource-group.name
}

resource "azurerm_subnet" "subnet1" {
  name                 = "subnet-1"
  resource_group_name  = azurerm_resource_group.resource-group.name
  virtual_network_name = azurerm_virtual_network.vnet.name
  address_prefixes     = ["10.10.1.0/24"]
}

resource "azurerm_kubernetes_cluster" "cluster" {
  name                = "k8s-${var.env}"
  location            = azurerm_resource_group.resource-group.location
  resource_group_name = azurerm_resource_group.resource-group.name
  dns_prefix          = "k8s-dns-${var.env}"

  default_node_pool {
    name            = "mynodepool"
    node_count      = 1
    vm_size         = "Standard_A2_v2"
    os_disk_size_gb = 30
    vnet_subnet_id  = azurerm_subnet.subnet1.id
  }

 identity {
    type = "SystemAssigned"
  }
  tags = {
    environment = var.env
  }
  
}
