---
module: services.tigerbeetle
option_count: 7
source: options.html
---

# services.tigerbeetle

## services.tigerbeetle.enable

Whether to enable TigerBeetle server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/databases/tigerbeetle.nix>

## services.tigerbeetle.package

The tigerbeetle package to use. Type: package Default: pkgs.tigerbeetle Declared by: <nixpkgs/nixos/modules/services/databases/tigerbeetle.nix>

## services.tigerbeetle.addresses

The addresses of all replicas in the cluster. This should be a list of IPv4/IPv6 addresses with port numbers. Either the address or port number (but not both) may be omitted, in which case a default of 127.0.0.1 or 3001 will be used. The first address in the list corresponds to the address for replica 0, the second address for replica 1, and so on. Type: list of non-empty string Default: [ "3001" ] Declared by: <nixpkgs/nixos/modules/services/databases/tigerbeetle.nix>

## services.tigerbeetle.cacheGridSize

The grid cache size. The grid cache acts like a page cache for TigerBeetle. It is recommended to set this as large as possible. Type: string matching the pattern [0-9]+(K|M|G)iB Default: "1GiB" Declared by: <nixpkgs/nixos/modules/services/databases/tigerbeetle.nix>

## services.tigerbeetle.clusterId

The 128-bit cluster ID used to create the replica data file (if needed). Since Nix only supports integers up to 64 bits, you need to pass a string to this if the cluster ID can’t fit in 64 bits. Otherwise, you can pass the cluster ID as either an integer or a string. Type: unsigned integer, meaning >=0, or string matching the pattern [0-9]+ Default: 0 Declared by: <nixpkgs/nixos/modules/services/databases/tigerbeetle.nix>

## services.tigerbeetle.replicaCount

The number of replicas participating in replication of the cluster. Type: unsigned integer, meaning >=0 Default: 1 Declared by: <nixpkgs/nixos/modules/services/databases/tigerbeetle.nix>

## services.tigerbeetle.replicaIndex

The index (starting at 0) of the replica in the cluster. Type: unsigned integer, meaning >=0 Default: 0 Declared by: <nixpkgs/nixos/modules/services/databases/tigerbeetle.nix>
