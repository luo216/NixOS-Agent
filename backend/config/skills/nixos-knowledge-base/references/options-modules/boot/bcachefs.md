---
module: boot.bcachefs
option_count: 1
source: options.html
---

# boot.bcachefs

## boot.bcachefs.package

The bcachefs-tools package to use. This package should also provide a passthru ‘kernelModule’ attribute to build the out-of-tree kernel module. Type: package Default: pkgs.bcachefs-tools Declared by: <nixpkgs/nixos/modules/tasks/filesystems/bcachefs.nix>
