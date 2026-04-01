---
module: services.discourse.redis
option_count: 4
source: options.html
---

# services.discourse.redis

## services.discourse.redis.dbNumber

Redis database number. Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>

## services.discourse.redis.host

Redis server hostname. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>

## services.discourse.redis.passwordFile

File containing the Redis password. This should be a string, not a nix path, since nix paths are copied into the world-readable nix store. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>

## services.discourse.redis.useSSL

Connect to Redis with SSL. Type: boolean Default: config.services.discourse.redis.host != "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>
