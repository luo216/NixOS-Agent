---
module: services.tsmBackup
option_count: 4
source: options.html
---

# services.tsmBackup

## services.tsmBackup.enable

Whether to enable automatic backups with the IBM Storage Protect (Tivoli Storage Manager, TSM) client. This also enables programs.tsmClient.enable . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/backup/tsm.nix>

## services.tsmBackup.autoTime

The backup service will be invoked automatically at the given date/time, which must be in the format described in systemd.time(5). The default null disables automatic backups. Type: null or non-empty string Default: null Example: "12:00" Declared by: <nixpkgs/nixos/modules/services/backup/tsm.nix>

## services.tsmBackup.command

The actual command passed to the dsmc executable to start the backup. Type: non-empty string Default: "backup" Example: "incr" Declared by: <nixpkgs/nixos/modules/services/backup/tsm.nix>

## services.tsmBackup.servername

Create a systemd system service tsm-backup.service that starts a backup based on the given servername’s stanza. Note that this server’s passwdDir will default to /var/lib/tsm-backup/password (but may be overridden); also, the service will use /var/lib/tsm-backup as HOME when calling dsmc. Type: non-empty string Example: "mainTsmServer" Declared by: <nixpkgs/nixos/modules/services/backup/tsm.nix>
