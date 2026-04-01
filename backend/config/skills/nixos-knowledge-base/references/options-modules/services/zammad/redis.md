---
module: services.zammad.redis
option_count: 4
source: options.html
---

# services.zammad.redis

## services.zammad.redis.createLocally

Whether to create a local redis automatically. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/development/zammad.nix>

## services.zammad.redis.host

Redis server address. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/development/zammad.nix>

## services.zammad.redis.name

Name of the redis server. Only used if createLocally is set to true. Type: string Default: "zammad" Declared by: <nixpkgs/nixos/modules/services/development/zammad.nix>

## services.zammad.redis.port

Port of the redis server. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 6379 Declared by: <nixpkgs/nixos/modules/services/development/zammad.nix>
