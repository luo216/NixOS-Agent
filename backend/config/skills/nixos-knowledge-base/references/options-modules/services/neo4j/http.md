---
module: services.neo4j.http
option_count: 3
source: options.html
---

# services.neo4j.http

## services.neo4j.http.enable

Enable the HTTP connector for Neo4j. Setting this option to false will stop Neo4j from listening for incoming connections on the HTTPS port (7474 by default). Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/databases/neo4j.nix>

## services.neo4j.http.advertisedAddress

Neo4j advertised address for HTTP traffic. The advertised address is expressed in the format <ip-address>:<port-number>. Type: string Default: config.services.neo4j.http.listenAddress Declared by: <nixpkgs/nixos/modules/services/databases/neo4j.nix>

## services.neo4j.http.listenAddress

Neo4j listen address for HTTP traffic. The listen address is expressed in the format <ip-address>:<port-number>. Type: string Default: ":7474" Declared by: <nixpkgs/nixos/modules/services/databases/neo4j.nix>
