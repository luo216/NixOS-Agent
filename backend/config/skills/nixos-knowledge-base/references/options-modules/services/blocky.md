---
module: services.blocky
option_count: 4
source: options.html
---

# services.blocky

## services.blocky.enable

Whether to enable blocky, a fast and lightweight DNS proxy as ad-blocker for local network with many features. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/blocky.nix>

## services.blocky.enableConfigCheck

Whether to enable checking the config during build time. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/networking/blocky.nix>

## services.blocky.package

The blocky package to use. Type: package Default: pkgs.blocky Declared by: <nixpkgs/nixos/modules/services/networking/blocky.nix>

## services.blocky.settings

Blocky configuration. Refer to https://0xerr0r.github.io/blocky/configuration/ for details on supported values. Type: YAML 1.1 value Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/blocky.nix>
