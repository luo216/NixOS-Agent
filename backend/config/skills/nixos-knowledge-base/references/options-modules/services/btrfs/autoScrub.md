---
module: services.btrfs.autoScrub
option_count: 4
source: options.html
---

# services.btrfs.autoScrub

## services.btrfs.autoScrub.enable

Whether to enable regular btrfs scrub. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/tasks/filesystems/btrfs.nix>

## services.btrfs.autoScrub.fileSystems

List of paths to btrfs filesystems to regularly call btrfs scrub on. Defaults to all mount points with btrfs filesystems. Note that if you have filesystems that span multiple devices (e.g. RAID), you should take care to use the same device for any given mount point and let btrfs take care of automatically mounting the rest, in order to avoid scrubbing the same data multiple times. Type: list of absolute path Example: [ "/" ] Declared by: <nixpkgs/nixos/modules/tasks/filesystems/btrfs.nix>

## services.btrfs.autoScrub.interval

Systemd calendar expression for when to scrub btrfs filesystems. The recommended period is a month but could be less (btrfs-scrub(8)). See systemd.time(7) for more information on the syntax. Type: string Default: "monthly" Example: "weekly" Declared by: <nixpkgs/nixos/modules/tasks/filesystems/btrfs.nix>

## services.btrfs.autoScrub.limit

The scrub throughput limit applied on all scrubbed filesystems. The value is bytes per second, and accepts the usual KMGT prefixes. Type: null or string matching the pattern [0-9]+[KMGT]? Default: null Example: "100M" Declared by: <nixpkgs/nixos/modules/tasks/filesystems/btrfs.nix>
