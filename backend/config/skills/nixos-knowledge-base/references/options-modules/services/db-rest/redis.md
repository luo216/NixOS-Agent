---
module: services.db-rest.redis
option_count: 7
source: options.html
---

# services.db-rest.redis

## services.db-rest.redis.enable

Enable caching with redis for db-rest. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/db-rest.nix>

## services.db-rest.redis.createLocally

Configure a local redis server for db-rest. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/misc/db-rest.nix>

## services.db-rest.redis.host

Redis host. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/misc/db-rest.nix>

## services.db-rest.redis.passwordFile

Path to a file containing the redis password. Type: null or absolute path Default: null Example: "/run/keys/db-rest/pasword-redis-db" Declared by: <nixpkgs/nixos/modules/services/misc/db-rest.nix>

## services.db-rest.redis.port

Redis port. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/misc/db-rest.nix>

## services.db-rest.redis.useSSL

Use SSL if using a redis network connection. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/misc/db-rest.nix>

## services.db-rest.redis.user

Optional username used for authentication with redis. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/misc/db-rest.nix>
