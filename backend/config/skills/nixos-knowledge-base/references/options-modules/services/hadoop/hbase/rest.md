---
module: services.hadoop.hbase.rest
option_count: 7
source: options.html
---

# services.hadoop.hbase.rest

## services.hadoop.hbase.rest.enable

Whether to enable HBase rest. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hbase.nix>

## services.hadoop.hbase.rest.environment

Environment variables passed to rest. Type: attribute set of string Default: { } Example: { HBASE_MASTER_OPTS = "-Dcom.sun.management.jmxremote.ssl=true"; } Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hbase.nix>

## services.hadoop.hbase.rest.extraFlags

Extra flags for the rest service. Type: list of string Default: [ ] Example: [ "--backup" ] Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hbase.nix>

## services.hadoop.hbase.rest.infoPort

web UI port Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8085 Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hbase.nix>

## services.hadoop.hbase.rest.openFirewall

Open firewall ports for HBase rest. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hbase.nix>

## services.hadoop.hbase.rest.port

RPC port Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hbase.nix>

## services.hadoop.hbase.rest.restartIfChanged

Restart rest con config change. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hbase.nix>
