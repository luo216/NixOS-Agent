---
module: services.phylactery
option_count: 5
source: options.html
---

# services.phylactery

## services.phylactery.enable

Whether to enable Phylactery server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/phylactery.nix>

## services.phylactery.package

The phylactery package to use. Type: package Default: pkgs.phylactery Declared by: <nixpkgs/nixos/modules/services/web-apps/phylactery.nix>

## services.phylactery.host

Listen host for Phylactery Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/phylactery.nix>

## services.phylactery.library

Path to CBZ library Type: absolute path Declared by: <nixpkgs/nixos/modules/services/web-apps/phylactery.nix>

## services.phylactery.port

Listen port for Phylactery Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Declared by: <nixpkgs/nixos/modules/services/web-apps/phylactery.nix>
