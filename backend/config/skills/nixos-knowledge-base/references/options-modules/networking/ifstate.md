---
module: networking.ifstate
option_count: 3
source: options.html
---

# networking.ifstate

## networking.ifstate.enable

Whether to enable networking using IfState. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/ifstate.nix>

## networking.ifstate.package

The ifstate package to use. Type: package Default: pkgs.ifstate Declared by: <nixpkgs/nixos/modules/services/networking/ifstate.nix>

## networking.ifstate.settings

Content of IfState’s configuration file. See https://ifstate.net/2.2/schema/ for details. Type: YAML 1.1 value Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/ifstate.nix>
