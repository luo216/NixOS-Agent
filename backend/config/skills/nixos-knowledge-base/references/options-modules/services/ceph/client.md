---
module: services.ceph.client
option_count: 2
source: options.html
---

# services.ceph.client

## services.ceph.client.enable

Whether to enable Ceph client configuration. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/ceph.nix>

## services.ceph.client.extraConfig

Extra configuration to add to the client section. Configuration for rados gateways would be added here, with their own sections, see example. Type: attribute set of attribute set of string Default: { } Example: { # This would create a section for a radosgw daemon named node0 and related # configuration for it "client.radosgw.node0" = { "some config option" = "true"; }; }; Declared by: <nixpkgs/nixos/modules/services/network-filesystems/ceph.nix>
