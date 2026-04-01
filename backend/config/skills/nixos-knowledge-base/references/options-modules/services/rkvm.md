---
module: services.rkvm
option_count: 2
source: options.html
---

# services.rkvm

## services.rkvm.enable

Whether to enable rkvm, a Virtual KVM switch for Linux machines. Type: boolean Default: config.services.rkvm.server.enable || config.services.rkvm.client.enable Declared by: <nixpkgs/nixos/modules/services/misc/rkvm.nix>

## services.rkvm.package

The rkvm package to use. Type: package Default: pkgs.rkvm Declared by: <nixpkgs/nixos/modules/services/misc/rkvm.nix>
