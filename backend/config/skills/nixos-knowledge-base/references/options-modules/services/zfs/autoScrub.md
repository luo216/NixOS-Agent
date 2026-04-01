---
module: services.zfs.autoScrub
option_count: 4
source: options.html
---

# services.zfs.autoScrub

## services.zfs.autoScrub.enable

Whether to enable periodic scrubbing of ZFS pools. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/tasks/filesystems/zfs.nix>

## services.zfs.autoScrub.interval

Systemd calendar expression when to scrub ZFS pools. See systemd.time(7). Type: string Default: "monthly" Example: "quarterly" Declared by: <nixpkgs/nixos/modules/tasks/filesystems/zfs.nix>

## services.zfs.autoScrub.pools

List of ZFS pools to periodically scrub. If empty, all pools will be scrubbed. Type: list of string Default: [ ] Example: [ "tank" ] Declared by: <nixpkgs/nixos/modules/tasks/filesystems/zfs.nix>

## services.zfs.autoScrub.randomizedDelaySec

Add a randomized delay before each ZFS autoscrub. The delay will be chosen between zero and this value. This value must be a time span in the format specified by systemd.time(7) Type: string Default: "6h" Example: "12h" Declared by: <nixpkgs/nixos/modules/tasks/filesystems/zfs.nix>
