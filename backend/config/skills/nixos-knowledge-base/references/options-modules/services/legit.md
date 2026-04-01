---
module: services.legit
option_count: 5
source: options.html
---

# services.legit

## services.legit.enable

Whether to enable legit git web frontend. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/legit.nix>

## services.legit.package

The legit-web package to use. Type: package Default: pkgs.legit-web Declared by: <nixpkgs/nixos/modules/services/networking/legit.nix>

## services.legit.group

Group account under which legit runs. Type: string Default: "legit" Declared by: <nixpkgs/nixos/modules/services/networking/legit.nix>

## services.legit.settings

The primary legit configuration. See the sample configuration for possible values. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/legit.nix>

## services.legit.user

User account under which legit runs. Type: string Default: "legit" Declared by: <nixpkgs/nixos/modules/services/networking/legit.nix>
