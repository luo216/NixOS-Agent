---
module: services.sanoid.templates.<name>
option_count: 12
source: options.html
---

# services.sanoid.templates.<name>

## services.sanoid.templates.<name>.autoprune

Whether to automatically prune old snapshots. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/backup/sanoid.nix>

## services.sanoid.templates.<name>.autosnap

Whether to automatically take snapshots. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/backup/sanoid.nix>

## services.sanoid.templates.<name>.daily

Number of daily snapshots. Type: null or (unsigned integer, meaning >=0) Default: null Declared by: <nixpkgs/nixos/modules/services/backup/sanoid.nix>

## services.sanoid.templates.<name>.force_post_snapshot_script

Whether to run the post script if the pre script fails Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/backup/sanoid.nix>

## services.sanoid.templates.<name>.hourly

Number of hourly snapshots. Type: null or (unsigned integer, meaning >=0) Default: null Declared by: <nixpkgs/nixos/modules/services/backup/sanoid.nix>

## services.sanoid.templates.<name>.monthly

Number of monthly snapshots. Type: null or (unsigned integer, meaning >=0) Default: null Declared by: <nixpkgs/nixos/modules/services/backup/sanoid.nix>

## services.sanoid.templates.<name>.no_inconsistent_snapshot

Whether to take a snapshot if the pre script fails Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/backup/sanoid.nix>

## services.sanoid.templates.<name>.post_snapshot_script

Script to run after taking snapshot. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/backup/sanoid.nix>

## services.sanoid.templates.<name>.pre_snapshot_script

Script to run before taking snapshot. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/backup/sanoid.nix>

## services.sanoid.templates.<name>.pruning_script

Script to run after pruning snapshot. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/backup/sanoid.nix>

## services.sanoid.templates.<name>.script_timeout

Time limit for pre/post/pruning script execution time (<=0 for infinite). Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/backup/sanoid.nix>

## services.sanoid.templates.<name>.yearly

Number of yearly snapshots. Type: null or (unsigned integer, meaning >=0) Default: null Declared by: <nixpkgs/nixos/modules/services/backup/sanoid.nix>
