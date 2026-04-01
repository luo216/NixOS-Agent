---
module: systemd.shutdownRamfs.storePaths.*
option_count: 3
source: options.html
---

# systemd.shutdownRamfs.storePaths.*

## systemd.shutdownRamfs.storePaths.*.enable

Whether to enable copying of this file and symlinking it. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/system/boot/systemd/shutdown.nix>

## systemd.shutdownRamfs.storePaths.*.source

Path of the source file. Type: absolute path Declared by: <nixpkgs/nixos/modules/system/boot/systemd/shutdown.nix>

## systemd.shutdownRamfs.storePaths.*.target

Path of the symlink. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/system/boot/systemd/shutdown.nix>
