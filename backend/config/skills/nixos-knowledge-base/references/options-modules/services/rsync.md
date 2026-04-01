---
module: services.rsync
option_count: 3
source: options.html
---

# services.rsync

## services.rsync.enable

Whether to enable periodic directory syncing via rsync. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/rsync.nix>

## services.rsync.package

The rsync package to use. Type: package Default: pkgs.rsync Declared by: <nixpkgs/nixos/modules/services/misc/rsync.nix>

## services.rsync.jobs

Synchronization jobs to run. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/rsync.nix>
