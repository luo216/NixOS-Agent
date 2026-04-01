---
module: services.flannel
option_count: 13
source: options.html
---

# services.flannel

## services.flannel.enable

Whether to enable flannel. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/flannel.nix>

## services.flannel.package

The flannel package to use. Type: package Default: pkgs.flannel Declared by: <nixpkgs/nixos/modules/services/networking/flannel.nix>

## services.flannel.backend

Type of backend to use and specific configurations for that backend. Type: attribute set Default: { Type = "vxlan"; } Declared by: <nixpkgs/nixos/modules/services/networking/flannel.nix>

## services.flannel.extraNetworkConfig

Extra configuration to be added to the net-conf.json/etcd-backed network configuration. Type: JSON value Default: { } Example: { EnableIPv6 = true; } Declared by: <nixpkgs/nixos/modules/services/networking/flannel.nix>

## services.flannel.iface

Interface to use (IP or name) for inter-host communication. Defaults to the interface for the default route on the machine. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/flannel.nix>

## services.flannel.kubeconfig

Path to kubeconfig to use for storing flannel config using the Kubernetes API Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/flannel.nix>

## services.flannel.network

IPv4 network in CIDR format to use for the entire flannel network Type: string Declared by: <nixpkgs/nixos/modules/services/networking/flannel.nix>

## services.flannel.nodeName

Needed when running with Kubernetes as backend as this cannot be auto-detected"; Type: null or string Default: config.networking.fqdnOrHostName Example: "node1.example.com" Declared by: <nixpkgs/nixos/modules/services/networking/flannel.nix>

## services.flannel.publicIp

IP accessible by other nodes for inter-host communication. Defaults to the IP of the interface being used for communication. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/flannel.nix>

## services.flannel.storageBackend

Determines where flannel stores its configuration at runtime Type: one of “etcd”, “kubernetes” Default: "etcd" Declared by: <nixpkgs/nixos/modules/services/networking/flannel.nix>

## services.flannel.subnetLen

The size of the subnet allocated to each host. Defaults to 24 (i.e. /24) unless the Network was configured to be smaller than a /24 in which case it is one less than the network. Type: signed integer Default: 24 Declared by: <nixpkgs/nixos/modules/services/networking/flannel.nix>

## services.flannel.subnetMax

The end of IP range which the subnet allocation should start with. Defaults to the last subnet of Network. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/flannel.nix>

## services.flannel.subnetMin

The beginning of IP range which the subnet allocation should start with. Defaults to the first subnet of Network. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/flannel.nix>
