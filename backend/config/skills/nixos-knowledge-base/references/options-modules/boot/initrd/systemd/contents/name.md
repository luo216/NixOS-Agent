---
module: boot.initrd.systemd.contents.<name>
option_count: 4
source: options.html
---

# boot.initrd.systemd.contents.<name>

## boot.initrd.systemd.contents.<name>.enable

Whether to enable copying of this file and symlinking it. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/system/boot/systemd/initrd.nix>

## boot.initrd.systemd.contents.<name>.source

Path of the source file. Type: absolute path Declared by: <nixpkgs/nixos/modules/system/boot/systemd/initrd.nix>

## boot.initrd.systemd.contents.<name>.target

Path of the symlink. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/system/boot/systemd/initrd.nix>

## boot.initrd.systemd.contents.<name>.text

Text of the file. Type: null or strings concatenated with “\n” Default: null Declared by: <nixpkgs/nixos/modules/system/boot/systemd/initrd.nix>
