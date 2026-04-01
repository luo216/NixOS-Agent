---
module: services.ceph
option_count: 2
source: options.html
---

# services.ceph

## services.ceph.enable

Whether to enable Ceph global configuration. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/ceph.nix>

## services.ceph.extraConfig

Extra configuration to add to the global section. Use for setting values that are common for all daemons in the cluster. Type: attribute set of string Default: { } Example: { "ms bind ipv6" = "true"; } Declared by: <nixpkgs/nixos/modules/services/network-filesystems/ceph.nix>
