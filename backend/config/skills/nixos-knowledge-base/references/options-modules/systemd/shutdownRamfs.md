---
module: systemd.shutdownRamfs
option_count: 3
source: options.html
---

# systemd.shutdownRamfs

## systemd.shutdownRamfs.enable

Whether to enable pivoting back to an initramfs for shutdown. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/system/boot/systemd/shutdown.nix>

## systemd.shutdownRamfs.contents

Set of files that have to be linked into the shutdown ramfs Type: attribute set of (submodule) Example: { "/lib/systemd/system-shutdown/zpool-sync-shutdown".source = writeShellScript "zpool" "exec ${zfs}/bin/zpool sync" } Declared by: <nixpkgs/nixos/modules/system/boot/systemd/shutdown.nix>

## systemd.shutdownRamfs.storePaths

Store paths to copy into the shutdown ramfs as well. Type: list of ((submodule) or ((optionally newline-terminated) single-line string or package) convertible to it) Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/systemd/shutdown.nix>
