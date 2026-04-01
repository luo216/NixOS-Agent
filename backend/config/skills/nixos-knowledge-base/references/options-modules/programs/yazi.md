---
module: programs.yazi
option_count: 6
source: options.html
---

# programs.yazi

## programs.yazi.enable

Whether to enable yazi terminal file manager. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/yazi.nix>

## programs.yazi.package

The yazi package to use. Type: package Default: pkgs.yazi Declared by: <nixpkgs/nixos/modules/programs/yazi.nix>

## programs.yazi.flavors

Pre-made themes. See https://yazi-rs.github.io/docs/flavors/overview/ for documentation. Type: attribute set of (absolute path or package) Default: { } Example: { foo = ./foo; inherit (pkgs.yaziPlugins) bar; } Declared by: <nixpkgs/nixos/modules/programs/yazi.nix>

## programs.yazi.initLua

The init.lua for Yazi itself. Type: null or absolute path Default: null Example: ./init.lua Declared by: <nixpkgs/nixos/modules/programs/yazi.nix>

## programs.yazi.plugins

Lua plugins. See https://yazi-rs.github.io/docs/plugins/overview/ for documentation. Type: attribute set of (absolute path or package) Default: { } Example: { foo = ./foo; inherit (pkgs.yaziPlugins) bar; } Declared by: <nixpkgs/nixos/modules/programs/yazi.nix>

## programs.yazi.settings

Configuration included in $YAZI_CONFIG_HOME. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/programs/yazi.nix>
