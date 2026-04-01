---
module: boot.zfs.pools.<name>
option_count: 1
source: options.html
---

# boot.zfs.pools.<name>

## boot.zfs.pools.<name>.devNodes

Name of directory from which to import ZFS device, this is passed to zpool import as the value of the -d option. For guidance on choosing this value, see the ZFS documentation. Type: absolute path Default: "config.boot.zfs.devNodes" Declared by: <nixpkgs/nixos/modules/tasks/filesystems/zfs.nix>
