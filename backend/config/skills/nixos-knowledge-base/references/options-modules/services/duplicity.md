---
module: services.duplicity
option_count: 11
source: options.html
---

# services.duplicity

## services.duplicity.enable

Whether to enable backups with duplicity. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/backup/duplicity.nix>

## services.duplicity.exclude

List of paths to exclude from backups. See the FILE SELECTION section in duplicity(1) for details on the syntax. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/backup/duplicity.nix>

## services.duplicity.excludeFileList

File containing newline-separated list of paths to exclude into the backups. See the FILE SELECTION section in duplicity(1) for details on the syntax. Type: null or absolute path Default: null Example: /path/to/fileList.txt Declared by: <nixpkgs/nixos/modules/services/backup/duplicity.nix>

## services.duplicity.extraFlags

Extra command-line flags passed to duplicity. See duplicity(1). Type: list of string Default: [ ] Example: [ "--backend-retry-delay" "100" ] Declared by: <nixpkgs/nixos/modules/services/backup/duplicity.nix>

## services.duplicity.frequency

Run duplicity with the given frequency (see systemd.time(7) for the format). If null, do not run automatically. Type: null or string Default: "daily" Declared by: <nixpkgs/nixos/modules/services/backup/duplicity.nix>

## services.duplicity.fullIfOlderThan

If "never" (the default) always do incremental backups (the first backup will be a full backup, of course). If "always" always do full backups. Otherwise, this must be a string representing a duration. Full backups will be made when the latest full backup is older than this duration. If this is not the case, an incremental backup is performed. Type: string Default: "never" Example: "1M" Declared by: <nixpkgs/nixos/modules/services/backup/duplicity.nix>

## services.duplicity.include

List of paths to include into the backups. See the FILE SELECTION section in duplicity(1) for details on the syntax. Type: list of string Default: [ ] Example: [ "/home" ] Declared by: <nixpkgs/nixos/modules/services/backup/duplicity.nix>

## services.duplicity.includeFileList

File containing newline-separated list of paths to include into the backups. See the FILE SELECTION section in duplicity(1) for details on the syntax. Type: null or absolute path Default: null Example: /path/to/fileList.txt Declared by: <nixpkgs/nixos/modules/services/backup/duplicity.nix>

## services.duplicity.root

Root directory to backup. Type: absolute path Default: "/" Declared by: <nixpkgs/nixos/modules/services/backup/duplicity.nix>

## services.duplicity.secretFile

Path of a file containing secrets (gpg passphrase, access key…) in the format of EnvironmentFile as described by systemd.exec(5). For example: PASSPHRASE=«...» AWS_ACCESS_KEY_ID=«...» AWS_SECRET_ACCESS_KEY=«...» Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/backup/duplicity.nix>

## services.duplicity.targetUrl

Target url to backup to. See the URL FORMAT section in duplicity(1) for supported urls. Type: string Example: "s3://host:port/prefix" Declared by: <nixpkgs/nixos/modules/services/backup/duplicity.nix>
