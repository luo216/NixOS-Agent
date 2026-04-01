---
module: services.arsenik
option_count: 15
source: options.html
---

# services.arsenik

## services.arsenik.enable

Whether to enable A 33-key layout that works with all keyboards… Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/arsenik.nix>

## services.arsenik.package

The arsenik package to use. Type: package Default: pkgs.arsenik Declared by: <nixpkgs/nixos/modules/services/hardware/arsenik.nix>

## services.arsenik.anglemod

Choose here if you want to add an angle mod: ZXCVB are shifted to the left. See https://colemakmods.github.io/ergonomic-mods/angle.html for more details. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/arsenik.nix>

## services.arsenik.hold_timeout

The key must be held XX ms to become a layer shift. Type: signed integer Default: 200 Declared by: <nixpkgs/nixos/modules/services/hardware/arsenik.nix>

## services.arsenik.hrm

Enable homerow. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/arsenik.nix>

## services.arsenik.lafayette

Add AltGr programmation layer like Ergo‑L Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/arsenik.nix>

## services.arsenik.layout

Your keyboard layout. Possible values are: ergol qwerty-lafayette qwerty azerty qwertz bepo optimot Type: string Default: "ergol" Declared by: <nixpkgs/nixos/modules/services/hardware/arsenik.nix>

## services.arsenik.long_hold_timeout

Slightly higher value for typing keys, to prevent unexpected hold effect. Type: signed integer Default: 300 Declared by: <nixpkgs/nixos/modules/services/hardware/arsenik.nix>

## services.arsenik.lt

Enable layer-taps. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/arsenik.nix>

## services.arsenik.mac

Original key arrangement on your keyboard: Mac or PC. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/arsenik.nix>

## services.arsenik.num

Add NumRow layer Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/arsenik.nix>

## services.arsenik.run

The keyboard shortcut of your application launcher. Type: string Default: "M-p" Declared by: <nixpkgs/nixos/modules/services/hardware/arsenik.nix>

## services.arsenik.tap_timeout

The key must be pressed twice in XX ms to enable repetitions. Type: signed integer Default: 200 Declared by: <nixpkgs/nixos/modules/services/hardware/arsenik.nix>

## services.arsenik.vim

Navigation layer: ESDF or HJKL? Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/arsenik.nix>

## services.arsenik.wide

The right hand is moved one key to the right. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/arsenik.nix>
