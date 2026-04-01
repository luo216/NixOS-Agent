---
module: services.rosenpass
option_count: 4
source: options.html
---

# services.rosenpass

## services.rosenpass.enable

Whether to enable Rosenpass. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/rosenpass.nix>

## services.rosenpass.package

The rosenpass package to use. Type: package Default: pkgs.rosenpass Declared by: <nixpkgs/nixos/modules/services/networking/rosenpass.nix>

## services.rosenpass.defaultDevice

Name of the network interface to use for all peers by default. Type: null or string Example: "wg0" Declared by: <nixpkgs/nixos/modules/services/networking/rosenpass.nix>

## services.rosenpass.settings

Configuration for Rosenpass, see https://rosenpass.eu/ for further information. Type: open submodule of (TOML value) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/rosenpass.nix>
