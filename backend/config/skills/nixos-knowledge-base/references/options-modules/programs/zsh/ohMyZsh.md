---
module: programs.zsh.ohMyZsh
option_count: 8
source: options.html
---

# programs.zsh.ohMyZsh

## programs.zsh.ohMyZsh.enable

Enable oh-my-zsh. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/programs/zsh/oh-my-zsh.nix>

## programs.zsh.ohMyZsh.package

The oh-my-zsh package to use. Type: package Default: pkgs.oh-my-zsh Declared by: <nixpkgs/nixos/modules/programs/zsh/oh-my-zsh.nix>

## programs.zsh.ohMyZsh.cacheDir

Cache directory to be used by oh-my-zsh. Without this option it would default to the read-only nix store. Type: string Default: "$HOME/.cache/oh-my-zsh" Declared by: <nixpkgs/nixos/modules/programs/zsh/oh-my-zsh.nix>

## programs.zsh.ohMyZsh.custom

Path to a custom oh-my-zsh package to override config of oh-my-zsh. (Can’t be used along with customPkgs). Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/programs/zsh/oh-my-zsh.nix>

## programs.zsh.ohMyZsh.customPkgs

List of custom packages that should be loaded into oh-my-zsh. Type: list of package Default: [ ] Declared by: <nixpkgs/nixos/modules/programs/zsh/oh-my-zsh.nix>

## programs.zsh.ohMyZsh.plugins

List of oh-my-zsh plugins Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/programs/zsh/oh-my-zsh.nix>

## programs.zsh.ohMyZsh.preLoaded

Shell commands executed before the oh-my-zsh is loaded. For example, to disable async git prompt write zstyle ':omz:alpha:lib:git' async-prompt no (more information https://github.com/ohmyzsh/ohmyzsh?tab=readme-ov-file#async-git-prompt) Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/programs/zsh/oh-my-zsh.nix>

## programs.zsh.ohMyZsh.theme

Name of the theme to be used by oh-my-zsh. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/programs/zsh/oh-my-zsh.nix>
