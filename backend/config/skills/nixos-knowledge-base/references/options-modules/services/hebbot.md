---
module: services.hebbot
option_count: 4
source: options.html
---

# services.hebbot

## services.hebbot.enable

Whether to enable hebbot. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/matrix/hebbot.nix>

## services.hebbot.package

The hebbot package to use. Type: package Default: pkgs.hebbot Declared by: <nixpkgs/nixos/modules/services/matrix/hebbot.nix>

## services.hebbot.botPasswordFile

A path to the password file for your bot. Consider using a path that does not end up in your Nix store as it would be world readable. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/matrix/hebbot.nix>

## services.hebbot.settings

Configuration for Hebbot, see, for examples: https://github.com/matrix-org/twim-config/blob/master/config.toml https://gitlab.gnome.org/Teams/Websites/thisweek.gnome.org/-/blob/main/hebbot/config.toml Type: TOML value Default: { } Declared by: <nixpkgs/nixos/modules/services/matrix/hebbot.nix>
