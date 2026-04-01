---
module: services.syncoid
option_count: 11
source: options.html
---

# services.syncoid

## services.syncoid.enable

Whether to enable Syncoid ZFS synchronization service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/backup/syncoid.nix>

## services.syncoid.package

The sanoid package to use. Type: package Default: pkgs.sanoid Declared by: <nixpkgs/nixos/modules/services/backup/syncoid.nix>

## services.syncoid.commands

Syncoid commands to run. Type: attribute set of (submodule) Default: { } Example: { "pool/test".target = "root@target:pool/test"; } Declared by: <nixpkgs/nixos/modules/services/backup/syncoid.nix>

## services.syncoid.commonArgs

Arguments to add to every syncoid command, unless disabled for that command. See https://github.com/jimsalterjrs/sanoid/#syncoid-command-line-options for available options. Type: list of string Default: [ ] Example: [ "--no-sync-snap" ] Declared by: <nixpkgs/nixos/modules/services/backup/syncoid.nix>

## services.syncoid.group

The group for the service. Type: string Default: "syncoid" Example: "backup" Declared by: <nixpkgs/nixos/modules/services/backup/syncoid.nix>

## services.syncoid.interval

Run syncoid at this interval. The default is to run hourly. Must be in the format described in systemd.time(7). This is equivalent to adding a corresponding timer unit with OnCalendar set to the value given here. Set to an empty list to avoid starting syncoid automatically. Type: string or list of string Default: "hourly" Example: "*-*-* *:15:00" Declared by: <nixpkgs/nixos/modules/services/backup/syncoid.nix>

## services.syncoid.localSourceAllow

Permissions granted for the services.syncoid.user user for local source datasets. See https://openzfs.github.io/openzfs-docs/man/8/zfs-allow.8.html for available permissions. Type: list of string Default: [ "bookmark" "hold" "send" "snapshot" "destroy" "mount" ] Declared by: <nixpkgs/nixos/modules/services/backup/syncoid.nix>

## services.syncoid.localTargetAllow

Permissions granted for the services.syncoid.user user for local target datasets. See https://openzfs.github.io/openzfs-docs/man/8/zfs-allow.8.html for available permissions. Make sure to include the change-key permission if you send raw encrypted datasets, the compression permission if you send raw compressed datasets, and so on. For remote target datasets you’ll have to set your remote user permissions by yourself. Type: list of string Default: [ "change-key" "compression" "create" "mount" "mountpoint" "receive" "rollback" ] Example: [ "create" "mount" "receive" "rollback" ] Declared by: <nixpkgs/nixos/modules/services/backup/syncoid.nix>

## services.syncoid.service

Systemd configuration common to all syncoid services. Type: attribute set Default: { } Declared by: <nixpkgs/nixos/modules/services/backup/syncoid.nix>

## services.syncoid.sshKey

SSH private key file to use to login to the remote system. Can be overridden in individual commands. Type: null or (string or absolute path convertible to it) Default: null Declared by: <nixpkgs/nixos/modules/services/backup/syncoid.nix>

## services.syncoid.user

The user for the service. ZFS privilege delegation will be automatically configured for any local pools used by syncoid if this option is set to a user other than root. The user will be given the “hold” and “send” privileges on any pool that has datasets being sent and the “create”, “mount”, “receive”, and “rollback” privileges on any pool that has datasets being received. Type: string Default: "syncoid" Example: "backup" Declared by: <nixpkgs/nixos/modules/services/backup/syncoid.nix>
