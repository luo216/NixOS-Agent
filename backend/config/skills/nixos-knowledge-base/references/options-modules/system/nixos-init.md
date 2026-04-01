---
module: system.nixos-init
option_count: 2
source: options.html
---

# system.nixos-init

## system.nixos-init.enable

Whether to enable nixos-init, a system for bashless initialization. This doesn’t use any activationScripts. Anything set in these options is a no-op here. . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/system/activation/nixos-init.nix>

## system.nixos-init.package

The nixos-init package to use. Type: package Default: pkgs.nixos-init Declared by: <nixpkgs/nixos/modules/system/activation/nixos-init.nix>
