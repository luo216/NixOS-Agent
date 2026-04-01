---
module: programs.atop.netatop
option_count: 2
source: options.html
---

# programs.atop.netatop

## programs.atop.netatop.enable

Whether to install and enable the netatop kernel module. Note: this sets the kernel taint flag “O” for loading out-of-tree modules. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/programs/atop.nix>

## programs.atop.netatop.package

Which package to use for netatop. Type: package Default: config.boot.kernelPackages.netatop Declared by: <nixpkgs/nixos/modules/programs/atop.nix>
