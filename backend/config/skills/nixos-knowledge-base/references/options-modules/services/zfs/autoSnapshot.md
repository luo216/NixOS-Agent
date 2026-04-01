---
module: services.zfs.autoSnapshot
option_count: 7
source: options.html
---

# services.zfs.autoSnapshot

## services.zfs.autoSnapshot.enable

Enable the (OpenSolaris-compatible) ZFS auto-snapshotting service. Note that you must set the com.sun:auto-snapshot property to true on all datasets which you wish to auto-snapshot. You can override a child dataset to use, or not use auto-snapshotting by setting its flag with the given interval: zfs set com.sun:auto-snapshot:weekly=false DATASET Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/tasks/filesystems/zfs.nix>

## services.zfs.autoSnapshot.daily

Number of daily auto-snapshots that you wish to keep. Type: signed integer Default: 7 Declared by: <nixpkgs/nixos/modules/tasks/filesystems/zfs.nix>

## services.zfs.autoSnapshot.flags

Flags to pass to the zfs-auto-snapshot command. Run zfs-auto-snapshot (without any arguments) to see available flags. If it’s not too inconvenient for snapshots to have timestamps in UTC, it is suggested that you append --utc to the list of default options (see example). Otherwise, snapshot names can cause name conflicts or apparent time reversals due to daylight savings, timezone or other date/time changes. Type: string Default: "-k -p" Example: "-k -p --utc" Declared by: <nixpkgs/nixos/modules/tasks/filesystems/zfs.nix>

## services.zfs.autoSnapshot.frequent

Number of frequent (15-minute) auto-snapshots that you wish to keep. Type: signed integer Default: 4 Declared by: <nixpkgs/nixos/modules/tasks/filesystems/zfs.nix>

## services.zfs.autoSnapshot.hourly

Number of hourly auto-snapshots that you wish to keep. Type: signed integer Default: 24 Declared by: <nixpkgs/nixos/modules/tasks/filesystems/zfs.nix>

## services.zfs.autoSnapshot.monthly

Number of monthly auto-snapshots that you wish to keep. Type: signed integer Default: 12 Declared by: <nixpkgs/nixos/modules/tasks/filesystems/zfs.nix>

## services.zfs.autoSnapshot.weekly

Number of weekly auto-snapshots that you wish to keep. Type: signed integer Default: 4 Declared by: <nixpkgs/nixos/modules/tasks/filesystems/zfs.nix>
