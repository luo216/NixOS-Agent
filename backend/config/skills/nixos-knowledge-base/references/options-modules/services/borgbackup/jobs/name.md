---
module: services.borgbackup.jobs.<name>
option_count: 32
source: options.html
---

# services.borgbackup.jobs.<name>

## services.borgbackup.jobs.<name>.appendFailedSuffix

Append a .failed suffix to the archive name, which is only removed if borg create has a zero exit status. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.jobs.<name>.archiveBaseName

How to name the created archives. A timestamp, whose format is determined by dateFormat, will be appended. The full name can be modified at runtime ($archiveName). Placeholders like {hostname} must not be used. Use null for no base name. Type: null or string matching the pattern [^/{}]+ Default: "${config.networking.hostName}-<name>" Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.jobs.<name>.compression

Compression method to use. Refer to borg help compression for all available options. Type: string matching the pattern none|(auto,)?(lz4|zstd|zlib|lzma)(,[[:digit:]]{1,2})? Default: "lz4" Example: "auto,lzma" Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.jobs.<name>.createCommand

Borg command to use for archive creation. The default (create) creates a regular Borg archive. Use import-tar to instead read a tar archive stream from dumpCommand output and import its contents into the repository. import-tar can not be used together with exclude or patterns. Type: one of “create”, “import-tar” Default: "create" Example: "import-tar" Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.jobs.<name>.dateFormat

Arguments passed to date to create a timestamp suffix for the archive name. Type: string Default: "+%Y-%m-%dT%H:%M:%S" Example: "-u +%s" Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.jobs.<name>.doInit

Run borg init if the specified repo does not exist. You should set this to false if the repository is located on an external drive that might not always be mounted. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.jobs.<name>.dumpCommand

Backup the stdout of this program instead of filesystem paths. Mutually exclusive with paths. Type: null or absolute path Default: null Example: "/path/to/createZFSsend.sh" Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.jobs.<name>.environment

Environment variables passed to the backup script. You can for example specify which SSH key to use. Type: attribute set of string Default: { } Example: { BORG_RSH = "ssh -i /path/to/key"; } Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.jobs.<name>.exclude

Exclude paths matching any of the given patterns. See borg help patterns for pattern syntax. Can not be set when createCommand is set to import-tar. Type: list of string Default: [ ] Example: [ "/home/*/.cache" "/nix" ] Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.jobs.<name>.extraArgs

Additional arguments for all borg calls the service has. Handle with care. Type: string or (list of string) convertible to it Default: [ ] Example: [ "--remote-path=/path/to/borg" ] Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.jobs.<name>.extraCompactArgs

Additional arguments for borg compact. Can also be set at runtime using $extraCompactArgs. Type: string or (list of string) convertible to it Default: [ ] Example: [ "--cleanup-commits" ] Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.jobs.<name>.extraCreateArgs

Additional arguments for borg create. Can also be set at runtime using $extraCreateArgs. Type: string or (list of string) convertible to it Default: [ ] Example: [ "--stats" "--checkpoint-interval 600" ] Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.jobs.<name>.extraInitArgs

Additional arguments for borg init. Can also be set at runtime using $extraInitArgs. Type: string or (list of string) convertible to it Default: [ ] Example: [ "--append-only" ] Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.jobs.<name>.extraPruneArgs

Additional arguments for borg prune. Can also be set at runtime using $extraPruneArgs. Type: string or (list of string) convertible to it Default: [ ] Example: [ "--save-space" ] Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.jobs.<name>.failOnWarnings

Fail the whole backup job if any borg command returns a warning (exit code 1), for example because a file changed during backup. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.jobs.<name>.group

The group borg is run as. User or group needs read permission for the specified paths. Type: string Default: "root" Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.jobs.<name>.inhibitsSleep

Prevents the system from sleeping while backing up. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.jobs.<name>.paths

Path(s) to back up. Mutually exclusive with dumpCommand. Type: null or ((list of string) or string convertible to it) Default: null Example: "/home/user" Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.jobs.<name>.patterns

Include/exclude paths matching the given patterns. The first matching patterns is used, so if an include pattern (prefix +) matches before an exclude pattern (prefix -), the file is backed up. See borg help patterns for pattern syntax. Can not be set when createCommand is set to import-tar. Type: list of string Default: [ ] Example: [ "+ /home/susan" "- /home/*" ] Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.jobs.<name>.persistentTimer

Set the Persistent option for the systemd.timer(5) which triggers the backup immediately if the last trigger was missed (e.g. if the system was powered down). Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.jobs.<name>.postCreate

Shell commands to run after borg create. The name of the created archive is stored in $archiveName. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.jobs.<name>.postHook

Shell commands to run just before exit. They are executed even if a previous command exits with a non-zero exit code. The latter is available as $exitStatus. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.jobs.<name>.postInit

Shell commands to run after borg init. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.jobs.<name>.postPrune

Shell commands to run after borg prune. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.jobs.<name>.preHook

Shell commands to run before the backup. This can for example be used to mount file systems. Type: strings concatenated with “\n” Default: "" Example: '' # To add excluded paths at runtime extraCreateArgs+=("--exclude" "/some/path") '' Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.jobs.<name>.privateTmp

Set the PrivateTmp option for the systemd-service. Set to false if you need sockets or other files from global /tmp. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.jobs.<name>.readWritePaths

By default, borg cannot write anywhere on the system but $HOME/.config/borg and $HOME/.cache/borg. If, for example, your preHook script needs to dump files somewhere, put those directories here. Type: list of absolute path Default: [ ] Example: [ "/var/backup/mysqldump" ] Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.jobs.<name>.removableDevice

Whether the repo (which must be local) is a removable device. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.jobs.<name>.repo

Remote or local repository to back up to. Type: string Example: "user@machine:/path/to/repo" Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.jobs.<name>.startAt

When or how often the backup should run. Must be in the format described in systemd.time(7). If you do not want the backup to start automatically, use [ ]. It will generate a systemd service borgbackup-job-NAME. You may trigger it manually via systemctl restart borgbackup-job-NAME. Type: string or list of string Default: "daily" Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.jobs.<name>.user

The user borg is run as. User or group need read permission for the specified paths. Type: string Default: "root" Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.jobs.<name>.wrapper

Name of the wrapper that is installed into PATH. Set to null or "" to disable it altogether. Type: null or string Default: "borg-job-<name>" Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>
