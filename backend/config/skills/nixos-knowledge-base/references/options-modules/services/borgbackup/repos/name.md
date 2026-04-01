---
module: services.borgbackup.repos.<name>
option_count: 7
source: options.html
---

# services.borgbackup.repos.<name>

## services.borgbackup.repos.<name>.allowSubRepos

Allow clients to create repositories in subdirectories of the specified path. These can be accessed using user@machine:path/to/subrepo. Note that a quota applies to repositories independently. Therefore, if this is enabled, clients can create multiple repositories and upload an arbitrary amount of data. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.repos.<name>.authorizedKeys

Public SSH keys that are given full write access to this repository. You should use a different SSH key for each repository you write to, because the specified keys are restricted to running borg serve and can only access this single repository. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.repos.<name>.authorizedKeysAppendOnly

Public SSH keys that can only be used to append new data (archives) to the repository. Note that archives can still be marked as deleted and are subsequently removed from disk upon accessing the repo with full write access, e.g. when pruning. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.repos.<name>.group

The group borg serve is run as. User or group needs write permission for the specified path. Type: string Default: "borg" Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.repos.<name>.path

Where to store the backups. Note that the directory is created automatically, with correct permissions. Type: absolute path Default: "/var/lib/borgbackup" Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.repos.<name>.quota

Storage quota for the repository. This quota is ensured for all sub-repositories if allowSubRepos is enabled but not for the overall storage space used. Type: null or string matching the pattern [[:digit:].]+[KMGTP]? Default: null Example: "100G" Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.repos.<name>.user

The user borg serve is run as. User or group needs write permission for the specified path. Type: string Default: "borg" Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>
