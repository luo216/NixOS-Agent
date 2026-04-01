---
module: programs.openvpn3
option_count: 4
source: options.html
---

# programs.openvpn3

## programs.openvpn3.enable

Whether to enable the openvpn3 client. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/openvpn3.nix>

## programs.openvpn3.package

The openvpn3 package to use. Type: package Default: pkgs.openvpn3 Declared by: <nixpkgs/nixos/modules/programs/openvpn3.nix>

## programs.openvpn3.log-service

Log service configuration Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/programs/openvpn3.nix>

## programs.openvpn3.netcfg

Network configuration Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/programs/openvpn3.nix>
