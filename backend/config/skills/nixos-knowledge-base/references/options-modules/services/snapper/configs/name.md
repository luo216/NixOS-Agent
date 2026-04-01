---
module: services.snapper.configs.<name>
option_count: 12
source: options.html
---

# services.snapper.configs.<name>

## services.snapper.configs.<name>.ALLOW_GROUPS

List of groups allowed to operate with the config. Also see the PERMISSIONS section in man:snapper(8). Type: list of (string without line breaks or quotes) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/misc/snapper.nix>

## services.snapper.configs.<name>.ALLOW_USERS

List of users allowed to operate with the config. “root” is always implicitly included. Also see the PERMISSIONS section in man:snapper(8). Type: list of (string without line breaks or quotes) Default: [ ] Example: [ "alice" ] Declared by: <nixpkgs/nixos/modules/services/misc/snapper.nix>

## services.snapper.configs.<name>.FSTYPE

Filesystem type. Only btrfs is stable and tested. bcachefs support is experimental. Type: one of “btrfs”, “bcachefs” Default: "btrfs" Declared by: <nixpkgs/nixos/modules/services/misc/snapper.nix>

## services.snapper.configs.<name>.SUBVOLUME

Path of the subvolume or mount point. This path is a subvolume and has to contain a subvolume named .snapshots. See also man:snapper(8) section PERMISSIONS. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/misc/snapper.nix>

## services.snapper.configs.<name>.TIMELINE_CLEANUP

Defines whether the timeline cleanup algorithm should be run for the config. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/snapper.nix>

## services.snapper.configs.<name>.TIMELINE_CREATE

Defines whether hourly snapshots should be created. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/snapper.nix>

## services.snapper.configs.<name>.TIMELINE_LIMIT_DAILY

Limits for timeline cleanup. Type: unsigned integer, meaning >=0, or string containing either a number or a range Default: 10 Declared by: <nixpkgs/nixos/modules/services/misc/snapper.nix>

## services.snapper.configs.<name>.TIMELINE_LIMIT_HOURLY

Limits for timeline cleanup. Type: unsigned integer, meaning >=0, or string containing either a number or a range Default: 10 Declared by: <nixpkgs/nixos/modules/services/misc/snapper.nix>

## services.snapper.configs.<name>.TIMELINE_LIMIT_MONTHLY

Limits for timeline cleanup. Type: unsigned integer, meaning >=0, or string containing either a number or a range Default: 10 Declared by: <nixpkgs/nixos/modules/services/misc/snapper.nix>

## services.snapper.configs.<name>.TIMELINE_LIMIT_QUARTERLY

Limits for timeline cleanup. Type: unsigned integer, meaning >=0, or string containing either a number or a range Default: 0 Declared by: <nixpkgs/nixos/modules/services/misc/snapper.nix>

## services.snapper.configs.<name>.TIMELINE_LIMIT_WEEKLY

Limits for timeline cleanup. Type: unsigned integer, meaning >=0, or string containing either a number or a range Default: 0 Declared by: <nixpkgs/nixos/modules/services/misc/snapper.nix>

## services.snapper.configs.<name>.TIMELINE_LIMIT_YEARLY

Limits for timeline cleanup. Type: unsigned integer, meaning >=0, or string containing either a number or a range Default: 10 Declared by: <nixpkgs/nixos/modules/services/misc/snapper.nix>
