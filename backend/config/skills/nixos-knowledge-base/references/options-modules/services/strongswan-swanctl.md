---
module: services.strongswan-swanctl
option_count: 3
source: options.html
---

# services.strongswan-swanctl

## services.strongswan-swanctl.enable

Whether to enable strongswan-swanctl service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.package

The strongswan package to use. Type: package Default: pkgs.strongswan Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.includes

Extra configuration files to include in the swanctl configuration. This can be used to provide secret values from outside the nix store. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>
