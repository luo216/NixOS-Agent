---
module: services.misskey
option_count: 3
source: options.html
---

# services.misskey

## services.misskey.enable

Whether to enable misskey. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>

## services.misskey.package

The misskey package to use. Type: package Default: pkgs.misskey Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>

## services.misskey.settings

Configuration for Misskey, see example.yml for all supported options. Type: open submodule of attribute set of (YAML 1.1 value) Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>
