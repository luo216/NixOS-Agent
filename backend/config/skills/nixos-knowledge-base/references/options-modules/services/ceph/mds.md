---
module: services.ceph.mds
option_count: 4
source: options.html
---

# services.ceph.mds

## services.ceph.mds.enable

Whether to enable Ceph MDS daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/ceph.nix>

## services.ceph.mds.package

The ceph package to use. Type: package Default: pkgs.ceph Declared by: <nixpkgs/nixos/modules/services/network-filesystems/ceph.nix>

## services.ceph.mds.daemons

A list of metadata service daemons that should have a service created. The names correspond to the id part in ceph i.e. [ “name1” ] would result in mds.name1 Type: list of string Default: [ ] Example: [ "name1" "name2" ] Declared by: <nixpkgs/nixos/modules/services/network-filesystems/ceph.nix>

## services.ceph.mds.extraConfig

Extra configuration to add to the MDS section. Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/services/network-filesystems/ceph.nix>
