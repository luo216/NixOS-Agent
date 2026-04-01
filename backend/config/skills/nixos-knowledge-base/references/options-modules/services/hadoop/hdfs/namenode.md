---
module: services.hadoop.hdfs.namenode
option_count: 6
source: options.html
---

# services.hadoop.hdfs.namenode

## services.hadoop.hdfs.namenode.enable

Whether to enable HDFS NameNode. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hdfs.nix>

## services.hadoop.hdfs.namenode.extraEnv

Extra environment variables for HDFS NameNode Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hdfs.nix>

## services.hadoop.hdfs.namenode.extraFlags

Extra command line flags to pass to HDFS NameNode Type: list of string Default: [ ] Example: [ "-Dcom.sun.management.jmxremote" "-Dcom.sun.management.jmxremote.port=8010" ] Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hdfs.nix>

## services.hadoop.hdfs.namenode.formatOnInit

Format HDFS namenode on first start. This is useful for quickly spinning up ephemeral HDFS clusters with a single namenode. For HA clusters, initialization involves multiple steps across multiple nodes. Follow this guide to initialize an HA cluster manually: https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-hdfs/HDFSHighAvailabilityWithQJM.html Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hdfs.nix>

## services.hadoop.hdfs.namenode.openFirewall

Open firewall ports for HDFS NameNode. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hdfs.nix>

## services.hadoop.hdfs.namenode.restartIfChanged

Automatically restart the service on config change. This can be set to false to defer restarts on clusters running critical applications. Please consider the security implications of inadvertently running an older version, and the possibility of unexpected behavior caused by inconsistent versions across a cluster when disabling this option. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hdfs.nix>
