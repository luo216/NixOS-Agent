---
module: services.iodine.clients.<name>
option_count: 4
source: options.html
---

# services.iodine.clients.<name>

## services.iodine.clients.<name>.extraConfig

Additional command line parameters Type: string Default: "" Example: "-l 192.168.1.10 -p 23" Declared by: <nixpkgs/nixos/modules/services/networking/iodine.nix>

## services.iodine.clients.<name>.passwordFile

Path to a file containing the password. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/iodine.nix>

## services.iodine.clients.<name>.relay

DNS server to use as an intermediate relay to the iodined server Type: string Default: "" Example: "8.8.8.8" Declared by: <nixpkgs/nixos/modules/services/networking/iodine.nix>

## services.iodine.clients.<name>.server

Hostname of server running iodined Type: string Default: "" Example: "tunnel.mydomain.com" Declared by: <nixpkgs/nixos/modules/services/networking/iodine.nix>
