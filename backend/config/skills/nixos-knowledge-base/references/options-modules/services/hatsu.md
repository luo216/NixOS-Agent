---
module: services.hatsu
option_count: 3
source: options.html
---

# services.hatsu

## services.hatsu.enable

Whether to enable Self-hosted and fully-automated ActivityPub bridge for static sites. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/hatsu.nix>

## services.hatsu.package

The hatsu package to use. Type: package Default: pkgs.hatsu Declared by: <nixpkgs/nixos/modules/services/web-apps/hatsu.nix>

## services.hatsu.settings

Configuration for Hatsu, see <link xlink:href=“https://hatsu.cli.rs/admins/environments.html”/> for supported values. Type: open submodule of attribute set of (null or boolean or signed integer or 16 bit unsigned integer; between 0 and 65535 (both inclusive) or string) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/hatsu.nix>
