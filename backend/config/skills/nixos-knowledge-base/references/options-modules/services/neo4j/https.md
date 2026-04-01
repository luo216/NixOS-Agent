---
module: services.neo4j.https
option_count: 4
source: options.html
---

# services.neo4j.https

## services.neo4j.https.enable

Enable the HTTPS connector for Neo4j. Setting this option to false will stop Neo4j from listening for incoming connections on the HTTPS port (7473 by default). Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/databases/neo4j.nix>

## services.neo4j.https.advertisedAddress

Neo4j advertised address for HTTPS traffic. The advertised address is expressed in the format <ip-address>:<port-number>. Type: string Default: config.services.neo4j.https.listenAddress Declared by: <nixpkgs/nixos/modules/services/databases/neo4j.nix>

## services.neo4j.https.listenAddress

Neo4j listen address for HTTPS traffic. The listen address is expressed in the format <ip-address>:<port-number>. Type: string Default: ":7473" Declared by: <nixpkgs/nixos/modules/services/databases/neo4j.nix>

## services.neo4j.https.sslPolicy

Neo4j SSL policy for HTTPS traffic. The legacy policy is a special policy which is not defined in the policy configuration section, but rather derives from directories.certificates and associated files (by default: neo4j.key and neo4j.cert). Its use will be deprecated. Type: string Default: "legacy" Declared by: <nixpkgs/nixos/modules/services/databases/neo4j.nix>
