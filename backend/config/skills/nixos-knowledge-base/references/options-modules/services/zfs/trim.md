---
module: services.zfs.trim
option_count: 3
source: options.html
---

# services.zfs.trim

## services.zfs.trim.enable

Whether to enable periodic TRIM on all ZFS pools. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/tasks/filesystems/zfs.nix>

## services.zfs.trim.interval

How often we run trim. For most desktop and server systems a sufficient trimming frequency is once a week. The format is described in systemd.time(7). Type: string Default: "weekly" Example: "daily" Declared by: <nixpkgs/nixos/modules/tasks/filesystems/zfs.nix>

## services.zfs.trim.randomizedDelaySec

Add a randomized delay before each ZFS trim. The delay will be chosen between zero and this value. This value must be a time span in the format specified by systemd.time(7) Type: string Default: "6h" Example: "12h" Declared by: <nixpkgs/nixos/modules/tasks/filesystems/zfs.nix>
