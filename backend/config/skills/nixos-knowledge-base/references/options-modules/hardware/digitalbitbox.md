---
module: hardware.digitalbitbox
option_count: 2
source: options.html
---

# hardware.digitalbitbox

## hardware.digitalbitbox.enable

Enables udev rules for Digital Bitbox devices. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/hardware/digitalbitbox.nix>

## hardware.digitalbitbox.package

The digitalbitbox package to use. This can be used to install a package with udev rules that differ from the defaults. Type: package Default: pkgs.digitalbitbox Declared by: <nixpkgs/nixos/modules/hardware/digitalbitbox.nix>
