---
module: services.unclutter-xfixes
option_count: 5
source: options.html
---

# services.unclutter-xfixes

## services.unclutter-xfixes.enable

Enable unclutter-xfixes to hide your mouse cursor when inactive. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/x11/unclutter-xfixes.nix>

## services.unclutter-xfixes.package

The unclutter-xfixes package to use. Type: package Default: pkgs.unclutter-xfixes Declared by: <nixpkgs/nixos/modules/services/x11/unclutter-xfixes.nix>

## services.unclutter-xfixes.extraOptions

More arguments to pass to the unclutter-xfixes command. Type: list of string Default: [ ] Example: [ "exclude-root" "ignore-scrolling" "fork" ] Declared by: <nixpkgs/nixos/modules/services/x11/unclutter-xfixes.nix>

## services.unclutter-xfixes.threshold

Minimum number of pixels considered cursor movement. Type: signed integer Default: 1 Declared by: <nixpkgs/nixos/modules/services/x11/unclutter-xfixes.nix>

## services.unclutter-xfixes.timeout

Number of seconds before the cursor is marked inactive. Type: signed integer Default: 1 Declared by: <nixpkgs/nixos/modules/services/x11/unclutter-xfixes.nix>
