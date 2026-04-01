---
module: services.hadoop.hbase.regionServer
option_count: 6
source: options.html
---

# services.hadoop.hbase.regionServer

## services.hadoop.hbase.regionServer.enable

Whether to enable HBase regionServer. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hbase.nix>

## services.hadoop.hbase.regionServer.environment

Environment variables passed to regionServer. Type: attribute set of string Default: { } Example: { HBASE_MASTER_OPTS = "-Dcom.sun.management.jmxremote.ssl=true"; } Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hbase.nix>

## services.hadoop.hbase.regionServer.extraFlags

Extra flags for the regionServer service. Type: list of string Default: [ ] Example: [ "--backup" ] Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hbase.nix>

## services.hadoop.hbase.regionServer.openFirewall

Open firewall ports for HBase regionServer. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hbase.nix>

## services.hadoop.hbase.regionServer.overrideHosts

Remove /etc/hosts entries for “127.0.0.2” and “::1” defined in nixos/modules/config/networking.nix Regionservers must be able to resolve their hostnames to their IP addresses, through PTR records or /etc/hosts entries. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hbase.nix>

## services.hadoop.hbase.regionServer.restartIfChanged

Restart regionServer con config change. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hbase.nix>
