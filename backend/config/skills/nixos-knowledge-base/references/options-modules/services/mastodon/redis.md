---
module: services.mastodon.redis
option_count: 5
source: options.html
---

# services.mastodon.redis

## services.mastodon.redis.enableUnixSocket

Use Unix socket Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/mastodon.nix>

## services.mastodon.redis.createLocally

Configure local Redis server for Mastodon. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/mastodon.nix>

## services.mastodon.redis.host

Redis host. Type: null or string Default: if config.services.mastodon.redis.createLocally && !config.services.mastodon.redis.enableUnixSocket then "127.0.0.1" else null Declared by: <nixpkgs/nixos/modules/services/web-apps/mastodon.nix>

## services.mastodon.redis.passwordFile

A file containing the password for Redis database. Type: null or absolute path Default: null Example: "/run/keys/mastodon-redis-password" Declared by: <nixpkgs/nixos/modules/services/web-apps/mastodon.nix>

## services.mastodon.redis.port

Redis port. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: if config.services.mastodon.redis.createLocally && !config.services.mastodon.redis.enableUnixSocket then 31637 else null Declared by: <nixpkgs/nixos/modules/services/web-apps/mastodon.nix>
