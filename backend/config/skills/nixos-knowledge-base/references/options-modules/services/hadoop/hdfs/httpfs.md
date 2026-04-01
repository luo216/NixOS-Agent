---
module: services.hadoop.hdfs.httpfs
option_count: 6
source: options.html
---

# services.hadoop.hdfs.httpfs

## services.hadoop.hdfs.httpfs.enable

Whether to enable HDFS JournalNode. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hdfs.nix>

## services.hadoop.hdfs.httpfs.extraEnv

Extra environment variables for HDFS JournalNode Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hdfs.nix>

## services.hadoop.hdfs.httpfs.extraFlags

Extra command line flags to pass to HDFS JournalNode Type: list of string Default: [ ] Example: [ "-Dcom.sun.management.jmxremote" "-Dcom.sun.management.jmxremote.port=8010" ] Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hdfs.nix>

## services.hadoop.hdfs.httpfs.openFirewall

Open firewall ports for HDFS JournalNode. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hdfs.nix>

## services.hadoop.hdfs.httpfs.restartIfChanged

Automatically restart the service on config change. This can be set to false to defer restarts on clusters running critical applications. Please consider the security implications of inadvertently running an older version, and the possibility of unexpected behavior caused by inconsistent versions across a cluster when disabling this option. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hdfs.nix>

## services.hadoop.hdfs.httpfs.tempPath

HTTPFS_TEMP path used by HTTPFS Type: absolute path Default: "/tmp/hadoop/httpfs" Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hdfs.nix>
