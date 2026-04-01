---
module: services.gitea.dump
option_count: 5
source: options.html
---

# services.gitea.dump

## services.gitea.dump.enable

Enable a timer that runs gitea dump to generate backup-files of the current gitea database and repositories. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>

## services.gitea.dump.backupDir

Path to the dump files. Type: string Default: "${config.services.gitea.stateDir}/dump" Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>

## services.gitea.dump.file

Filename to be used for the dump. If null a default name is chosen by gitea. Type: null or string Default: null Example: "gitea-dump" Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>

## services.gitea.dump.interval

Run a gitea dump at this interval. Runs by default at 04:31 every day. The format is described in systemd.time(7). Type: string Default: "04:31" Example: "hourly" Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>

## services.gitea.dump.type

Archive format used to store the dump file. Type: one of “zip”, “rar”, “tar”, “sz”, “tar.gz”, “tar.xz”, “tar.bz2”, “tar.br”, “tar.lz4”, “tar.zst” Default: "zip" Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>
