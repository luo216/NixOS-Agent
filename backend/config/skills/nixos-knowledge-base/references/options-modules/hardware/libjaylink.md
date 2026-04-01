---
module: hardware.libjaylink
option_count: 2
source: options.html
---

# hardware.libjaylink

## hardware.libjaylink.enable

Whether to enable udev rules for devices supported by libjaylink. Add users to the jlink group in order to grant them access . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/hardware/libjaylink.nix>

## hardware.libjaylink.package

The libjaylink package to use. Type: package Default: pkgs.libjaylink Declared by: <nixpkgs/nixos/modules/hardware/libjaylink.nix>
