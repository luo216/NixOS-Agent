---
module: services.v2raya
option_count: 3
source: options.html
---

# services.v2raya

## services.v2raya.enable

Whether to enable the v2rayA service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/v2raya.nix>

## services.v2raya.package

The v2raya package to use. Type: package Default: pkgs.v2raya Declared by: <nixpkgs/nixos/modules/services/networking/v2raya.nix>

## services.v2raya.cliPackage

The v2ray package to use. This is the package used for overriding the value of the v2ray attribute in the package set by services.v2raya.package. Type: package Default: pkgs.v2ray Example: pkgs.xray Declared by: <nixpkgs/nixos/modules/services/networking/v2raya.nix>
