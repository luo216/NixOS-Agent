---
module: services.picom
option_count: 18
source: options.html
---

# services.picom

## services.picom.enable

Whether or not to enable Picom as the X.org composite manager. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/x11/picom.nix>

## services.picom.package

The picom package to use. Type: package Default: pkgs.picom Declared by: <nixpkgs/nixos/modules/services/x11/picom.nix>

## services.picom.activeOpacity

Opacity of active windows. Type: integer or floating point number between 0 and 1 (both inclusive) Default: 1.0 Example: 0.8 Declared by: <nixpkgs/nixos/modules/services/x11/picom.nix>

## services.picom.backend

Backend to use: egl, glx, xrender or xr_glx_hybrid. Type: one of “egl”, “glx”, “xrender”, “xr_glx_hybrid” Default: "xrender" Declared by: <nixpkgs/nixos/modules/services/x11/picom.nix>

## services.picom.fade

Fade windows in and out. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/x11/picom.nix>

## services.picom.fadeDelta

Time between fade animation step (in ms). Type: positive integer, meaning >0 Default: 10 Example: 5 Declared by: <nixpkgs/nixos/modules/services/x11/picom.nix>

## services.picom.fadeExclude

List of conditions of windows that should not be faded. See picom(1) man page for more examples. Type: list of string Default: [ ] Example: [ "window_type *= 'menu'" "name ~= 'Firefox$'" "focused = 1" ] Declared by: <nixpkgs/nixos/modules/services/x11/picom.nix>

## services.picom.fadeSteps

Opacity change between fade steps (in and out). Type: pair of integer or floating point number between 0.01 and 1 (both inclusive) Default: [ 0.028 0.03 ] Example: [ 0.04 0.04 ] Declared by: <nixpkgs/nixos/modules/services/x11/picom.nix>

## services.picom.inactiveOpacity

Opacity of inactive windows. Type: integer or floating point number between 0.1 and 1 (both inclusive) Default: 1.0 Example: 0.8 Declared by: <nixpkgs/nixos/modules/services/x11/picom.nix>

## services.picom.menuOpacity

Opacity of dropdown and popup menu. Type: integer or floating point number between 0 and 1 (both inclusive) Default: 1.0 Example: 0.8 Declared by: <nixpkgs/nixos/modules/services/x11/picom.nix>

## services.picom.opacityRules

Rules that control the opacity of windows, in format PERCENT:PATTERN. Type: list of string Default: [ ] Example: [ "95:class_g = 'URxvt' && !_NET_WM_STATE@:32a" "0:_NET_WM_STATE@:32a *= '_NET_WM_STATE_HIDDEN'" ] Declared by: <nixpkgs/nixos/modules/services/x11/picom.nix>

## services.picom.settings

Picom settings. Use this option to configure Picom settings not exposed in a NixOS option or to bypass one. For the available options see the CONFIGURATION FILES section at picom(1). Type: libconfig configuration. The format consists of an attributes set (called a group) of settings. Each setting can be a scalar type (boolean, integer, floating point number or string), a list of scalars or a group itself Default: { } Example: blur = { method = "gaussian"; size = 10; deviation = 5.0; }; Declared by: <nixpkgs/nixos/modules/services/x11/picom.nix>

## services.picom.shadow

Draw window shadows. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/x11/picom.nix>

## services.picom.shadowExclude

List of conditions of windows that should have no shadow. See picom(1) man page for more examples. Type: list of string Default: [ ] Example: [ "window_type *= 'menu'" "name ~= 'Firefox$'" "focused = 1" ] Declared by: <nixpkgs/nixos/modules/services/x11/picom.nix>

## services.picom.shadowOffsets

Left and right offset for shadows (in pixels). Type: pair of signed integer Default: [ -15 -15 ] Example: [ -10 -15 ] Declared by: <nixpkgs/nixos/modules/services/x11/picom.nix>

## services.picom.shadowOpacity

Window shadows opacity. Type: integer or floating point number between 0 and 1 (both inclusive) Default: 0.75 Example: 0.8 Declared by: <nixpkgs/nixos/modules/services/x11/picom.nix>

## services.picom.vSync

Enable vertical synchronization. Chooses the best method (drm, opengl, opengl-oml, opengl-swc, opengl-mswc) automatically. The bool value should be used, the others are just for backwards compatibility. Type: boolean or one of “none”, “drm”, “opengl”, “opengl-oml”, “opengl-swc”, “opengl-mswc” Default: false Declared by: <nixpkgs/nixos/modules/services/x11/picom.nix>

## services.picom.wintypes

Rules for specific window types. Type: attribute set Default: { popup_menu = { opacity = config.services.picom.menuOpacity; }; dropdown_menu = { opacity = config.services.picom.menuOpacity; }; } Example: { } Declared by: <nixpkgs/nixos/modules/services/x11/picom.nix>
