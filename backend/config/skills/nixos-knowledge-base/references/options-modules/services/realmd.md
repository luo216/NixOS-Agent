---
module: services.realmd
option_count: 2
source: options.html
---

# services.realmd

## services.realmd.enable

Whether to enable realmd service for managing system enrollment in Active Directory domains. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/realmd.nix>

## services.realmd.package

The realmd package to use. Type: package Default: pkgs.realmd Declared by: <nixpkgs/nixos/modules/services/misc/realmd.nix>
