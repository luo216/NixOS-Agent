---
module: programs.nano
option_count: 4
source: options.html
---

# programs.nano

## programs.nano.enable

Whether to enable nano, a small user-friendly console text editor. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/programs/nano.nix>

## programs.nano.package

The nano package to use. Type: package Default: pkgs.nano Declared by: <nixpkgs/nixos/modules/programs/nano.nix>

## programs.nano.nanorc

The system-wide nano configuration. See nanorc(5). Type: strings concatenated with “\n” Default: "" Example: '' set nowrap set tabstospaces set tabsize 2 '' Declared by: <nixpkgs/nixos/modules/programs/nano.nix>

## programs.nano.syntaxHighlight

Whether to enable syntax highlight for various languages. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/programs/nano.nix>
