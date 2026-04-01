---
module: services.frr
option_count: 3
source: options.html
---

# services.frr

## services.frr.config

FRR configuration statements. Type: strings concatenated with “\n” Default: "" Example: '' router rip network 10.0.0.0/8 router ospf network 10.0.0.0/8 area 0 router bgp 65001 neighbor 10.0.0.1 remote-as 65001 '' Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>

## services.frr.configFile

Configuration file to use for FRR. By default the NixOS generated files are used. Type: null or absolute path Default: null Example: "/etc/frr/frr.conf" Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>

## services.frr.openFilesLimit

This is the maximum number of FD’s that will be available. Use a reasonable value for your setup if you are expecting a large number of peers in say BGP. Type: unsigned integer, meaning >=0 Default: 1024 Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>
