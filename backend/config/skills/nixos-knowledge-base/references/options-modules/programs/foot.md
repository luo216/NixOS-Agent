---
module: programs.foot
option_count: 7
source: options.html
---

# programs.foot

## programs.foot.enable

Whether to enable foot terminal emulator. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/foot>

## programs.foot.enableBashIntegration

Whether to enable foot bash integration. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/programs/foot>

## programs.foot.enableFishIntegration

Whether to enable foot fish integration. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/programs/foot>

## programs.foot.enableZshIntegration

Whether to enable foot zsh integration. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/programs/foot>

## programs.foot.package

The foot package to use. Type: package Default: pkgs.foot Declared by: <nixpkgs/nixos/modules/programs/foot>

## programs.foot.settings

Configuration for foot terminal emulator. Further information can be found in man 5 foot.ini. Global configuration has to be written under the [main] section. Type: attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string) or a list of them for duplicate keys) Default: { } Example: { main = { font = "FreeMono:size=12"; }; scrollback = { lines = 100000; }; } Declared by: <nixpkgs/nixos/modules/programs/foot>

## programs.foot.theme

Theme name. Check https://codeberg.org/dnkl/foot/src/branch/master/themes for available themes. Type: null or string Default: null Example: "aeroroot" Declared by: <nixpkgs/nixos/modules/programs/foot>
