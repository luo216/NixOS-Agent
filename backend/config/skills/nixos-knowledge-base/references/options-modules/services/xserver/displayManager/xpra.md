---
module: services.xserver.displayManager.xpra
option_count: 6
source: options.html
---

# services.xserver.displayManager.xpra

## services.xserver.displayManager.xpra.enable

Whether to enable xpra as display manager. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/x11/display-managers/xpra.nix>

## services.xserver.displayManager.xpra.auth

Authentication to use when connecting to xpra Type: string Default: "pam" Example: "password:value=mysecret" Declared by: <nixpkgs/nixos/modules/services/x11/display-managers/xpra.nix>

## services.xserver.displayManager.xpra.bindTcp

Bind xpra to TCP Type: null or string Default: "127.0.0.1:10000" Example: "0.0.0.0:10000" Declared by: <nixpkgs/nixos/modules/services/x11/display-managers/xpra.nix>

## services.xserver.displayManager.xpra.desktop

Start a desktop environment instead of seamless mode Type: null or string Default: null Example: "gnome-shell" Declared by: <nixpkgs/nixos/modules/services/x11/display-managers/xpra.nix>

## services.xserver.displayManager.xpra.extraOptions

Extra xpra options Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/x11/display-managers/xpra.nix>

## services.xserver.displayManager.xpra.pulseaudio

Whether to enable pulseaudio audio streaming. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/x11/display-managers/xpra.nix>
