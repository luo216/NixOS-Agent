---
module: services.peertube.redis
option_count: 5
source: options.html
---

# services.peertube.redis

## services.peertube.redis.enableUnixSocket

Use Unix socket. Type: boolean Default: config.services.peertube.redis.createLocally Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube.nix>

## services.peertube.redis.createLocally

Configure local Redis server for PeerTube. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube.nix>

## services.peertube.redis.host

Redis host. Type: null or string Default: if config.services.peertube.redis.createLocally && !config.services.peertube.redis.enableUnixSocket then "127.0.0.1" else null Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube.nix>

## services.peertube.redis.passwordFile

Password for redis database. Type: null or absolute path Default: null Example: "/run/keys/peertube/password-redis-db" Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube.nix>

## services.peertube.redis.port

Redis port. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: if config.services.peertube.redis.createLocally && config.services.peertube.redis.enableUnixSocket then null else 6379 Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube.nix>
