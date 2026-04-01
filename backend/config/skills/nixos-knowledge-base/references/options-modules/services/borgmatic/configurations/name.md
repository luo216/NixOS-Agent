---
module: services.borgmatic.configurations.<name>
option_count: 2
source: options.html
---

# services.borgmatic.configurations.<name>

## services.borgmatic.configurations.<name>.repositories

A required list of local or remote repositories with paths and optional labels (which can be used with the --repository flag to select a repository). Tildes are expanded. Multiple repositories are backed up to in sequence. Borg placeholders can be used. See the output of “borg help placeholders” for details. See ssh_command for SSH options like identity file or port. If systemd service is used, then add local repository paths in the systemd service file to the ReadWritePaths list. Type: list of (submodule) Default: [ ] Example: [ { label = "backupserver"; path = "ssh://user@backupserver/./sourcehostname.borg"; } { label = "local"; path = "/mnt/backup"; } ] Declared by: <nixpkgs/nixos/modules/services/backup/borgmatic.nix>

## services.borgmatic.configurations.<name>.source_directories

List of source directories and files to backup. Globs and tildes are expanded. Do not backslash spaces in path names. Type: list of string Default: [ ] Example: [ "/home" "/etc" "/var/log/syslog*" "/home/user/path with spaces" ] Declared by: <nixpkgs/nixos/modules/services/backup/borgmatic.nix>
