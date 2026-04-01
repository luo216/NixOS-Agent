---
module: services.znapzend.zetup.<name>
option_count: 9
source: options.html
---

# services.znapzend.zetup.<name>

## services.znapzend.zetup.<name>.enable

Whether to enable this source. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/backup/znapzend.nix>

## services.znapzend.zetup.<name>.dataset

The dataset to use for this source. Type: string Example: "tank/home" Declared by: <nixpkgs/nixos/modules/services/backup/znapzend.nix>

## services.znapzend.zetup.<name>.destinations

Additional destinations. Type: attribute set of (submodule) Default: { } Example: { local = { dataset = "btank/backup"; presend = "zpool import -N btank"; postsend = "zpool export btank"; }; remote = { host = "john@example.com"; dataset = "tank/john"; }; }; Declared by: <nixpkgs/nixos/modules/services/backup/znapzend.nix>

## services.znapzend.zetup.<name>.plan

The znapzend backup plan to use for the source. The plan specifies how often to backup and for how long to keep the backups. It consists of a series of retention periods to interval associations: retA=>intA,retB=>intB,... Both intervals and retention periods are expressed in standard units of time or multiples of them. You can use both the full name or a shortcut according to the following listing: second|sec|s, minute|min, hour|h, day|d, week|w, month|mon|m, year|y See znapzendzetup(1) for more info. Type: string Example: "1h=>10min,1d=>1h,1w=>1d,1m=>1w,1y=>1m" Declared by: <nixpkgs/nixos/modules/services/backup/znapzend.nix>

## services.znapzend.zetup.<name>.postsnap

Command to run after snapshots are taken on the source dataset, e.g. for database unlocking. See also presnap. Type: null or string Default: null Example: "${pkgs.coreutils}/bin/kill `${pkgs.coreutils}/bin/cat /tmp/mariadblock.pid`;${pkgs.coreutils}/bin/rm /tmp/mariadblock.pid" Declared by: <nixpkgs/nixos/modules/services/backup/znapzend.nix>

## services.znapzend.zetup.<name>.presnap

Command to run before snapshots are taken on the source dataset, e.g. for database locking/flushing. See also postsnap. Type: null or string Default: null Example: ''${pkgs.mariadb}/bin/mysql -e "set autocommit=0;flush tables with read lock;\\! ${pkgs.coreutils}/bin/sleep 600" & ${pkgs.coreutils}/bin/echo $! > /tmp/mariadblock.pid ; sleep 10'' Declared by: <nixpkgs/nixos/modules/services/backup/znapzend.nix>

## services.znapzend.zetup.<name>.recursive

Whether to do recursive snapshots. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/backup/znapzend.nix>

## services.znapzend.zetup.<name>.sendDelay

Specify delay (in seconds) before sending snaps to the destination. May be useful if you want to control sending time. Type: signed integer Default: 0 Example: 60 Declared by: <nixpkgs/nixos/modules/services/backup/znapzend.nix>

## services.znapzend.zetup.<name>.timestampFormat

The timestamp format to use for constructing snapshot names. The syntax is strftime-like. The string must consist of the mandatory %Y %m %d %H %M %S. Optionally - _ . : characters as well as any alphanumeric character are allowed. If suffixed by a Z, times will be in UTC. Type: string containing all of the characters %Y, %m, %d, %H, %M, %S Default: "%Y-%m-%d-%H%M%S" Example: "znapzend-%m.%d.%Y-%H%M%SZ" Declared by: <nixpkgs/nixos/modules/services/backup/znapzend.nix>
