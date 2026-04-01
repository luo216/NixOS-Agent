---
module: programs.corefreq
option_count: 2
source: options.html
---

# programs.corefreq

## programs.corefreq.enable

Whether to enable Whether to enable the corefreq daemon and kernel module. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/corefreq.nix>

## programs.corefreq.package

The corefreq package to use. Type: package Default: config.boot.kernelPackages.corefreq Declared by: <nixpkgs/nixos/modules/programs/corefreq.nix>
