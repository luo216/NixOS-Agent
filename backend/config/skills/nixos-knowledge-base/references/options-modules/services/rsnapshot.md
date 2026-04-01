---
module: services.rsnapshot
option_count: 4
source: options.html
---

# services.rsnapshot

## services.rsnapshot.enable

Whether to enable rsnapshot backups. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/backup/rsnapshot.nix>

## services.rsnapshot.enableManualRsnapshot

Whether to enable manual usage of the rsnapshot command with this module. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/backup/rsnapshot.nix>

## services.rsnapshot.cronIntervals

Periodicity at which intervals should be run by cron. Note that the intervals also have to exist in configuration as retain options. Type: attribute set of string Default: { } Example: { daily = "50 21 * * *"; hourly = "0 * * * *"; } Declared by: <nixpkgs/nixos/modules/services/backup/rsnapshot.nix>

## services.rsnapshot.extraConfig

rsnapshot configuration option in addition to the defaults from rsnapshot and this module. Note that tabs are required to separate option arguments, and directory names require trailing slashes. The “extra” in the option name might be a little misleading right now, as it is required to get a functional configuration. Type: strings concatenated with “\n” Default: "" Example: '' retains hourly 24 retain daily 365 backup /home/ localhost/ '' Declared by: <nixpkgs/nixos/modules/services/backup/rsnapshot.nix>
