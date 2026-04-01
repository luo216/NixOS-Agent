---
module: services.ceph.global
option_count: 12
source: options.html
---

# services.ceph.global

## services.ceph.global.authClientRequired

Enables requiring the cluster to authenticate itself to the client. Type: one of “cephx”, “none” Default: "cephx" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/ceph.nix>

## services.ceph.global.authClusterRequired

Enables requiring daemons to authenticate with eachother in the cluster. Type: one of “cephx”, “none” Default: "cephx" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/ceph.nix>

## services.ceph.global.authServiceRequired

Enables requiring clients to authenticate with the cluster to access services in the cluster (e.g. radosgw, mds or osd). Type: one of “cephx”, “none” Default: "cephx" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/ceph.nix>

## services.ceph.global.clusterName

Name of cluster Type: string Default: "ceph" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/ceph.nix>

## services.ceph.global.clusterNetwork

A comma-separated list of subnets that will be used as cluster networks in the cluster. Type: null or strings concatenated with “,” Default: null Example: '' 10.10.0.0/24, 192.168.0.0/24 '' Declared by: <nixpkgs/nixos/modules/services/network-filesystems/ceph.nix>

## services.ceph.global.fsid

Filesystem ID, a generated uuid, its must be generated and set before attempting to start a cluster Type: string Example: '' 433a2193-4f8a-47a0-95d2-209d7ca2cca5 '' Declared by: <nixpkgs/nixos/modules/services/network-filesystems/ceph.nix>

## services.ceph.global.maxOpenFiles

Max open files for each OSD daemon. Type: signed integer Default: 131072 Declared by: <nixpkgs/nixos/modules/services/network-filesystems/ceph.nix>

## services.ceph.global.mgrModulePath

Path at which to find ceph-mgr modules. Type: absolute path Default: "${pkgs.ceph.lib}/lib/ceph/mgr" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/ceph.nix>

## services.ceph.global.monHost

List of hostname shortnames/IP addresses of the initial monitors. Type: null or strings concatenated with “,” Default: null Example: '' 10.10.0.1, 10.10.0.2, 10.10.0.3 '' Declared by: <nixpkgs/nixos/modules/services/network-filesystems/ceph.nix>

## services.ceph.global.monInitialMembers

List of hosts that will be used as monitors at startup. Type: null or strings concatenated with “,” Default: null Example: '' node0, node1, node2 '' Declared by: <nixpkgs/nixos/modules/services/network-filesystems/ceph.nix>

## services.ceph.global.publicNetwork

A comma-separated list of subnets that will be used as public networks in the cluster. Type: null or strings concatenated with “,” Default: null Example: '' 10.20.0.0/24, 192.168.1.0/24 '' Declared by: <nixpkgs/nixos/modules/services/network-filesystems/ceph.nix>

## services.ceph.global.rgwMimeTypesFile

Path to mime types used by radosgw. Type: null or absolute path Default: "${pkgs.mailcap}/etc/mime.types" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/ceph.nix>
