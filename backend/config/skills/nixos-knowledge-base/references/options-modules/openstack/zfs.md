---
module: openstack.zfs
option_count: 1
source: options.html
---

# openstack.zfs

## openstack.zfs.datasets

Datasets to create under the tank and boot zpools. NOTE: This option is used only at image creation time, and does not attempt to declaratively create or manage datasets on an existing system. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/virtualisation/openstack-options.nix>
