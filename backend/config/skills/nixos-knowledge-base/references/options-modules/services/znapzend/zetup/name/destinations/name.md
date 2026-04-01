---
module: services.znapzend.zetup.<name>.destinations.<name>
option_count: 6
source: options.html
---

# services.znapzend.zetup.<name>.destinations.<name>

## services.znapzend.zetup.<name>.destinations.<name>.dataset

Dataset name to send snapshots to. Type: string Example: "tank/main" Declared by: <nixpkgs/nixos/modules/services/backup/znapzend.nix>

## services.znapzend.zetup.<name>.destinations.<name>.host

Host to use for the destination dataset. Can be prefixed with user@ to specify the ssh user. Type: null or string Default: null Example: "john@example.com" Declared by: <nixpkgs/nixos/modules/services/backup/znapzend.nix>

## services.znapzend.zetup.<name>.destinations.<name>.label

Label for this destination. Defaults to the attribute name. Type: string Declared by: <nixpkgs/nixos/modules/services/backup/znapzend.nix>

## services.znapzend.zetup.<name>.destinations.<name>.plan

The znapzend backup plan to use for the source. The plan specifies how often to backup and for how long to keep the backups. It consists of a series of retention periods to interval associations: retA=>intA,retB=>intB,... Both intervals and retention periods are expressed in standard units of time or multiples of them. You can use both the full name or a shortcut according to the following listing: second|sec|s, minute|min, hour|h, day|d, week|w, month|mon|m, year|y See znapzendzetup(1) for more info. Type: string Example: "1h=>10min,1d=>1h,1w=>1d,1m=>1w,1y=>1m" Declared by: <nixpkgs/nixos/modules/services/backup/znapzend.nix>

## services.znapzend.zetup.<name>.destinations.<name>.postsend

Command to run after sending the snapshot to the destination. Intended to run a remote script via ssh on the destination, e.g. to bring up a backup disk or server or to put a zpool online/offline. See also presend. Type: null or string Default: null Example: "ssh root@bserv zpool export tank" Declared by: <nixpkgs/nixos/modules/services/backup/znapzend.nix>

## services.znapzend.zetup.<name>.destinations.<name>.presend

Command to run before sending the snapshot to the destination. Intended to run a remote script via ssh on the destination, e.g. to bring up a backup disk or server or to put a zpool online/offline. See also postsend. Type: null or string Default: null Example: "ssh root@bserv zpool import -Nf tank" Declared by: <nixpkgs/nixos/modules/services/backup/znapzend.nix>
