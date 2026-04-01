---
module: services.fstrim
option_count: 2
source: options.html
---

# services.fstrim

## services.fstrim.enable

Whether to enable periodic SSD TRIM of mounted partitions in background. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/misc/fstrim.nix>

## services.fstrim.interval

How often we run fstrim. For most desktop and server systems a sufficient trimming frequency is once a week. The format is described in systemd.time(7). Type: string Default: "weekly" Declared by: <nixpkgs/nixos/modules/services/misc/fstrim.nix>
