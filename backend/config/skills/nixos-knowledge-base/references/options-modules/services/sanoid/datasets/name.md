---
module: services.sanoid.datasets.<name>
option_count: 17
source: options.html
---

# services.sanoid.datasets.<name>

## services.sanoid.datasets.<name>.autoprune

Whether to automatically prune old snapshots. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/backup/sanoid.nix>

## services.sanoid.datasets.<name>.autosnap

Whether to automatically take snapshots. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/backup/sanoid.nix>

## services.sanoid.datasets.<name>.daily

Number of daily snapshots. Type: null or (unsigned integer, meaning >=0) Default: null Declared by: <nixpkgs/nixos/modules/services/backup/sanoid.nix>

## services.sanoid.datasets.<name>.force_post_snapshot_script

Whether to run the post script if the pre script fails Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/backup/sanoid.nix>

## services.sanoid.datasets.<name>.hourly

Number of hourly snapshots. Type: null or (unsigned integer, meaning >=0) Default: null Declared by: <nixpkgs/nixos/modules/services/backup/sanoid.nix>

## services.sanoid.datasets.<name>.monthly

Number of monthly snapshots. Type: null or (unsigned integer, meaning >=0) Default: null Declared by: <nixpkgs/nixos/modules/services/backup/sanoid.nix>

## services.sanoid.datasets.<name>.no_inconsistent_snapshot

Whether to take a snapshot if the pre script fails Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/backup/sanoid.nix>

## services.sanoid.datasets.<name>.post_snapshot_script

Script to run after taking snapshot. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/backup/sanoid.nix>

## services.sanoid.datasets.<name>.pre_snapshot_script

Script to run before taking snapshot. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/backup/sanoid.nix>

## services.sanoid.datasets.<name>.processChildrenOnly

Whether to only snapshot child datasets if recursing. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/backup/sanoid.nix>

## services.sanoid.datasets.<name>.process_children_only

Whether to only snapshot child datasets if recursing. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/backup/sanoid.nix>

## services.sanoid.datasets.<name>.pruning_script

Script to run after pruning snapshot. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/backup/sanoid.nix>

## services.sanoid.datasets.<name>.recursive

Whether to recursively snapshot dataset children. You can also set this to "zfs" to handle datasets recursively in an atomic way without the possibility to override settings for child datasets. Type: boolean or value “zfs” (singular enum) Default: false Declared by: <nixpkgs/nixos/modules/services/backup/sanoid.nix>

## services.sanoid.datasets.<name>.script_timeout

Time limit for pre/post/pruning script execution time (<=0 for infinite). Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/backup/sanoid.nix>

## services.sanoid.datasets.<name>.useTemplate

Names of the templates to use for this dataset. Type: list of configured template name Default: [ ] Declared by: <nixpkgs/nixos/modules/services/backup/sanoid.nix>

## services.sanoid.datasets.<name>.use_template

Names of the templates to use for this dataset. Type: list of configured template name Default: [ ] Declared by: <nixpkgs/nixos/modules/services/backup/sanoid.nix>

## services.sanoid.datasets.<name>.yearly

Number of yearly snapshots. Type: null or (unsigned integer, meaning >=0) Default: null Declared by: <nixpkgs/nixos/modules/services/backup/sanoid.nix>
