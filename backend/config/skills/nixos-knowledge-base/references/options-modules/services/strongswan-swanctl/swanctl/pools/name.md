---
module: services.strongswan-swanctl.swanctl.pools.<name>
option_count: 10
source: options.html
---

# services.strongswan-swanctl.swanctl.pools.<name>

## services.strongswan-swanctl.swanctl.pools.<name>.addrs

Addresses allocated in pool. Subnet or range defining addresses allocated in pool. Accepts a single CIDR subnet defining the pool to allocate addresses from or an address range (<from>-<to>). If the address in CIDR notation is not the network ID of the subnet (e.g. 10.1.0.5/24 instead of 10.1.0.0/24), addresses below it won’t be allocated to clients (they could e.g. be assigned manually to internal hosts like the VPN server itself). Pools must be unique and non-overlapping Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.pools.<name>.dhcp

Address or CIDR subnets StrongSwan default: [] Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.pools.<name>.dns

Address or CIDR subnets StrongSwan default: [] Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.pools.<name>.nbns

Address or CIDR subnets StrongSwan default: [] Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.pools.<name>.netmask

Address or CIDR subnets StrongSwan default: [] Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.pools.<name>.p_cscf

Address or CIDR subnets StrongSwan default: [] Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.pools.<name>.server

Address or CIDR subnets StrongSwan default: [] Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.pools.<name>.split_exclude

Address or CIDR subnets StrongSwan default: [] Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.pools.<name>.split_include

Address or CIDR subnets StrongSwan default: [] Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.pools.<name>.subnet

Address or CIDR subnets StrongSwan default: [] Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>
