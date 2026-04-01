---
module: services.autorandr.profiles.<name>
option_count: 3
source: options.html
---

# services.autorandr.profiles.<name>

## services.autorandr.profiles.<name>.config

Per output profile configuration. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/autorandr.nix>

## services.autorandr.profiles.<name>.fingerprint

Output name to EDID mapping. Use autorandr --fingerprint to get current setup values. Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/autorandr.nix>

## services.autorandr.profiles.<name>.hooks

Profile hook scripts. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/autorandr.nix>
