---
module: services.memcached
option_count: 8
source: options.html
---

# services.memcached

## services.memcached.enable

Whether to enable Memcached. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/databases/memcached.nix>

## services.memcached.enableUnixSocket

Whether to enable Unix Domain Socket at /run/memcached/memcached.sock instead of listening on an IP address and port. The listen and port options are ignored. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/databases/memcached.nix>

## services.memcached.extraOptions

A list of extra options that will be added as a suffix when running memcached. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/databases/memcached.nix>

## services.memcached.listen

The IP address to bind to. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/databases/memcached.nix>

## services.memcached.maxConnections

The maximum number of simultaneous connections. Type: unsigned integer, meaning >=0 Default: 1024 Declared by: <nixpkgs/nixos/modules/services/databases/memcached.nix>

## services.memcached.maxMemory

The maximum amount of memory to use for storage, in MiB (1024×1024 bytes). Type: unsigned integer, meaning >=0 Default: 64 Declared by: <nixpkgs/nixos/modules/services/databases/memcached.nix>

## services.memcached.port

The port to bind to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 11211 Declared by: <nixpkgs/nixos/modules/services/databases/memcached.nix>

## services.memcached.user

The user to run Memcached as Type: string Default: "memcached" Declared by: <nixpkgs/nixos/modules/services/databases/memcached.nix>
