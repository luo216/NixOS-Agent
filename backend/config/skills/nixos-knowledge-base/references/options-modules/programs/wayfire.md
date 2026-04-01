---
module: programs.wayfire
option_count: 3
source: options.html
---

# programs.wayfire

## programs.wayfire.enable

Whether to enable Wayfire, a wayland compositor based on wlroots. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/wayland/wayfire.nix>

## programs.wayfire.package

The wayfire package to use. Type: package Default: pkgs.wayfire Declared by: <nixpkgs/nixos/modules/programs/wayland/wayfire.nix>

## programs.wayfire.plugins

Additional plugins to use with the wayfire window manager. Type: list of package Default: with pkgs.wayfirePlugins; [ wcm wf-shell ] Example: with pkgs.wayfirePlugins; [ wcm wf-shell wayfire-plugins-extra ]; Declared by: <nixpkgs/nixos/modules/programs/wayland/wayfire.nix>
