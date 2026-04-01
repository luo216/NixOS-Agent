---
module: boot.initrd.systemd.storePaths.*
option_count: 3
source: options.html
---

# boot.initrd.systemd.storePaths.*

## boot.initrd.systemd.storePaths.*.enable

Whether to enable copying of this file and symlinking it. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/system/boot/systemd/initrd.nix>

## boot.initrd.systemd.storePaths.*.source

Path of the source file. Type: absolute path Declared by: <nixpkgs/nixos/modules/system/boot/systemd/initrd.nix>

## boot.initrd.systemd.storePaths.*.target

Path of the symlink. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/system/boot/systemd/initrd.nix>
