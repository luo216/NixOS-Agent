---
module: programs.wshowkeys
option_count: 2
source: options.html
---

# programs.wshowkeys

## programs.wshowkeys.enable

Whether to enable wshowkeys (displays keypresses on screen on supported Wayland compositors). It requires root permissions to read input events, but these permissions are dropped after startup. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/wshowkeys.nix>

## programs.wshowkeys.package

The wshowkeys package to use. Type: package Default: pkgs.wshowkeys Declared by: <nixpkgs/nixos/modules/programs/wshowkeys.nix>
