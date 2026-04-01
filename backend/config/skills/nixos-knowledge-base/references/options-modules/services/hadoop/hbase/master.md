---
module: services.hadoop.hbase.master
option_count: 6
source: options.html
---

# services.hadoop.hbase.master

## services.hadoop.hbase.master.enable

Whether to enable HBase master. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hbase.nix>

## services.hadoop.hbase.master.environment

Environment variables passed to master. Type: attribute set of string Default: { } Example: { HBASE_MASTER_OPTS = "-Dcom.sun.management.jmxremote.ssl=true"; } Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hbase.nix>

## services.hadoop.hbase.master.extraFlags

Extra flags for the master service. Type: list of string Default: [ ] Example: [ "--backup" ] Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hbase.nix>

## services.hadoop.hbase.master.initHDFS

Whether to enable initialization of the hbase directory on HDFS. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hbase.nix>

## services.hadoop.hbase.master.openFirewall

Open firewall ports for HBase master. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hbase.nix>

## services.hadoop.hbase.master.restartIfChanged

Restart master con config change. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hbase.nix>
