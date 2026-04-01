---
module: programs.opengamepadui
option_count: 6
source: options.html
---

# programs.opengamepadui

## programs.opengamepadui.enable

Whether to enable opengamepadui. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/opengamepadui.nix>

## programs.opengamepadui.package

The OpenGamepadUI package to use. Type: package Default: pkgs.opengamepadui Declared by: <nixpkgs/nixos/modules/programs/opengamepadui.nix>

## programs.opengamepadui.args

Arguments to be passed to OpenGamepadUI Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/programs/opengamepadui.nix>

## programs.opengamepadui.extraPackages

Additional packages to add to the OpenGamepadUI environment. Type: list of package Default: [ ] Example: with pkgs; [ gamescope ] Declared by: <nixpkgs/nixos/modules/programs/opengamepadui.nix>

## programs.opengamepadui.fontPackages

Font packages to use in OpenGamepadUI. Defaults to system fonts, but could be overridden to use other fonts — useful for users who would like to customize CJK fonts used in opengamepadui. According to the upstream issue, opengamepadui only follows the per-user fontconfig configuration. Type: list of package Default: builtins.filter lib.types.package.check config.fonts.packages Example: with pkgs; [ source-han-sans ] Declared by: <nixpkgs/nixos/modules/programs/opengamepadui.nix>

## programs.opengamepadui.gamescopeSession

Run a GameScope driven OpenGamepadUI session from your display-manager Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/programs/opengamepadui.nix>
