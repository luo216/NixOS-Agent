---
module: i18n.inputMethod.fcitx5.settings
option_count: 3
source: options.html
---

# i18n.inputMethod.fcitx5.settings

## i18n.inputMethod.fcitx5.settings.addons

The addon configures in conf folder in ini format with global sections. Each item is written to the corresponding file. Type: attribute set of anything Default: { } Example: { pinyin.globalSection.EmojiEnabled = "True"; } Declared by: <nixpkgs/nixos/modules/i18n/input-method/fcitx5.nix>

## i18n.inputMethod.fcitx5.settings.globalOptions

The global options in config file in ini format. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Declared by: <nixpkgs/nixos/modules/i18n/input-method/fcitx5.nix>

## i18n.inputMethod.fcitx5.settings.inputMethod

The input method configure in profile file in ini format. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Declared by: <nixpkgs/nixos/modules/i18n/input-method/fcitx5.nix>
