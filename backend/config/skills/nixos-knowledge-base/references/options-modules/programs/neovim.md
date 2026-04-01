---
module: programs.neovim
option_count: 10
source: options.html
---

# programs.neovim

## programs.neovim.enable

Whether to enable Neovim. When enabled through this option, Neovim is wrapped to use a configuration managed by this module. The configuration file in the user’s home directory at ~/.config/nvim/init.vim is no longer loaded by default. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/neovim.nix>

## programs.neovim.package

The neovim-unwrapped package to use. Type: package Default: pkgs.neovim-unwrapped Declared by: <nixpkgs/nixos/modules/programs/neovim.nix>

## programs.neovim.configure

Generate your init file from your list of plugins and custom commands. Neovim will then be wrapped to load nvim -u /nix/store/«hash»-vimrc Type: attribute set Default: { } Example: { customRC = '' " here your custom VimScript configuration goes! ''; customLuaRC = '' -- here your custom Lua configuration goes! ''; packages.myVimPackage = with pkgs.vimPlugins; { # loaded on launch start = [ fugitive ]; # manually loadable by calling `:packadd $plugin-name` opt = [ ]; }; } Declared by: <nixpkgs/nixos/modules/programs/neovim.nix>

## programs.neovim.defaultEditor

When enabled, installs neovim and configures neovim to be the default editor using the EDITOR environment variable. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/programs/neovim.nix>

## programs.neovim.runtime

Set of files that have to be linked in runtime. Type: attribute set of (submodule) Default: { } Example: { "ftplugin/c.vim".text = "setlocal omnifunc=v:lua.vim.lsp.omnifunc"; } Declared by: <nixpkgs/nixos/modules/programs/neovim.nix>

## programs.neovim.viAlias

Symlink vi to nvim binary. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/programs/neovim.nix>

## programs.neovim.vimAlias

Symlink vim to nvim binary. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/programs/neovim.nix>

## programs.neovim.withNodeJs

Enable Node provider. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/programs/neovim.nix>

## programs.neovim.withPython3

Enable Python 3 provider. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/programs/neovim.nix>

## programs.neovim.withRuby

Enable Ruby provider. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/programs/neovim.nix>
