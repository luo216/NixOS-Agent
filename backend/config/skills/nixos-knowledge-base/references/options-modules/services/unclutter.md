---
module: services.unclutter
option_count: 7
source: options.html
---

# services.unclutter

## services.unclutter.enable

Enable unclutter to hide your mouse cursor when inactive Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/x11/unclutter.nix>

## services.unclutter.package

The unclutter package to use. Type: package Default: pkgs.unclutter Declared by: <nixpkgs/nixos/modules/services/x11/unclutter.nix>

## services.unclutter.excluded

Names of windows where unclutter should not apply Type: list of string Default: [ ] Example: [ "" ] Declared by: <nixpkgs/nixos/modules/services/x11/unclutter.nix>

## services.unclutter.extraOptions

More arguments to pass to the unclutter command Type: list of string Default: [ ] Example: [ "noevent" "grab" ] Declared by: <nixpkgs/nixos/modules/services/x11/unclutter.nix>

## services.unclutter.keystroke

Wait for a keystroke before hiding the cursor Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/x11/unclutter.nix>

## services.unclutter.threshold

Minimum number of pixels considered cursor movement Type: signed integer Default: 1 Declared by: <nixpkgs/nixos/modules/services/x11/unclutter.nix>

## services.unclutter.timeout

Number of seconds before the cursor is marked inactive Type: signed integer Default: 1 Declared by: <nixpkgs/nixos/modules/services/x11/unclutter.nix>
