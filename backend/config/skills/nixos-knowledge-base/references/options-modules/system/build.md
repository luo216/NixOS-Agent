---
module: system.build
option_count: 3
source: options.html
---

# system.build

## system.build.images

Different target images generated for this NixOS configuration. Type: lazy attribute set of raw value (read only) Declared by: <nixpkgs/nixos/modules/image/images.nix>

## system.build.separateActivationScript

A separate activation script package that’s not part of the system profile. This is useful for configurations where system.activatable is false. Otherwise, you can just use system.build.toplevel. Type: package Declared by: <nixpkgs/nixos/modules/system/activation/activatable-system.nix>

## system.build.toplevel

This option contains the store path that typically represents a NixOS system. You can read this path in a custom deployment tool for example. Type: package (read only) Declared by: <nixpkgs/nixos/modules/system/activation/top-level.nix>
