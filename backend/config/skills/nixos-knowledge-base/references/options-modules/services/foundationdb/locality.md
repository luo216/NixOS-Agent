---
module: services.foundationdb.locality
option_count: 4
source: options.html
---

# services.foundationdb.locality

## services.foundationdb.locality.dataHall

Data hall identifier key. All processes physically located in a data hall should share the id. If you are depending on data hall based replication this must be set on all processes. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/databases/foundationdb.nix>

## services.foundationdb.locality.datacenterId

Data center identifier key. All processes physically located in a data center should share the id. If you are depending on data center based replication this must be set on all processes. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/databases/foundationdb.nix>

## services.foundationdb.locality.machineId

Machine identifier key. All processes on a machine should share a unique id. By default, processes on a machine determine a unique id to share. This does not generally need to be set. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/databases/foundationdb.nix>

## services.foundationdb.locality.zoneId

Zone identifier key. Processes that share a zone id are considered non-unique for the purposes of data replication. If unset, defaults to machine id. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/databases/foundationdb.nix>
