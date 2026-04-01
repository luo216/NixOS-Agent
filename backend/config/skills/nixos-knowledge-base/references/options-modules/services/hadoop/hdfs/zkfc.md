---
module: services.hadoop.hdfs.zkfc
option_count: 4
source: options.html
---

# services.hadoop.hdfs.zkfc

## services.hadoop.hdfs.zkfc.enable

Whether to enable HDFS ZooKeeper failover controller. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hdfs.nix>

## services.hadoop.hdfs.zkfc.extraEnv

Extra environment variables for HDFS ZooKeeper failover controller Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hdfs.nix>

## services.hadoop.hdfs.zkfc.extraFlags

Extra command line flags to pass to HDFS ZooKeeper failover controller Type: list of string Default: [ ] Example: [ "-Dcom.sun.management.jmxremote" "-Dcom.sun.management.jmxremote.port=8010" ] Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hdfs.nix>

## services.hadoop.hdfs.zkfc.restartIfChanged

Automatically restart the service on config change. This can be set to false to defer restarts on clusters running critical applications. Please consider the security implications of inadvertently running an older version, and the possibility of unexpected behavior caused by inconsistent versions across a cluster when disabling this option. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hdfs.nix>
