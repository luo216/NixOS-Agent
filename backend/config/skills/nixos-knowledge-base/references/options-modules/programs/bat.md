---
module: programs.bat
option_count: 4
source: options.html
---

# programs.bat

## programs.bat.enable

Whether to enable bat, a cat(1) clone with wings. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/bat.nix>

## programs.bat.package

The bat package to use. Type: package Default: pkgs.bat Declared by: <nixpkgs/nixos/modules/programs/bat.nix>

## programs.bat.extraPackages

Extra bat scripts to be added to the system configuration. Type: list of package Default: [ ] Example: with pkgs.bat-extras; [ batdiff batman prettybat ]; Declared by: <nixpkgs/nixos/modules/programs/bat.nix>

## programs.bat.settings

Parameters to be written to the system-wide bat configuration file. Type: attribute set of (atom (null, bool, int, float or string) or a list of them for duplicate keys) Default: { } Example: { italic-text = "always"; map-syntax = [ "*.ino:C++" ".ignore:Git Ignore" ]; pager = "less --RAW-CONTROL-CHARS --quit-if-one-screen --mouse"; paging = "never"; theme = "TwoDark"; } Declared by: <nixpkgs/nixos/modules/programs/bat.nix>
