---
module: programs.localsend
option_count: 3
source: options.html
---

# programs.localsend

## programs.localsend.enable

Whether to enable localsend, an open source cross-platform alternative to AirDrop. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/localsend.nix>

## programs.localsend.package

The localsend package to use. Type: package Default: pkgs.localsend Declared by: <nixpkgs/nixos/modules/programs/localsend.nix>

## programs.localsend.openFirewall

Whether to enable opening the firewall port 53317 for receiving files. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/programs/localsend.nix>
