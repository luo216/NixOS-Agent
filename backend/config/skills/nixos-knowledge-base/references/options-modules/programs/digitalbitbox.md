---
module: programs.digitalbitbox
option_count: 2
source: options.html
---

# programs.digitalbitbox

## programs.digitalbitbox.enable

Installs the Digital Bitbox application and enables the complementary hardware module. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/programs/digitalbitbox/default.nix>

## programs.digitalbitbox.package

The digitalbitbox package to use. This can be used to install a package with udev rules that differ from the defaults. Type: package Default: pkgs.digitalbitbox Declared by: <nixpkgs/nixos/modules/programs/digitalbitbox/default.nix>
