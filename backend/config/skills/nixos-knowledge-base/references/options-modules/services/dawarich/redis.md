---
module: services.dawarich.redis
option_count: 3
source: options.html
---

# services.dawarich.redis

## services.dawarich.redis.createLocally

Whether to configure a local Redis server for Dawarich. The connection is performed via Unix sockets by default, but that can be changed by configuring services.dawarich.redis.host and services.dawarich.redis.port. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/dawarich.nix>

## services.dawarich.redis.host

The redis host Dawarich will connect to. Type: string Default: config.services.redis.servers.dawarich.unixSocket Declared by: <nixpkgs/nixos/modules/services/web-apps/dawarich.nix>

## services.dawarich.redis.port

The port of the redis server Dawarich will connect to. Set to zero to disable TCP and use Unix sockets instead. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 0 Declared by: <nixpkgs/nixos/modules/services/web-apps/dawarich.nix>
