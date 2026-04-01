---
module: services.nfs
option_count: 2
source: options.html
---

# services.nfs

## services.nfs.extraConfig

Extra nfs-utils configuration. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/tasks/filesystems/nfs.nix>

## services.nfs.settings

General configuration for NFS daemons and tools. See nfs.conf(5) and related man pages for details. Type: attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Example: { mountd.manage-gids = true; } Declared by: <nixpkgs/nixos/modules/tasks/filesystems/nfs.nix>
