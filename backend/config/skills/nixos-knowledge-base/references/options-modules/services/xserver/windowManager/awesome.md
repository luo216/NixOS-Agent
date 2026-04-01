---
module: services.xserver.windowManager.awesome
option_count: 4
source: options.html
---

# services.xserver.windowManager.awesome

## services.xserver.windowManager.awesome.enable

Whether to enable Awesome window manager. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/x11/window-managers/awesome.nix>

## services.xserver.windowManager.awesome.package

The awesome package to use. Type: package Default: pkgs.awesome Declared by: <nixpkgs/nixos/modules/services/x11/window-managers/awesome.nix>

## services.xserver.windowManager.awesome.luaModules

List of lua packages available for being used in the Awesome configuration. Type: list of package Default: [ ] Example: [ pkgs.luaPackages.vicious ] Declared by: <nixpkgs/nixos/modules/services/x11/window-managers/awesome.nix>

## services.xserver.windowManager.awesome.noArgb

Disable client transparency support, which can be greatly detrimental to performance in some setups Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/x11/window-managers/awesome.nix>
