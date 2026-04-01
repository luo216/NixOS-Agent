---
module: services.veilid.settings.core.network.routing_table
option_count: 2
source: options.html
---

# services.veilid.settings.core.network.routing_table

## services.veilid.settings.core.network.routing_table.bootstrap

Host name of existing well-known Veilid bootstrap servers for the network to connect to. Type: list of string Default: [ "bootstrap.veilid.net" ] Declared by: <nixpkgs/nixos/modules/services/networking/veilid.nix>

## services.veilid.settings.core.network.routing_table.node_id

Base64-encoded public key for the node, used as the node’s ID. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/veilid.nix>
