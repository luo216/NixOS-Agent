---
module: programs.gtklock
option_count: 5
source: options.html
---

# programs.gtklock

## programs.gtklock.enable

Whether to enable gtklock, a GTK-based lockscreen for Wayland. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/wayland/gtklock.nix>

## programs.gtklock.package

The gtklock package to use. Type: package Default: pkgs.gtklock Declared by: <nixpkgs/nixos/modules/programs/wayland/gtklock.nix>

## programs.gtklock.config

Configuration for gtklock. See gtklock(1) man page for details. Type: attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string) or a non-empty list of them) Example: { main = { idle-hide = true; idle-timeout = 10; }; } Declared by: <nixpkgs/nixos/modules/programs/wayland/gtklock.nix>

## programs.gtklock.modules

gtklock modules to load. Type: list of package Default: [ ] Example: with pkgs; [ gtklock-playerctl-module gtklock-powerbar-module gtklock-userinfo-module ] Declared by: <nixpkgs/nixos/modules/programs/wayland/gtklock.nix>

## programs.gtklock.style

CSS Stylesheet for gtklock. See gtklock’s wiki for details. Type: null or strings concatenated with “\n” Default: null Declared by: <nixpkgs/nixos/modules/programs/wayland/gtklock.nix>
