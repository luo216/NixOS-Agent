---
module: services.aerospike
option_count: 5
source: options.html
---

# services.aerospike

## services.aerospike.enable

Whether to enable Aerospike server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/databases/aerospike.nix>

## services.aerospike.package

The aerospike package to use. Type: package Default: pkgs.aerospike Declared by: <nixpkgs/nixos/modules/services/databases/aerospike.nix>

## services.aerospike.extraConfig

Extra configuration Type: strings concatenated with “\n” Default: "" Example: '' namespace test { replication-factor 2 memory-size 4G default-ttl 30d storage-engine memory } '' Declared by: <nixpkgs/nixos/modules/services/databases/aerospike.nix>

## services.aerospike.networkConfig

network section of configuration file Type: strings concatenated with “\n” Default: '' service { address any port 3000 } heartbeat { address any mode mesh port 3002 interval 150 timeout 10 } fabric { address any port 3001 } info { address any port 3003 } '' Declared by: <nixpkgs/nixos/modules/services/databases/aerospike.nix>

## services.aerospike.workDir

Location where Aerospike stores its files Type: string Default: "/var/lib/aerospike" Declared by: <nixpkgs/nixos/modules/services/databases/aerospike.nix>
