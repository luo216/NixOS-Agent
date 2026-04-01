---
module: services.hadoop.hdfs.journalnode
option_count: 5
source: options.html
---

# services.hadoop.hdfs.journalnode

## services.hadoop.hdfs.journalnode.enable

Whether to enable HDFS JournalNode. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hdfs.nix>

## services.hadoop.hdfs.journalnode.extraEnv

Extra environment variables for HDFS JournalNode Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hdfs.nix>

## services.hadoop.hdfs.journalnode.extraFlags

Extra command line flags to pass to HDFS JournalNode Type: list of string Default: [ ] Example: [ "-Dcom.sun.management.jmxremote" "-Dcom.sun.management.jmxremote.port=8010" ] Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hdfs.nix>

## services.hadoop.hdfs.journalnode.openFirewall

Open firewall ports for HDFS JournalNode. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hdfs.nix>

## services.hadoop.hdfs.journalnode.restartIfChanged

Automatically restart the service on config change. This can be set to false to defer restarts on clusters running critical applications. Please consider the security implications of inadvertently running an older version, and the possibility of unexpected behavior caused by inconsistent versions across a cluster when disabling this option. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hdfs.nix>
