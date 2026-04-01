---
module: services.swapspace
option_count: 5
source: options.html
---

# services.swapspace

## services.swapspace.enable

Whether to enable Swapspace, a dynamic swap space manager. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/system/swapspace.nix>

## services.swapspace.package

The swapspace package to use. Type: package Default: pkgs.swapspace Declared by: <nixpkgs/nixos/modules/services/system/swapspace.nix>

## services.swapspace.extraArgs

Any extra arguments to pass to swapspace Type: list of string Default: [ ] Example: [ "-P" "-v" ] Declared by: <nixpkgs/nixos/modules/services/system/swapspace.nix>

## services.swapspace.installWrapper

This will add swapspace wrapped with the generated config, to environment.systemPackages Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/system/swapspace.nix>

## services.swapspace.settings

Config file for swapspace. See the options here: https://github.com/Tookmund/Swapspace/blob/master/swapspace.conf Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/system/swapspace.nix>
