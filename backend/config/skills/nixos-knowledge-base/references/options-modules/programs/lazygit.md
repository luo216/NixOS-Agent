---
module: programs.lazygit
option_count: 3
source: options.html
---

# programs.lazygit

## programs.lazygit.enable

Whether to enable lazygit, a simple terminal UI for git commands. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/lazygit.nix>

## programs.lazygit.package

The lazygit package to use. Type: package Default: pkgs.lazygit Declared by: <nixpkgs/nixos/modules/programs/lazygit.nix>

## programs.lazygit.settings

Lazygit configuration. See https://github.com/jesseduffield/lazygit/blob/master/docs/Config.md for documentation. Type: YAML 1.1 value Default: { } Declared by: <nixpkgs/nixos/modules/programs/lazygit.nix>
