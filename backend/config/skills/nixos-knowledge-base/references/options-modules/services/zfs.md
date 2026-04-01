---
module: services.zfs
option_count: 1
source: options.html
---

# services.zfs

## services.zfs.expandOnBoot

After importing, expand each device in the specified pools. Set the value to the plain string “all” to expand all pools on boot: services.zfs.expandOnBoot = "all"; or set the value to a list of pools to expand the disks of specific pools: services.zfs.expandOnBoot = [ "tank" "dozer" ]; Type: one of “disabled”, “all” or list of string Default: "disabled" Example: [ "tank" "dozer" ] Declared by: <nixpkgs/nixos/modules/tasks/filesystems/zfs.nix>
