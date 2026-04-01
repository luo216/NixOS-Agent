---
module: services.ceph.rgw
option_count: 3
source: options.html
---

# services.ceph.rgw

## services.ceph.rgw.enable

Whether to enable Ceph RadosGW daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/ceph.nix>

## services.ceph.rgw.package

The ceph package to use. Type: package Default: pkgs.ceph Declared by: <nixpkgs/nixos/modules/services/network-filesystems/ceph.nix>

## services.ceph.rgw.daemons

A list of rados gateway daemons that should have a service created. The names correspond to the id part in ceph i.e. [ “name1” ] would result in client.name1, radosgw daemons aren’t daemons to cluster in the sense that OSD, MGR or MON daemons are. They are simply daemons, from ceph, that uses the cluster as a backend. Type: list of string Default: [ ] Example: [ "name1" "name2" ] Declared by: <nixpkgs/nixos/modules/services/network-filesystems/ceph.nix>
