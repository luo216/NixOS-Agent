---
module: services.matrix-synapse.settings.listeners.*.resources.*
option_count: 2
source: options.html
---

# services.matrix-synapse.settings.listeners.*.resources.*

## services.matrix-synapse.settings.listeners.*.resources.*.compress

Whether synapse should compress HTTP responses to clients that support it. This should be disabled if running synapse behind a load balancer that can do automatic compression. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.settings.listeners.*.resources.*.names

List of resources to host on this listener. Type: list of (one of “client”, “consent”, “federation”, “health”, “keys”, “media”, “metrics”, “openid”, “replication”, “static”) Example: [ "client" ] Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>
