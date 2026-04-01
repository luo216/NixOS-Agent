---
module: services.softether
option_count: 3
source: options.html
---

# services.softether

## services.softether.enable

Whether to enable SoftEther VPN services. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/softether.nix>

## services.softether.package

The softether package to use. Type: package Default: pkgs.softether Declared by: <nixpkgs/nixos/modules/services/networking/softether.nix>

## services.softether.dataDir

Data directory for SoftEther VPN. Type: absolute path Default: "/var/lib/softether" Declared by: <nixpkgs/nixos/modules/services/networking/softether.nix>
