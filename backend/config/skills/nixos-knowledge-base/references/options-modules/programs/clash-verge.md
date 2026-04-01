---
module: programs.clash-verge
option_count: 5
source: options.html
---

# programs.clash-verge

## programs.clash-verge.enable

Whether to enable Clash Verge. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/clash-verge.nix>

## programs.clash-verge.package

The clash-verge package to use. Available options are clash-verge-rev and clash-nyanpasu, both are forks of the original clash-verge project. Type: package Default: pkgs.clash-verge-rev Declared by: <nixpkgs/nixos/modules/programs/clash-verge.nix>

## programs.clash-verge.autoStart

Whether to enable Clash Verge auto launch. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/clash-verge.nix>

## programs.clash-verge.serviceMode

Whether to enable Service Mode. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/clash-verge.nix>

## programs.clash-verge.tunMode

Whether to enable Setcap for TUN Mode. DNS settings won’t work on this way. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/clash-verge.nix>
