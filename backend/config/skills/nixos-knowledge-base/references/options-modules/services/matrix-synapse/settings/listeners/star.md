---
module: services.matrix-synapse.settings.listeners.*
option_count: 8
source: options.html
---

# services.matrix-synapse.settings.listeners.*

## services.matrix-synapse.settings.listeners.*.bind_addresses

IP addresses to bind the listener to. Type: null or (list of string) Default: if path != null then null else [ "::1" "127.0.0.1" ] Example: [ "::" "0.0.0.0" ] Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.settings.listeners.*.mode

File permissions on the UNIX domain socket. Type: null or string matching the pattern ^[0,2-7]{3,4}$ Default: if path != null then "660" else null Example: "660" Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.settings.listeners.*.path

Unix domain socket path to bind this listener to. Note This option is incompatible with bind_addresses, port, tls and also does not support the metrics and manhole listener type. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.settings.listeners.*.port

The port to listen for HTTP(S) requests on. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Example: 8448 Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.settings.listeners.*.resources

List of HTTP resources to serve on this listener. Type: list of (submodule) Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.settings.listeners.*.tls

Whether to enable TLS on the listener socket. Note This option will be ignored for UNIX domain sockets. Type: null or boolean Default: '' Enabled for the main instance listener, unless it is configured with a UNIX domain socket path. '' Example: false Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.settings.listeners.*.type

The type of the listener, usually http. Type: one of “http”, “manhole”, “metrics”, “replication” Default: "http" Example: "metrics" Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.settings.listeners.*.x_forwarded

Use the X-Forwarded-For (XFF) header as the client IP and not the actual client IP. Type: boolean Default: '' Enabled if the listener is configured with a UNIX domain socket path '' Example: true Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>
