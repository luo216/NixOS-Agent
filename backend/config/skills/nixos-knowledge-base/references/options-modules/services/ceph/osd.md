---
module: services.ceph.osd
option_count: 4
source: options.html
---

# services.ceph.osd

## services.ceph.osd.enable

Whether to enable Ceph OSD daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/ceph.nix>

## services.ceph.osd.package

The ceph package to use. Type: package Default: pkgs.ceph Declared by: <nixpkgs/nixos/modules/services/network-filesystems/ceph.nix>

## services.ceph.osd.daemons

A list of OSD daemons that should have a service created. The names correspond to the id part in ceph i.e. [ “name1” ] would result in osd.name1 Type: list of string Default: [ ] Example: [ "name1" "name2" ] Declared by: <nixpkgs/nixos/modules/services/network-filesystems/ceph.nix>

## services.ceph.osd.extraConfig

Extra configuration to add to the OSD section. Type: attribute set of string Default: { "osd crush chooseleaf type" = "1"; "osd journal size" = "10000"; "osd pool default min size" = "2"; "osd pool default pg num" = "200"; "osd pool default pgp num" = "200"; "osd pool default size" = "3"; } Declared by: <nixpkgs/nixos/modules/services/network-filesystems/ceph.nix>
