---
module: services.clatd
option_count: 4
source: options.html
---

# services.clatd

## services.clatd.enable

Whether to enable clatd. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/clatd.nix>

## services.clatd.enableNetworkManagerIntegration

Whether to enable NetworkManager integration. Type: boolean Default: "config.networking.networkmanager.enable" Example: true Declared by: <nixpkgs/nixos/modules/services/networking/clatd.nix>

## services.clatd.package

The clatd package to use. Type: package Default: pkgs.clatd Declared by: <nixpkgs/nixos/modules/services/networking/clatd.nix>

## services.clatd.settings

Configuration of clatd. See clatd Documentation. Type: open submodule of attribute set of (atom (null, bool, int, float or string)) Default: { } Example: { plat-prefix = "64:ff9b::/96"; } Declared by: <nixpkgs/nixos/modules/services/networking/clatd.nix>
