---
module: programs.vim
option_count: 3
source: options.html
---

# programs.vim

## programs.vim.enable

Whether to enable Vi IMproved, an advanced text editor. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/vim.nix>

## programs.vim.package

The vim package to use. Type: package Default: pkgs.vim Example: pkgs.vim-full Declared by: <nixpkgs/nixos/modules/programs/vim.nix>

## programs.vim.defaultEditor

Whether to enable vim as the default editor. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/vim.nix>
