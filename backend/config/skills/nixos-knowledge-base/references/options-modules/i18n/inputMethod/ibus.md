---
module: i18n.inputMethod.ibus
option_count: 2
source: options.html
---

# i18n.inputMethod.ibus

## i18n.inputMethod.ibus.engines

Enabled IBus engines. Available engines are: anthy, bamboo, cangjie, chewing, hangul, libpinyin, libthai, m17n, mozc, mozc-ut, openbangla-keyboard, pinyin, rime, table, table-chinese, table-others, typing-booster, typing-booster-unwrapped, uniemoji. Type: list of ibus-engine Default: [ ] Example: with pkgs.ibus-engines; [ mozc hangul ] Declared by: <nixpkgs/nixos/modules/i18n/input-method/ibus.nix>

## i18n.inputMethod.ibus.panel

Replace the IBus panel with another panel. Type: null or absolute path Default: null Example: "${pkgs.kdePackages.plasma-desktop}/libexec/kimpanel-ibus-panel" Declared by: <nixpkgs/nixos/modules/i18n/input-method/ibus.nix>
