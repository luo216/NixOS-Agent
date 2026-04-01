---
module: i18n.inputMethod.fcitx5
option_count: 5
source: options.html
---

# i18n.inputMethod.fcitx5

## i18n.inputMethod.fcitx5.addons

Enabled Fcitx5 addons. Type: list of package Default: [ ] Example: with pkgs; [ fcitx5-rime ] Declared by: <nixpkgs/nixos/modules/i18n/input-method/fcitx5.nix>

## i18n.inputMethod.fcitx5.ignoreUserConfig

Ignore the user configures. Warning: When this is enabled, the user config files are totally ignored and the user dict can’t be saved and loaded. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/i18n/input-method/fcitx5.nix>

## i18n.inputMethod.fcitx5.quickPhrase

Quick phrases. Type: attribute set of string Default: { } Example: { smile = "（・∀・）"; angry = "(￣ー￣)"; } Declared by: <nixpkgs/nixos/modules/i18n/input-method/fcitx5.nix>

## i18n.inputMethod.fcitx5.quickPhraseFiles

Quick phrase files. Type: attribute set of absolute path Default: { } Example: { words = ./words.mb; numbers = ./numbers.mb; } Declared by: <nixpkgs/nixos/modules/i18n/input-method/fcitx5.nix>

## i18n.inputMethod.fcitx5.waylandFrontend

Use the Wayland input method frontend. See Using Fcitx 5 on Wayland. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/i18n/input-method/fcitx5.nix>
