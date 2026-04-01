---
module: services.ceph.mgr
option_count: 4
source: options.html
---

# services.ceph.mgr

## services.ceph.mgr.enable

Whether to enable Ceph MGR daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/ceph.nix>

## services.ceph.mgr.package

The ceph package to use. Type: package Default: pkgs.ceph Declared by: <nixpkgs/nixos/modules/services/network-filesystems/ceph.nix>

## services.ceph.mgr.daemons

A list of names for manager daemons that should have a service created. The names correspond to the id part in ceph i.e. [ “name1” ] would result in mgr.name1 Type: list of string Default: [ ] Example: [ "name1" "name2" ] Declared by: <nixpkgs/nixos/modules/services/network-filesystems/ceph.nix>

## services.ceph.mgr.extraConfig

Extra configuration to add to the global section for manager daemons. Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/services/network-filesystems/ceph.nix>
