---
module: services.athens.singleFlight.redis.lockConfig
option_count: 3
source: options.html
---

# services.athens.singleFlight.redis.lockConfig

## services.athens.singleFlight.redis.lockConfig.maxRetries

Maximum number of retries for the lock. Type: signed integer Default: 10 Example: 1 Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.singleFlight.redis.lockConfig.timeout

Timeout for the lock in seconds. Type: signed integer Default: 15 Example: 1 Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.singleFlight.redis.lockConfig.ttl

TTL for the lock in seconds. Type: signed integer Default: 900 Example: 1 Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>
