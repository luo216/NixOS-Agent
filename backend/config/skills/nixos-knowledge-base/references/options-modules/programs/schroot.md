---
module: programs.schroot
option_count: 4
source: options.html
---

# programs.schroot

## programs.schroot.enable

Whether to enable schroot, a lightweight virtualisation tool. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/schroot.nix>

## programs.schroot.package

The schroot package to use. Type: package Default: pkgs.schroot Declared by: <nixpkgs/nixos/modules/programs/schroot.nix>

## programs.schroot.profiles

Custom configuration profiles for schroot. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/programs/schroot.nix>

## programs.schroot.settings

Schroot configuration settings. For more details, see schroot.conf(5). Type: attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Example: { noble = { description = "Ubuntu 24.04 Noble"; directory = "/srv/chroot/noble"; personality = "linux"; preserve-environment = false; profile = "my-profile"; root-users = "my-user"; shell = "/bin/bash"; type = "directory"; users = "my-user"; }; } Declared by: <nixpkgs/nixos/modules/programs/schroot.nix>
