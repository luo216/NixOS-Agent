---
module: services.neo4j
option_count: 7
source: options.html
---

# services.neo4j

## services.neo4j.enable

Whether to enable Neo4j Community Edition. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/databases/neo4j.nix>

## services.neo4j.package

The neo4j package to use. Type: package Default: pkgs.neo4j Declared by: <nixpkgs/nixos/modules/services/databases/neo4j.nix>

## services.neo4j.constrainLoadCsv

Sets the root directory for file URLs used with the Cypher LOAD CSV clause to be that defined by directories.imports. It restricts access to only those files within that directory and its subdirectories. Setting this option to false introduces possible security problems. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/databases/neo4j.nix>

## services.neo4j.defaultListenAddress

Default network interface to listen for incoming connections. To listen for connections on all interfaces, use “0.0.0.0”. Specifies the default IP address and address part of connector specific listenAddress options. To bind specific connectors to a specific network interfaces, specify the entire listenAddress option for that connector. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/databases/neo4j.nix>

## services.neo4j.extraServerConfig

Extra configuration for Neo4j Community server. Refer to the complete reference of Neo4j configuration settings. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/databases/neo4j.nix>

## services.neo4j.readOnly

Only allow read operations from this Neo4j instance. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/databases/neo4j.nix>

## services.neo4j.workerCount

Number of Neo4j worker threads, where the default of 0 indicates a worker count equal to the number of available processors. Type: integer between 0 and 44738 (both inclusive) Default: 0 Declared by: <nixpkgs/nixos/modules/services/databases/neo4j.nix>
