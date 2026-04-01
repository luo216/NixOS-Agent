---
module: services.forgejo.lfs
option_count: 2
source: options.html
---

# services.forgejo.lfs

## services.forgejo.lfs.enable

Enables git-lfs support. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/forgejo.nix>

## services.forgejo.lfs.contentDir

Where to store LFS files. Type: string Default: "${config.services.forgejo.stateDir}/data/lfs" Declared by: <nixpkgs/nixos/modules/services/misc/forgejo.nix>
