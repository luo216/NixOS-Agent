---
module: programs.git.lfs
option_count: 3
source: options.html
---

# programs.git.lfs

## programs.git.lfs.enable

Whether to enable git-lfs (Large File Storage). Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/git.nix>

## programs.git.lfs.enablePureSSHTransfer

Whether to enable Enable pure SSH transfer in server side by adding git-lfs-transfer to environment.systemPackages. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/git.nix>

## programs.git.lfs.package

The git-lfs package to use. Type: package Default: pkgs.git-lfs Declared by: <nixpkgs/nixos/modules/programs/git.nix>
