---
module: services.tarsnap.archives.<name>
option_count: 18
source: options.html
---

# services.tarsnap.archives.<name>

## services.tarsnap.archives.<name>.aggressiveNetworking

Upload data over multiple TCP connections, potentially increasing tarsnap’s bandwidth utilisation at the cost of slowing down all other network traffic. Not recommended unless TCP congestion is the dominant limiting factor. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/backup/tarsnap.nix>

## services.tarsnap.archives.<name>.cachedir

The cache allows tarsnap to identify previously stored data blocks, reducing archival time and bandwidth usage. Should the cache become desynchronized or corrupted, tarsnap will refuse to run until you manually rebuild the cache with tarsnap --fsck. Set to null to disable caching. Type: null or absolute path Default: "/var/cache/tarsnap/${utils.escapeSystemdPath config.services.tarsnap.archives.<name>.keyfile}" Declared by: <nixpkgs/nixos/modules/services/backup/tarsnap.nix>

## services.tarsnap.archives.<name>.checkpointBytes

Create a checkpoint every checkpointBytes of uploaded data (optionally specified using an SI prefix). 1GB is the minimum value. A higher value is recommended, as checkpointing is expensive. Set to null to disable checkpointing. Type: null or string Default: "1GB" Declared by: <nixpkgs/nixos/modules/services/backup/tarsnap.nix>

## services.tarsnap.archives.<name>.directories

List of filesystem paths to archive. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/backup/tarsnap.nix>

## services.tarsnap.archives.<name>.excludes

Exclude files and directories matching these patterns. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/backup/tarsnap.nix>

## services.tarsnap.archives.<name>.explicitSymlinks

Whether to follow symlinks specified as archives. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/backup/tarsnap.nix>

## services.tarsnap.archives.<name>.followSymlinks

Whether to follow all symlinks in archive trees. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/backup/tarsnap.nix>

## services.tarsnap.archives.<name>.includes

Include only files and directories matching these patterns (the empty list includes everything). Exclusions have precedence over inclusions. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/backup/tarsnap.nix>

## services.tarsnap.archives.<name>.keyfile

Set a specific keyfile for this archive. This defaults to "/root/tarsnap.key" if left unspecified. Use this option if you want to run multiple backups concurrently - each archive must have a unique key. You can generate a write-only key derived from your master key (which is recommended) using tarsnap-keymgmt(1). Note: every archive must have an individual master key. You must generate multiple keys with tarsnap-keygen(1), and then generate write only keys from those. The keyfile name should be given as a string and not a path, to avoid the key being copied into the Nix store. Type: string Default: config.services.tarsnap.keyfile Declared by: <nixpkgs/nixos/modules/services/backup/tarsnap.nix>

## services.tarsnap.archives.<name>.lowmem

Reduce memory consumption by not caching small files. Possibly beneficial if the average file size is smaller than 1 MB and the number of files is lower than the total amount of RAM in KB. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/backup/tarsnap.nix>

## services.tarsnap.archives.<name>.maxbw

Abort archival if upstream bandwidth usage in bytes exceeds this threshold. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/backup/tarsnap.nix>

## services.tarsnap.archives.<name>.maxbwRateDown

Download bandwidth rate limit in bytes. Type: null or signed integer Default: null Example: 50 * 1000 Declared by: <nixpkgs/nixos/modules/services/backup/tarsnap.nix>

## services.tarsnap.archives.<name>.maxbwRateUp

Upload bandwidth rate limit in bytes. Type: null or signed integer Default: null Example: 25 * 1000 Declared by: <nixpkgs/nixos/modules/services/backup/tarsnap.nix>

## services.tarsnap.archives.<name>.nodump

Exclude files with the nodump flag. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/backup/tarsnap.nix>

## services.tarsnap.archives.<name>.period

Create archive at this interval. The format is described in systemd.time(7). Type: string Default: "01:15" Example: "hourly" Declared by: <nixpkgs/nixos/modules/services/backup/tarsnap.nix>

## services.tarsnap.archives.<name>.printStats

Print global archive statistics upon completion. The output is available via systemctl status tarsnap-archive-name. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/backup/tarsnap.nix>

## services.tarsnap.archives.<name>.verbose

Whether to produce verbose logging output. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/backup/tarsnap.nix>

## services.tarsnap.archives.<name>.verylowmem

Reduce memory consumption by a factor of 2 beyond what lowmem does, at the cost of significantly slowing down the archiving process. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/backup/tarsnap.nix>
