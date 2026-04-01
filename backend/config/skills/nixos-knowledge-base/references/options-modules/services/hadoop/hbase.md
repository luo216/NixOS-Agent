---
module: services.hadoop.hbase
option_count: 3
source: options.html
---

# services.hadoop.hbase

## services.hadoop.hbase.package

The hbase package to use. Type: package Default: pkgs.hbase Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hbase.nix>

## services.hadoop.hbase.rootdir

This option will set “hbase.rootdir” in hbase-site.xml and determine the directory shared by region servers and into which HBase persists. The URL should be ‘fully-qualified’ to include the filesystem scheme. If a core-site.xml is provided, the FS scheme defaults to the value of “fs.defaultFS”. Filesystems other than HDFS (like S3, QFS, Swift) are also supported. Type: string Default: "/hbase" Example: "hdfs://nameservice1/hbase" Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hbase.nix>

## services.hadoop.hbase.zookeeperQuorum

This option will set “hbase.zookeeper.quorum” in hbase-site.xml. Comma separated list of servers in the ZooKeeper ensemble. Type: null or strings concatenated with “,” Default: null Example: "zk1.internal,zk2.internal,zk3.internal" Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hbase.nix>
