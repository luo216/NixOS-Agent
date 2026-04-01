---
module: programs.zoxide
option_count: 7
source: options.html
---

# programs.zoxide

## programs.zoxide.enable

Whether to enable zoxide, a smarter cd command that learns your habits. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/zoxide.nix>

## programs.zoxide.enableBashIntegration

Whether to enable Bash integration. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/programs/zoxide.nix>

## programs.zoxide.enableFishIntegration

Whether to enable Fish integration. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/programs/zoxide.nix>

## programs.zoxide.enableXonshIntegration

Whether to enable Xonsh integration. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/programs/zoxide.nix>

## programs.zoxide.enableZshIntegration

Whether to enable Zsh integration. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/programs/zoxide.nix>

## programs.zoxide.package

The zoxide package to use. Type: package Default: pkgs.zoxide Declared by: <nixpkgs/nixos/modules/programs/zoxide.nix>

## programs.zoxide.flags

List of flags for zoxide init Type: list of string Default: [ ] Example: [ "--no-cmd" "--cmd j" ] Declared by: <nixpkgs/nixos/modules/programs/zoxide.nix>
