---
module: services.xserver.windowManager.qtile
option_count: 4
source: options.html
---

# services.xserver.windowManager.qtile

## services.xserver.windowManager.qtile.enable

Whether to enable qtile. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/x11/window-managers/qtile.nix>

## services.xserver.windowManager.qtile.package

The qtile package to use. Type: package Default: pkgs.python3.pkgs.qtile Declared by: <nixpkgs/nixos/modules/services/x11/window-managers/qtile.nix>

## services.xserver.windowManager.qtile.configFile

Path to the qtile configuration file. If null, $XDG_CONFIG_HOME/qtile/config.py will be used. Type: null or absolute path Default: null Example: ./your_config.py Declared by: <nixpkgs/nixos/modules/services/x11/window-managers/qtile.nix>

## services.xserver.windowManager.qtile.extraPackages

Extra Python packages available to Qtile. An example would be to include python3Packages.qtile-extras for additional unofficial widgets. Type: function that evaluates to a(n) list of package Default: python3Packages: with python3Packages; []; Example: python3Packages: with python3Packages; [ qtile-extras ]; Declared by: <nixpkgs/nixos/modules/services/x11/window-managers/qtile.nix>
