---
module: programs.direnv
option_count: 11
source: options.html
---

# programs.direnv

## programs.direnv.enable

Whether to enable direnv integration. Takes care of both installation and setting up the sourcing of the shell. Additionally enables nix-direnv integration. Note that you need to logout and login for this change to apply . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/direnv.nix>

## programs.direnv.enableBashIntegration

Whether to enable Bash integration . Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/programs/direnv.nix>

## programs.direnv.enableFishIntegration

Whether to enable Fish integration . Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/programs/direnv.nix>

## programs.direnv.enableXonshIntegration

Whether to enable Xonsh integration . Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/programs/direnv.nix>

## programs.direnv.enableZshIntegration

Whether to enable Zsh integration . Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/programs/direnv.nix>

## programs.direnv.package

The direnv package to use. Type: package Default: pkgs.direnv Declared by: <nixpkgs/nixos/modules/programs/direnv.nix>

## programs.direnv.direnvrcExtra

Extra lines to append to the sourced direnvrc Type: strings concatenated with “\n” Default: "" Example: '' export FOO="foo" echo "loaded direnv!" '' Declared by: <nixpkgs/nixos/modules/programs/direnv.nix>

## programs.direnv.finalPackage

The wrapped direnv package. Type: package (read only) Declared by: <nixpkgs/nixos/modules/programs/direnv.nix>

## programs.direnv.loadInNixShell

Whether to enable loading direnv in nix-shell nix shell or nix develop . Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/programs/direnv.nix>

## programs.direnv.settings

Direnv configuration. Refer to direnv.toml(1). Type: TOML value Default: { } Example: { global = { log_format = "-"; log_filter = "^$"; }; } Declared by: <nixpkgs/nixos/modules/programs/direnv.nix>

## programs.direnv.silent

Whether to enable the hiding of direnv logging . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/direnv.nix>
