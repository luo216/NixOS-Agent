---
module: services.ddccontrol
option_count: 2
source: options.html
---

# services.ddccontrol

## services.ddccontrol.enable

Whether to enable ddccontrol for controlling displays. This enables hardware.i2c, so note to add yourself to hardware.i2c.group. . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/ddccontrol.nix>

## services.ddccontrol.package

The package with which to control brightness; added also to services.dbus.packages. package to use. Type: package Default: pkgs.ddccontrol Example: pkgs.ddcutil-service Declared by: <nixpkgs/nixos/modules/services/hardware/ddccontrol.nix>
