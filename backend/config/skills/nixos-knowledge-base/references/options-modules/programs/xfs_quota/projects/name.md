---
module: programs.xfs_quota.projects.<name>
option_count: 5
source: options.html
---

# programs.xfs_quota.projects.<name>

## programs.xfs_quota.projects.<name>.fileSystem

XFS filesystem hosting the xfs_quota project. Type: string Default: "/" Declared by: <nixpkgs/nixos/modules/programs/xfs_quota.nix>

## programs.xfs_quota.projects.<name>.id

Project ID. Type: signed integer Declared by: <nixpkgs/nixos/modules/programs/xfs_quota.nix>

## programs.xfs_quota.projects.<name>.path

Project directory. Type: string Declared by: <nixpkgs/nixos/modules/programs/xfs_quota.nix>

## programs.xfs_quota.projects.<name>.sizeHardLimit

Hard limit of the project size. Type: null or string Default: null Example: "50g" Declared by: <nixpkgs/nixos/modules/programs/xfs_quota.nix>

## programs.xfs_quota.projects.<name>.sizeSoftLimit

Soft limit of the project size Type: null or string Default: null Example: "30g" Declared by: <nixpkgs/nixos/modules/programs/xfs_quota.nix>
