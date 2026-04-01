---
module: services.hadoop.hdfs.datanode.dataDirs.*
option_count: 2
source: options.html
---

# services.hadoop.hdfs.datanode.dataDirs.*

## services.hadoop.hdfs.datanode.dataDirs.*.path

Determines where on the local filesystem a data node should store its blocks. Type: absolute path Example: [ "/var/lib/hadoop/hdfs/dn" ] Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hdfs.nix>

## services.hadoop.hdfs.datanode.dataDirs.*.type

Storage types ([SSD]/[DISK]/[ARCHIVE]/[RAM_DISK]) for HDFS storage policies. Type: one of “SSD”, “DISK”, “ARCHIVE”, “RAM_DISK” Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hdfs.nix>
