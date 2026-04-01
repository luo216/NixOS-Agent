---
module: services.rimgo
option_count: 3
source: options.html
---

# services.rimgo

## services.rimgo.enable

Whether to enable rimgo. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/rimgo.nix>

## services.rimgo.package

The rimgo package to use. Type: package Default: pkgs.rimgo Declared by: <nixpkgs/nixos/modules/services/web-apps/rimgo.nix>

## services.rimgo.settings

Settings for rimgo, see the official documentation for supported options. Type: open submodule of attribute set of string Example: { PORT = 69420; FORCE_WEBP = "1"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/rimgo.nix>
