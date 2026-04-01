---
module: programs.minipro
option_count: 2
source: options.html
---

# programs.minipro

## programs.minipro.enable

Whether to enable minipro and its udev rules. Users of the plugdev group can interact with connected MiniPRO chip programmers. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/minipro.nix>

## programs.minipro.package

The minipro package to use. Type: package Default: pkgs.minipro Declared by: <nixpkgs/nixos/modules/programs/minipro.nix>
