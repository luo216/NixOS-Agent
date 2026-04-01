---
module: services.mysql.galeraCluster
option_count: 9
source: options.html
---

# services.mysql.galeraCluster

## services.mysql.galeraCluster.enable

Whether to enable MariaDB Galera Cluster. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/databases/mysql.nix>

## services.mysql.galeraCluster.package

The MariaDB Galera package that provides the shared library ‘libgalera_smm.so’ required for cluster functionality. Type: package Default: pkgs.mariadb-galera Declared by: <nixpkgs/nixos/modules/services/databases/mysql.nix>

## services.mysql.galeraCluster.clusterAddress

Full Galera cluster connection string. If nodeAddresses is set, this will be auto-generated, but you can override it with a custom value. Format is typically ‘gcomm://node1,node2,node3’ with optional parameters. Type: string Default: if (config.services.mysql.galeraCluster.nodeAddresses == [ ]) then "" else "gcomm://${builtins.concatStringsSep \",\" config.services.mysql.galeraCluster.nodeAddresses}" + lib.optionalString (config.services.mysql.galeraCluster.clusterPassword != "") "?gmcast.seg=1:${config.services.mysql.galeraCluster.clusterPassword}" Example: "gcomm://10.0.0.10,10.0.0.20,10.0.0.30?gmcast.seg=1:SomePassword" Declared by: <nixpkgs/nixos/modules/services/databases/mysql.nix>

## services.mysql.galeraCluster.clusterPassword

Optional password for securing cluster communications. If provided, it will be used in the clusterAddress for authentication between nodes. Type: string Default: "" Example: "SomePassword" Declared by: <nixpkgs/nixos/modules/services/databases/mysql.nix>

## services.mysql.galeraCluster.localAddress

IP address or hostname of this node that will be used for cluster communication. Must be reachable by all other nodes. Type: string Default: config.services.mysql.galeraCluster.localName Example: "1.2.3.4" Declared by: <nixpkgs/nixos/modules/services/databases/mysql.nix>

## services.mysql.galeraCluster.localName

The unique name that identifies this particular node within the cluster. Each node must have a different name. Type: string Example: "node1" Declared by: <nixpkgs/nixos/modules/services/databases/mysql.nix>

## services.mysql.galeraCluster.name

The logical name of the Galera cluster. All nodes in the same cluster must use the same name. Type: string Default: "galera" Declared by: <nixpkgs/nixos/modules/services/databases/mysql.nix>

## services.mysql.galeraCluster.nodeAddresses

IP addresses or hostnames of all nodes in the cluster, including this node. This is used to construct the default clusterAddress connection string. Type: list of string Default: [ ] Example: ["10.0.0.10" "10.0.0.20" "10.0.0.30"] Declared by: <nixpkgs/nixos/modules/services/databases/mysql.nix>

## services.mysql.galeraCluster.sstMethod

Method for the initial state transfer (wsrep_sst_method) when a node joins the cluster. Be aware that rsync needs SSH keys to be generated and authorized on all nodes! Type: one of “rsync”, “mariabackup” Default: "rsync" Example: "mariabackup" Declared by: <nixpkgs/nixos/modules/services/databases/mysql.nix>
