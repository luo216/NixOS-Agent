---
module: services.duplicity.cleanup
option_count: 3
source: options.html
---

# services.duplicity.cleanup

## services.duplicity.cleanup.maxAge

If non-null, delete all backup sets older than the given time. Old backup sets will not be deleted if backup sets newer than time depend on them. Type: null or string Default: null Example: "6M" Declared by: <nixpkgs/nixos/modules/services/backup/duplicity.nix>

## services.duplicity.cleanup.maxFull

If non-null, delete all backups sets that are older than the count:th last full backup (in other words, keep the last count full backups and associated incremental sets). Type: null or signed integer Default: null Example: 2 Declared by: <nixpkgs/nixos/modules/services/backup/duplicity.nix>

## services.duplicity.cleanup.maxIncr

If non-null, delete incremental sets of all backups sets that are older than the count:th last full backup (in other words, keep only old full backups and not their increments). Type: null or signed integer Default: null Example: 1 Declared by: <nixpkgs/nixos/modules/services/backup/duplicity.nix>
