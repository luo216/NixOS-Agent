---
module: programs.nix-ld
option_count: 3
source: options.html
---

# programs.nix-ld

## programs.nix-ld.enable

Whether to enable nix-ld, Documentation: https://github.com/nix-community/nix-ld. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/nix-ld.nix>

## programs.nix-ld.package

The nix-ld package to use. Type: package Default: pkgs.nix-ld Declared by: <nixpkgs/nixos/modules/programs/nix-ld.nix>

## programs.nix-ld.libraries

Libraries that automatically become available to all programs. The default set includes common libraries. Type: list of package Default: baseLibraries derived from systemd and nix dependencies. Declared by: <nixpkgs/nixos/modules/programs/nix-ld.nix>
