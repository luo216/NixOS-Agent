---
module: programs.flashrom
option_count: 2
source: options.html
---

# programs.flashrom

## programs.flashrom.enable

Installs flashrom and configures udev rules for programmers used by flashrom. Grants access to users in the “flashrom” group. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/programs/flashrom.nix>

## programs.flashrom.package

The flashrom package to use. Type: package Default: pkgs.flashrom Declared by: <nixpkgs/nixos/modules/programs/flashrom.nix>
