---
module: services.iodine.server
option_count: 5
source: options.html
---

# services.iodine.server

## services.iodine.server.enable

enable iodined server Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/iodine.nix>

## services.iodine.server.domain

Domain or subdomain of which nameservers point to us Type: string Default: "" Example: "tunnel.mydomain.com" Declared by: <nixpkgs/nixos/modules/services/networking/iodine.nix>

## services.iodine.server.extraConfig

Additional command line parameters Type: string Default: "" Example: "-l 192.168.1.10 -p 23" Declared by: <nixpkgs/nixos/modules/services/networking/iodine.nix>

## services.iodine.server.ip

The assigned ip address or ip range Type: string Default: "" Example: "172.16.10.1/24" Declared by: <nixpkgs/nixos/modules/services/networking/iodine.nix>

## services.iodine.server.passwordFile

File that contains password Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/iodine.nix>
