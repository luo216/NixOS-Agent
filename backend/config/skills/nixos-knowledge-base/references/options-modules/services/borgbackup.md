---
module: services.borgbackup
option_count: 3
source: options.html
---

# services.borgbackup

## services.borgbackup.package

The borgbackup package to use. Type: package Default: pkgs.borgbackup Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.jobs

Deduplicating backups using BorgBackup. Adding a job will cause a borg-job-NAME wrapper to be added to your system path, so that you can perform maintenance easily. See also the chapter about BorgBackup in the NixOS manual. Type: attribute set of (submodule) Default: { } Example: { # for a local backup rootBackup = { paths = "/"; exclude = [ "/nix" ]; repo = "/path/to/local/repo"; encryption = { mode = "repokey"; passphrase = "secret"; }; compression = "auto,lzma"; startAt = "weekly"; }; } { # Root backing each day up to a remote backup server. We assume that you have # * created a password less key: ssh-keygen -N "" -t ed25519 -f /path/to/ssh_key # best practices are: use -t ed25519, /path/to = /run/keys # * the passphrase is in the file /run/keys/borgbackup_passphrase # * you have initialized the repository manually paths = [ "/etc" "/home" ]; exclude = [ "/nix" "'**/.cache'" ]; doInit = false; repo = "user3@arep.repo.borgbase.com:repo"; encryption = { mode = "repokey-blake2"; passCommand = "cat /path/to/passphrase"; }; environment = { BORG_RSH = "ssh -i /path/to/ssh_key"; }; compression = "auto,lzma"; startAt = "daily"; }; Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.repos

Serve BorgBackup repositories to given public SSH keys, restricting their access to the repository only. See also the chapter about BorgBackup in the NixOS manual. Also, clients do not need to specify the absolute path when accessing the repository, i.e. user@machine:. is enough. (Note colon and dot.) Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>
