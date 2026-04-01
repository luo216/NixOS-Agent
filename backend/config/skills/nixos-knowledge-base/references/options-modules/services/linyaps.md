---
module: services.linyaps
option_count: 4
source: options.html
---

# services.linyaps

## services.linyaps.enable

Whether to enable linyaps, a cross-distribution package manager with sandboxed apps and shared runtime. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/desktops/linyaps.nix>

## services.linyaps.package

The linyaps package to use. Type: package Default: pkgs.linyaps Declared by: <nixpkgs/nixos/modules/services/desktops/linyaps.nix>

## services.linyaps.boxPackage

The linyaps-box package to use. Type: package Default: pkgs.linyaps-box Declared by: <nixpkgs/nixos/modules/services/desktops/linyaps.nix>

## services.linyaps.webStoreInstallerPackage

The linyaps-web-store-installer package to use. Type: package Default: pkgs.linyaps-web-store-installer Declared by: <nixpkgs/nixos/modules/services/desktops/linyaps.nix>
