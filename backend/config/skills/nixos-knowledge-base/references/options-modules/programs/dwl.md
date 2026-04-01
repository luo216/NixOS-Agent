---
module: programs.dwl
option_count: 3
source: options.html
---

# programs.dwl

## programs.dwl.enable

Whether to enable Dwl is a compact, hackable compositor for Wayland based on wlroots. You can manually launch Dwl by executing “exec dwl” on a TTY. . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/wayland/dwl.nix>

## programs.dwl.package

The dwl package to use. Type: package Default: pkgs.dwl Example: # Lets apply bar patch from: # https://codeberg.org/dwl/dwl-patches/src/branch/main/patches/bar (pkgs.dwl.override { configH = ./dwl-config.h; }).overrideAttrs (oldAttrs: { buildInputs = oldAttrs.buildInputs or [] ++ [ pkgs.libdrm pkgs.fcft ]; patches = oldAttrs.patches or [] ++ [ ./bar-0.7.patch ]; }); Declared by: <nixpkgs/nixos/modules/programs/wayland/dwl.nix>

## programs.dwl.extraSessionCommands

Shell commands executed just before dwl is started. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/programs/wayland/dwl.nix>
