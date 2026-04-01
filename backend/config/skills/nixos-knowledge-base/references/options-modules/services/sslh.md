---
module: services.sslh
option_count: 5
source: options.html
---

# services.sslh

## services.sslh.enable

Whether to enable sslh, protocol demultiplexer. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/sslh.nix>

## services.sslh.listenAddresses

Listening addresses or hostnames. Type: (list of string) or string convertible to it Default: [ "0.0.0.0" "[::]" ] Declared by: <nixpkgs/nixos/modules/services/networking/sslh.nix>

## services.sslh.method

The method to use for handling connections: fork forks a new process for each incoming connection. It is well-tested and very reliable, but incurs the overhead of many processes. select uses only one thread, which monitors all connections at once. It has lower overhead per connection, but if it stops, you’ll lose all connections. ev is implemented using libev, it’s similar to select but scales better to a large number of connections. Type: one of “fork”, “select”, “ev” Default: "fork" Declared by: <nixpkgs/nixos/modules/services/networking/sslh.nix>

## services.sslh.port

Listening port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 443 Declared by: <nixpkgs/nixos/modules/services/networking/sslh.nix>

## services.sslh.settings

sslh configuration. See sslh(8) for available settings. Type: open submodule of attribute set of (libconfig value) Declared by: <nixpkgs/nixos/modules/services/networking/sslh.nix>
