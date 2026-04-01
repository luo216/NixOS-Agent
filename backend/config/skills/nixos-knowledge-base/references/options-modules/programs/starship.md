---
module: programs.starship
option_count: 5
source: options.html
---

# programs.starship

## programs.starship.enable

Whether to enable the Starship shell prompt. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/starship.nix>

## programs.starship.package

The starship package to use. Type: package Default: pkgs.starship Declared by: <nixpkgs/nixos/modules/programs/starship.nix>

## programs.starship.interactiveOnly

Whether to enable starship only when the shell is interactive. Some plugins require this to be set to false to function correctly . Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/programs/starship.nix>

## programs.starship.presets

Presets files to be merged with settings in order. Type: list of string Default: [ ] Example: [ "nerd-font-symbols" ] Declared by: <nixpkgs/nixos/modules/programs/starship.nix>

## programs.starship.settings

Configuration included in starship.toml. See https://starship.rs/config/#prompt for documentation. Type: TOML value Default: { } Declared by: <nixpkgs/nixos/modules/programs/starship.nix>
