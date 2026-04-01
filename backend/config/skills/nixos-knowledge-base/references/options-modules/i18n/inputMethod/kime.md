---
module: i18n.inputMethod.kime
option_count: 3
source: options.html
---

# i18n.inputMethod.kime

## i18n.inputMethod.kime.daemonModules

List of enabled daemon modules Type: list of (one of “Xim”, “Wayland”, “Indicator”) Default: [ "Xim" "Wayland" "Indicator" ] Example: [ "Xim" "Indicator" ] Declared by: <nixpkgs/nixos/modules/i18n/input-method/kime.nix>

## i18n.inputMethod.kime.extraConfig

extra kime configuration. Refer to https://github.com/Riey/kime/blob/v3.1.1/docs/CONFIGURATION.md for details on supported values. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/i18n/input-method/kime.nix>

## i18n.inputMethod.kime.iconColor

Color of the indicator icon Type: one of “Black”, “White” Default: "Black" Example: "White" Declared by: <nixpkgs/nixos/modules/i18n/input-method/kime.nix>
