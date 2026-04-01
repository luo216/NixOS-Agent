---
module: programs.xwayland
option_count: 3
source: options.html
---

# programs.xwayland

## programs.xwayland.enable

Whether to enable Xwayland (an X server for interfacing X11 apps with the Wayland protocol). Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/xwayland.nix>

## programs.xwayland.package

The Xwayland package to use. Type: absolute path Default: pkgs.xwayland.override (oldArgs: { inherit (config.programs.xwayland) defaultFontPath; }) Declared by: <nixpkgs/nixos/modules/programs/xwayland.nix>

## programs.xwayland.defaultFontPath

Default font path. Setting this option causes Xwayland to be rebuilt. Type: string Default: optionalString config.fonts.fontDir.enable "/run/current-system/sw/share/X11/fonts" Declared by: <nixpkgs/nixos/modules/programs/xwayland.nix>
