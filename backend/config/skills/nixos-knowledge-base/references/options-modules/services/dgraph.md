---
module: services.dgraph
option_count: 3
source: options.html
---

# services.dgraph

## services.dgraph.enable

Whether to enable Dgraph native GraphQL database with a graph backend. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/databases/dgraph.nix>

## services.dgraph.package

The dgraph package to use. Type: package Default: pkgs.dgraph Declared by: <nixpkgs/nixos/modules/services/databases/dgraph.nix>

## services.dgraph.settings

Contents of the dgraph config. For more details see https://dgraph.io/docs/deploy/config Type: JSON value Default: { } Declared by: <nixpkgs/nixos/modules/services/databases/dgraph.nix>
