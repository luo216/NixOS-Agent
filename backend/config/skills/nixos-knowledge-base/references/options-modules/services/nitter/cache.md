---
module: services.nitter.cache
option_count: 6
source: options.html
---

# services.nitter.cache

## services.nitter.cache.listMinutes

How long to cache list info (not the tweets, so keep it high). Type: signed integer Default: 240 Declared by: <nixpkgs/nixos/modules/services/misc/nitter.nix>

## services.nitter.cache.redisConnections

Redis connection pool size. Type: signed integer Default: 20 Declared by: <nixpkgs/nixos/modules/services/misc/nitter.nix>

## services.nitter.cache.redisHost

Redis host. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/misc/nitter.nix>

## services.nitter.cache.redisMaxConnections

Maximum number of connections to Redis. New connections are opened when none are available, but if the pool size goes above this, they are closed when released, do not worry about this unless you receive tons of requests per second. Type: signed integer Default: 30 Declared by: <nixpkgs/nixos/modules/services/misc/nitter.nix>

## services.nitter.cache.redisPort

Redis port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 6379 Declared by: <nixpkgs/nixos/modules/services/misc/nitter.nix>

## services.nitter.cache.rssMinutes

How long to cache RSS queries. Type: signed integer Default: 10 Declared by: <nixpkgs/nixos/modules/services/misc/nitter.nix>
