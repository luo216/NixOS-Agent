---
module: services.athens.singleFlight.redisSentinel.lockConfig
option_count: 3
source: options.html
---

# services.athens.singleFlight.redisSentinel.lockConfig

## services.athens.singleFlight.redisSentinel.lockConfig.maxRetries

Maximum number of retries for the lock. Type: signed integer Default: 10 Example: 1 Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.singleFlight.redisSentinel.lockConfig.timeout

Timeout for the lock in seconds. Type: signed integer Default: 15 Example: 1 Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.singleFlight.redisSentinel.lockConfig.ttl

TTL for the lock in seconds. Type: signed integer Default: 900 Example: 1 Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>
