---
module: services.hadoop.hdfs.datanode
option_count: 6
source: options.html
---

# services.hadoop.hdfs.datanode

## services.hadoop.hdfs.datanode.enable

Whether to enable HDFS DataNode. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hdfs.nix>

## services.hadoop.hdfs.datanode.dataDirs

Tier and path definitions for datanode storage. Type: null or (list of (submodule)) Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hdfs.nix>

## services.hadoop.hdfs.datanode.extraEnv

Extra environment variables for HDFS DataNode Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hdfs.nix>

## services.hadoop.hdfs.datanode.extraFlags

Extra command line flags to pass to HDFS DataNode Type: list of string Default: [ ] Example: [ "-Dcom.sun.management.jmxremote" "-Dcom.sun.management.jmxremote.port=8010" ] Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hdfs.nix>

## services.hadoop.hdfs.datanode.openFirewall

Open firewall ports for HDFS DataNode. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hdfs.nix>

## services.hadoop.hdfs.datanode.restartIfChanged

Automatically restart the service on config change. This can be set to false to defer restarts on clusters running critical applications. Please consider the security implications of inadvertently running an older version, and the possibility of unexpected behavior caused by inconsistent versions across a cluster when disabling this option. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hdfs.nix>
