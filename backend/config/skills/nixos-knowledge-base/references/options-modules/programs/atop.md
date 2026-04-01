---
module: programs.atop
option_count: 3
source: options.html
---

# programs.atop

## programs.atop.enable

Whether to enable Atop, a tool for monitoring system resources. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/atop.nix>

## programs.atop.package

The atop package to use. Type: package Default: pkgs.atop Declared by: <nixpkgs/nixos/modules/programs/atop.nix>

## programs.atop.settings

Parameters to be written to /etc/atoprc. Type: attribute set Default: { } Example: { flags = "a1f"; interval = 5; } Declared by: <nixpkgs/nixos/modules/programs/atop.nix>
