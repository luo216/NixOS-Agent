---
module: services.ceph.mon
option_count: 4
source: options.html
---

# services.ceph.mon

## services.ceph.mon.enable

Whether to enable Ceph MON daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/ceph.nix>

## services.ceph.mon.package

The ceph package to use. Type: package Default: pkgs.ceph Declared by: <nixpkgs/nixos/modules/services/network-filesystems/ceph.nix>

## services.ceph.mon.daemons

A list of monitor daemons that should have a service created. The names correspond to the id part in ceph i.e. [ “name1” ] would result in mon.name1 Type: list of string Default: [ ] Example: [ "name1" "name2" ] Declared by: <nixpkgs/nixos/modules/services/network-filesystems/ceph.nix>

## services.ceph.mon.extraConfig

Extra configuration to add to the monitor section. Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/services/network-filesystems/ceph.nix>
