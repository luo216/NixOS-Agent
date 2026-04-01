---
module: services.neo4j.ssl
option_count: 1
source: options.html
---

# services.neo4j.ssl

## services.neo4j.ssl.policies

Defines the SSL policies for use with Neo4j connectors. Each attribute of this set defines a policy, with the attribute name defining the name of the policy and its namespace. Refer to the operations manual section on Neo4j’s SSL Framework for further details. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/databases/neo4j.nix>
