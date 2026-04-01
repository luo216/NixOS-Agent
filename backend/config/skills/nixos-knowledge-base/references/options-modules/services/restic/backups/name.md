---
module: services.restic.backups.<name>
option_count: 25
source: options.html
---

# services.restic.backups.<name>

## services.restic.backups.<name>.package

The restic package to use. Type: package Default: pkgs.restic Declared by: <nixpkgs/nixos/modules/services/backup/restic.nix>

## services.restic.backups.<name>.backupCleanupCommand

A script that must run after finishing the backup process. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/backup/restic.nix>

## services.restic.backups.<name>.backupPrepareCommand

A script that must run before starting the backup process. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/backup/restic.nix>

## services.restic.backups.<name>.checkOpts

A list of options for ‘restic check’. Type: list of string Default: [ ] Example: [ "--with-cache" ] Declared by: <nixpkgs/nixos/modules/services/backup/restic.nix>

## services.restic.backups.<name>.command

Command to pass to --stdin-from-command. If null or an empty array, and paths/dynamicFilesFrom are also null, no backup command will be run. Type: list of string Default: [ ] Example: [ "sudo" "-u" "postgres" "pg_dumpall" ] Declared by: <nixpkgs/nixos/modules/services/backup/restic.nix>

## services.restic.backups.<name>.createWrapper

Whether to generate and add a script to the system path, that has the same environment variables set as the systemd service. This can be used to e.g. mount snapshots or perform other opterations, without having to manually specify most options. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/backup/restic.nix>

## services.restic.backups.<name>.dynamicFilesFrom

A script that produces a list of files to back up. The results of this command are given to the ‘–files-from’ option. The result is merged with paths specified via paths. Type: null or string Default: null Example: "find /home/matt/git -type d -name .git" Declared by: <nixpkgs/nixos/modules/services/backup/restic.nix>

## services.restic.backups.<name>.environmentFile

file containing the credentials to access the repository, in the format of an EnvironmentFile as described by systemd.exec(5) Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/backup/restic.nix>

## services.restic.backups.<name>.exclude

Patterns to exclude when backing up. See https://restic.readthedocs.io/en/latest/040_backup.html#excluding-files for details on syntax. Type: list of string Default: [ ] Example: [ "/var/cache" "/home/*/.cache" ".git" ] Declared by: <nixpkgs/nixos/modules/services/backup/restic.nix>

## services.restic.backups.<name>.extraBackupArgs

Extra arguments passed to restic backup. Type: list of string Default: [ ] Example: [ "--cleanup-cache" "--exclude-file=/etc/nixos/restic-ignore" ] Declared by: <nixpkgs/nixos/modules/services/backup/restic.nix>

## services.restic.backups.<name>.extraOptions

Extra extended options to be passed to the restic --option flag. Type: list of string Default: [ ] Example: [ "sftp.command='ssh backup@192.168.1.100 -i /home/user/.ssh/id_rsa -s sftp'" ] Declared by: <nixpkgs/nixos/modules/services/backup/restic.nix>

## services.restic.backups.<name>.inhibitsSleep

Prevents the system from sleeping while backing up. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/backup/restic.nix>

## services.restic.backups.<name>.initialize

Create the repository if it doesn’t exist. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/backup/restic.nix>

## services.restic.backups.<name>.passwordFile

Read the repository password from a file. Type: null or string Default: null Example: "/etc/nixos/restic-password" Declared by: <nixpkgs/nixos/modules/services/backup/restic.nix>

## services.restic.backups.<name>.paths

Which paths to backup, in addition to ones specified via dynamicFilesFrom. If null or an empty array and dynamicFilesFrom is also null, no backup command will be run. This can be used to create a prune-only job. Type: null or (list of string) Default: [ ] Example: [ "/var/lib/postgresql" "/home/user/backup" ] Declared by: <nixpkgs/nixos/modules/services/backup/restic.nix>

## services.restic.backups.<name>.progressFps

Controls the frequency of progress reporting. Type: null or (nonnegative integer or floating point number, meaning >=0) Default: null Example: 0.1 Declared by: <nixpkgs/nixos/modules/services/backup/restic.nix>

## services.restic.backups.<name>.pruneOpts

A list of options (–keep-* et al.) for ‘restic forget –prune’, to automatically prune old snapshots. The ‘forget’ command is run after the ‘backup’ command, so keep that in mind when constructing the --keep-* options. Type: list of string Default: [ ] Example: [ "--keep-daily 7" "--keep-weekly 5" "--keep-monthly 12" "--keep-yearly 75" ] Declared by: <nixpkgs/nixos/modules/services/backup/restic.nix>

## services.restic.backups.<name>.rcloneConfig

Configuration for the rclone remote being used for backup. See the remote’s specific options under rclone’s docs at https://rclone.org/docs/. When specifying option names, use the “config” name specified in the docs. For example, to set --b2-hard-delete for a B2 remote, use hard_delete = true in the attribute set. Warning: Secrets set in here will be world-readable in the Nix store! Consider using the rcloneConfigFile option instead to specify secret values separately. Note that options set here will override those set in the config file. Type: null or (attribute set of (string or boolean)) Default: null Example: { account = "xxx"; hard_delete = true; key = "xxx"; type = "b2"; } Declared by: <nixpkgs/nixos/modules/services/backup/restic.nix>

## services.restic.backups.<name>.rcloneConfigFile

Path to the file containing rclone configuration. This file must contain configuration for the remote specified in this backup set and also must be readable by root. Options set in rcloneConfig will override those set in this file. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/backup/restic.nix>

## services.restic.backups.<name>.rcloneOptions

Options to pass to rclone to control its behavior. See https://rclone.org/docs/#options for available options. When specifying option names, strip the leading --. To set a flag such as --drive-use-trash, which does not take a value, set the value to the Boolean true. Type: null or (attribute set of (string or boolean)) Default: null Example: { bwlimit = "10M"; drive-use-trash = "true"; } Declared by: <nixpkgs/nixos/modules/services/backup/restic.nix>

## services.restic.backups.<name>.repository

repository to backup to. Type: null or string Default: null Example: "sftp:backup@192.168.1.100:/backups/‹name›" Declared by: <nixpkgs/nixos/modules/services/backup/restic.nix>

## services.restic.backups.<name>.repositoryFile

Path to the file containing the repository location to backup to. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/backup/restic.nix>

## services.restic.backups.<name>.runCheck

Whether to run the check command with the provided checkOpts options. Type: boolean Default: builtins.length config.services.backups.‹name›.checkOpts > 0 Example: true Declared by: <nixpkgs/nixos/modules/services/backup/restic.nix>

## services.restic.backups.<name>.timerConfig

When to run the backup. See systemd.timer(5) for details. If null no timer is created and the backup will only run when explicitly started. Type: null or (attribute set of (systemd option)) Default: { OnCalendar = "daily"; Persistent = true; } Example: { OnCalendar = "00:05"; Persistent = true; RandomizedDelaySec = "5h"; } Declared by: <nixpkgs/nixos/modules/services/backup/restic.nix>

## services.restic.backups.<name>.user

As which user the backup should run. Type: string Default: "root" Example: "postgresql" Declared by: <nixpkgs/nixos/modules/services/backup/restic.nix>
