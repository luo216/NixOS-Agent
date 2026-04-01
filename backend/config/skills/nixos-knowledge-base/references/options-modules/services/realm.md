---
module: services.realm
option_count: 3
source: options.html
---

# services.realm

## services.realm.enable

Whether to enable A simple, high performance relay server written in rust. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/realm.nix>

## services.realm.package

The realm package to use. Type: package Default: pkgs.realm Declared by: <nixpkgs/nixos/modules/services/networking/realm.nix>

## services.realm.config

The realm configuration, see https://github.com/zhboner/realm#overview for documentation. Type: open submodule of (JSON value) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/realm.nix>
