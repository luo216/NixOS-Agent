---
module: programs.xfs_quota
option_count: 1
source: options.html
---

# programs.xfs_quota

## programs.xfs_quota.projects

Setup of xfs_quota projects. Make sure the filesystem is mounted with the pquota option. Type: attribute set of (submodule) Default: { } Example: { projname = { id = 50; path = "/xfsprojects/projname"; sizeHardLimit = "50g"; }; } Declared by: <nixpkgs/nixos/modules/programs/xfs_quota.nix>
