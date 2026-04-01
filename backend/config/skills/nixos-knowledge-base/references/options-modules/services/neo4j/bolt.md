---
module: services.neo4j.bolt
option_count: 5
source: options.html
---

# services.neo4j.bolt

## services.neo4j.bolt.enable

Enable the BOLT connector for Neo4j. Setting this option to false will stop Neo4j from listening for incoming connections on the BOLT port (7687 by default). Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/databases/neo4j.nix>

## services.neo4j.bolt.advertisedAddress

Neo4j advertised address for BOLT traffic. The advertised address is expressed in the format <ip-address>:<port-number>. Type: string Default: config.services.neo4j.bolt.listenAddress Declared by: <nixpkgs/nixos/modules/services/databases/neo4j.nix>

## services.neo4j.bolt.listenAddress

Neo4j listen address for BOLT traffic. The listen address is expressed in the format <ip-address>:<port-number>. Type: string Default: ":7687" Declared by: <nixpkgs/nixos/modules/services/databases/neo4j.nix>

## services.neo4j.bolt.sslPolicy

Neo4j SSL policy for BOLT traffic. The legacy policy is a special policy which is not defined in the policy configuration section, but rather derives from directories.certificates and associated files (by default: neo4j.key and neo4j.cert). Its use will be deprecated. Note: This connector must be configured to support/require SSL/TLS for the legacy policy to actually be utilized. See bolt.tlsLevel. Type: string Default: "legacy" Declared by: <nixpkgs/nixos/modules/services/databases/neo4j.nix>

## services.neo4j.bolt.tlsLevel

SSL/TSL requirement level for BOLT traffic. Type: one of “REQUIRED”, “OPTIONAL”, “DISABLED” Default: "OPTIONAL" Declared by: <nixpkgs/nixos/modules/services/databases/neo4j.nix>
