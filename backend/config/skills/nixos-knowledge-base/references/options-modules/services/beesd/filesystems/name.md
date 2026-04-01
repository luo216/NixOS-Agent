---
module: services.beesd.filesystems.<name>
option_count: 5
source: options.html
---

# services.beesd.filesystems.<name>

## services.beesd.filesystems.<name>.extraOptions

Extra command-line options passed to the daemon. See upstream bees documentation. Type: list of string Default: [ ] Example: [ "--thread-count" "4" ] Declared by: <nixpkgs/nixos/modules/services/misc/bees.nix>

## services.beesd.filesystems.<name>.hashTableSizeMB

Hash table size in MB; must be a multiple of 16. A larger ratio of index size to storage size means smaller blocks of duplicate content are recognized. If you have 1TB of data, a 4GB hash table (which is to say, a value of 4096) will permit 4KB extents (the smallest possible size) to be recognized, whereas a value of 1024 – creating a 1GB hash table – will recognize only aligned duplicate blocks of 16KB. Type: signed integer Default: 1024 Declared by: <nixpkgs/nixos/modules/services/misc/bees.nix>

## services.beesd.filesystems.<name>.spec

Description of how to identify the filesystem to be duplicated by this instance of bees. Note that deduplication crosses subvolumes; one must not configure multiple instances for subvolumes of the same filesystem (or block devices which are part of the same filesystem), but only for completely independent btrfs filesystems. This must be in a format usable by findmnt; that could be a key=value pair, or a bare path to a mount point. Using bare paths will allow systemd to start the beesd service only after mounting the associated path. Type: string Example: "LABEL=MyBulkDataDrive" Declared by: <nixpkgs/nixos/modules/services/misc/bees.nix>

## services.beesd.filesystems.<name>.verbosity

Log verbosity (syslog keyword/level). Type: one of “alert”, “crit”, “debug”, “emerg”, “err”, “info”, “notice”, “warning”, 1, 2, 7, 0, 3, 6, 5, 4 Default: "info" Declared by: <nixpkgs/nixos/modules/services/misc/bees.nix>

## services.beesd.filesystems.<name>.workDir

Name (relative to the root of the filesystem) of the subvolume where the hash table will be stored. Type: string Default: ".beeshome" Declared by: <nixpkgs/nixos/modules/services/misc/bees.nix>
