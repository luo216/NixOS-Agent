---
module: programs.vscode
option_count: 4
source: options.html
---

# programs.vscode

## programs.vscode.enable

Whether to enable VSCode editor. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/vscode.nix>

## programs.vscode.package

The vscode package to use. The final package will be customized with extensions from programs.vscode.extensions Type: package Default: pkgs.vscode Declared by: <nixpkgs/nixos/modules/programs/vscode.nix>

## programs.vscode.defaultEditor

When enabled, configures VSCode to be the default editor using the EDITOR environment variable. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/vscode.nix>

## programs.vscode.extensions

List of extensions to install. Type: list of package Default: [ ] Example: with pkgs.vscode-extensions; [ bbenoist.nix golang.go twxs.cmake ] Declared by: <nixpkgs/nixos/modules/programs/vscode.nix>
