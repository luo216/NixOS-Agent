---
module: services.forgejo.dump
option_count: 6
source: options.html
---

# services.forgejo.dump

## services.forgejo.dump.enable

Whether to enable periodic dumps via the built-in dump command. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/forgejo.nix>

## services.forgejo.dump.age

Age of backup used to decide what files to delete when cleaning. If a file or directory is older than the current time minus the age field, it is deleted. The format is described in tmpfiles.d(5). Type: string Default: "4w" Example: "5d" Declared by: <nixpkgs/nixos/modules/services/misc/forgejo.nix>

## services.forgejo.dump.backupDir

Path to the directory where the dump archives will be stored. Type: string Default: "${config.services.forgejo.stateDir}/dump" Declared by: <nixpkgs/nixos/modules/services/misc/forgejo.nix>

## services.forgejo.dump.file

Filename to be used for the dump. If null a default name is chosen by forgejo. Type: null or string Default: null Example: "forgejo-dump" Declared by: <nixpkgs/nixos/modules/services/misc/forgejo.nix>

## services.forgejo.dump.interval

Run a Forgejo dump at this interval. Runs by default at 04:31 every day. The format is described in systemd.time(7). Type: string Default: "04:31" Example: "hourly" Declared by: <nixpkgs/nixos/modules/services/misc/forgejo.nix>

## services.forgejo.dump.type

Archive format used to store the dump file. Type: one of “zip”, “tar”, “tar.sz”, “tar.gz”, “tar.xz”, “tar.bz2”, “tar.br”, “tar.lz4”, “tar.zst” Default: "zip" Declared by: <nixpkgs/nixos/modules/services/misc/forgejo.nix>
