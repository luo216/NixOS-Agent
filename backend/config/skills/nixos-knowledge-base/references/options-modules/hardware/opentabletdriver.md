---
module: hardware.opentabletdriver
option_count: 3
source: options.html
---

# hardware.opentabletdriver

## hardware.opentabletdriver.enable

Enable OpenTabletDriver udev rules, user service and blacklist kernel modules known to conflict with OpenTabletDriver. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/hardware/opentabletdriver.nix>

## hardware.opentabletdriver.package

The opentabletdriver package to use. Type: package Default: pkgs.opentabletdriver Declared by: <nixpkgs/nixos/modules/hardware/opentabletdriver.nix>

## hardware.opentabletdriver.blacklistedKernelModules

Blacklist of kernel modules known to conflict with OpenTabletDriver. Type: list of string Default: [ "hid-uclogic" "wacom" ] Declared by: <nixpkgs/nixos/modules/hardware/opentabletdriver.nix>
