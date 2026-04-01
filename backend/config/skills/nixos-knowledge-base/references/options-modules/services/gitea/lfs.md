---
module: services.gitea.lfs
option_count: 2
source: options.html
---

# services.gitea.lfs

## services.gitea.lfs.enable

Enables git-lfs support. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>

## services.gitea.lfs.contentDir

Where to store LFS files. Type: string Default: "${config.services.gitea.stateDir}/data/lfs" Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>
