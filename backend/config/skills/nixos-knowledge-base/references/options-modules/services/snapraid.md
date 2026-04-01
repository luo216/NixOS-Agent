---
module: services.snapraid
option_count: 7
source: options.html
---

# services.snapraid

## services.snapraid.enable

Whether to enable SnapRAID. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/backup/snapraid.nix>

## services.snapraid.contentFiles

SnapRAID content list files. Type: list of string Default: [ ] Example: [ "/var/snapraid.content" "/mnt/disk1/snapraid.content" "/mnt/disk2/snapraid.content" ] Declared by: <nixpkgs/nixos/modules/services/backup/snapraid.nix>

## services.snapraid.dataDisks

SnapRAID data disks. Type: attribute set of string Default: { } Example: { d1 = "/mnt/disk1/"; d2 = "/mnt/disk2/"; d3 = "/mnt/disk3/"; } Declared by: <nixpkgs/nixos/modules/services/backup/snapraid.nix>

## services.snapraid.exclude

SnapRAID exclude directives. Type: list of string Default: [ ] Example: [ "*.unrecoverable" "/tmp/" "/lost+found/" ] Declared by: <nixpkgs/nixos/modules/services/backup/snapraid.nix>

## services.snapraid.extraConfig

Extra config options for SnapRAID. Type: strings concatenated with “\n” Default: "" Example: '' nohidden blocksize 256 hashsize 16 autosave 500 pool /pool '' Declared by: <nixpkgs/nixos/modules/services/backup/snapraid.nix>

## services.snapraid.parityFiles

SnapRAID parity files. Type: list of string Default: [ ] Example: [ "/mnt/diskp/snapraid.parity" "/mnt/diskq/snapraid.2-parity" "/mnt/diskr/snapraid.3-parity" "/mnt/disks/snapraid.4-parity" "/mnt/diskt/snapraid.5-parity" "/mnt/disku/snapraid.6-parity" ] Declared by: <nixpkgs/nixos/modules/services/backup/snapraid.nix>

## services.snapraid.touchBeforeSync

Whether snapraid touch should be run before snapraid sync. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/backup/snapraid.nix>
