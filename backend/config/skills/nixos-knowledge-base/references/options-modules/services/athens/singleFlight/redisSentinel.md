---
module: services.athens.singleFlight.redisSentinel
option_count: 3
source: options.html
---

# services.athens.singleFlight.redisSentinel

## services.athens.singleFlight.redisSentinel.endpoints

URLs that determine all distributed redis servers. Type: list of string Default: [ ] Example: [ "localhost:26379" ] Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.singleFlight.redisSentinel.masterName

Name of the sentinel master server. Type: string Default: "" Example: "redis-1" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.singleFlight.redisSentinel.sentinelPassword

Password for the sentinel server. Warning: this is stored in plain text in the config file. Type: string Default: "" Example: "swordfish" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>
