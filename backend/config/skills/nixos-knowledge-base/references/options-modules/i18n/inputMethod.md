---
module: i18n.inputMethod
option_count: 5
source: options.html
---

# i18n.inputMethod

## i18n.inputMethod.enable

Whether to enable an additional input method type. Type: boolean Default: true if the deprecated option enabled is set, false otherwise Example: true Declared by: <nixpkgs/nixos/modules/i18n/input-method/default.nix>

## i18n.inputMethod.enableGtk2

Whether to enable Gtk2 support. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/i18n/input-method/default.nix>

## i18n.inputMethod.enableGtk3

Whether to enable Gtk3 support. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/i18n/input-method/default.nix>

## i18n.inputMethod.enabled

Deprecated - use type and enable = true instead Type: null or one of “ibus”, “fcitx5”, “nabi”, “uim”, “hime”, “kime” Default: null Example: "fcitx5" Declared by: <nixpkgs/nixos/modules/i18n/input-method/default.nix>

## i18n.inputMethod.type

Select the enabled input method. Input methods is a software to input symbols that are not available on standard input devices. Input methods are specially used to input Chinese, Japanese and Korean characters. Currently the following input methods are available in NixOS: ibus: The intelligent input bus, extra input engines can be added using i18n.inputMethod.ibus.engines. fcitx5: The next generation of fcitx, addons (including engines, dictionaries, skins) can be added using i18n.inputMethod.fcitx5.addons. nabi: A Korean input method based on XIM. Nabi doesn’t support Qt 5. uim: The universal input method, is a library with a XIM bridge. uim mainly support Chinese, Japanese and Korean. hime: An extremely easy-to-use input method framework. kime: Koream IME. Type: null or one of “ibus”, “fcitx5”, “nabi”, “uim”, “hime”, “kime” Default: The value of the deprecated option enabled, defaulting to null Example: "fcitx5" Declared by: <nixpkgs/nixos/modules/i18n/input-method/default.nix>
