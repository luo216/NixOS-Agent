---
module: services.input-remapper
option_count: 4
source: options.html
---

# services.input-remapper

## services.input-remapper.enable

Whether to enable input-remapper, an easy to use tool to change the mapping of your input device buttons. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/input-remapper.nix>

## services.input-remapper.enableUdevRules

Whether to enable udev rules added by input-remapper to handle hotplugged devices. Currently disabled by default due to https://github.com/sezanzeb/input-remapper/issues/140. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/input-remapper.nix>

## services.input-remapper.package

The input-remapper package to use. Type: package Default: pkgs.input-remapper Declared by: <nixpkgs/nixos/modules/services/misc/input-remapper.nix>

## services.input-remapper.serviceWantedBy

Specifies the WantedBy setting for the input-remapper service. Type: list of string Default: [ "graphical.target" ] Example: [ "multi-user.target" ] Declared by: <nixpkgs/nixos/modules/services/misc/input-remapper.nix>
