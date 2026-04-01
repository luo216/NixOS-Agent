---
module: services.hadoop.hbase.thrift
option_count: 7
source: options.html
---

# services.hadoop.hbase.thrift

## services.hadoop.hbase.thrift.enable

Whether to enable HBase thrift. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hbase.nix>

## services.hadoop.hbase.thrift.environment

Environment variables passed to thrift. Type: attribute set of string Default: { } Example: { HBASE_MASTER_OPTS = "-Dcom.sun.management.jmxremote.ssl=true"; } Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hbase.nix>

## services.hadoop.hbase.thrift.extraFlags

Extra flags for the thrift service. Type: list of string Default: [ ] Example: [ "--backup" ] Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hbase.nix>

## services.hadoop.hbase.thrift.infoPort

web UI port Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9095 Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hbase.nix>

## services.hadoop.hbase.thrift.openFirewall

Open firewall ports for HBase thrift. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hbase.nix>

## services.hadoop.hbase.thrift.port

RPC port Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9090 Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hbase.nix>

## services.hadoop.hbase.thrift.restartIfChanged

Restart thrift con config change. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hbase.nix>
