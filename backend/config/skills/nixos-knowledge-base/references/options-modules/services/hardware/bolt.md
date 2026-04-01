---
module: services.hardware.bolt
option_count: 2
source: options.html
---

# services.hardware.bolt

## services.hardware.bolt.enable

Whether to enable Bolt, a userspace daemon to enable security levels for Thunderbolt 3 on GNU/Linux. Bolt is used by GNOME 3 to handle Thunderbolt settings. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/bolt.nix>

## services.hardware.bolt.package

The bolt package to use. Type: package Default: pkgs.bolt Declared by: <nixpkgs/nixos/modules/services/hardware/bolt.nix>
