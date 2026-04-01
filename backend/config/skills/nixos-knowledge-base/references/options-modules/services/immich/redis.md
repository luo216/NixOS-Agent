---
module: services.immich.redis
option_count: 3
source: options.html
---

# services.immich.redis

## services.immich.redis.enable

Whether to enable a redis cache for use with immich. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/immich.nix>

## services.immich.redis.host

The host that redis will listen on. Type: string Default: config.services.redis.servers.immich.unixSocket Declared by: <nixpkgs/nixos/modules/services/web-apps/immich.nix>

## services.immich.redis.port

The port that redis will listen on. Set to zero to disable TCP. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 0 Declared by: <nixpkgs/nixos/modules/services/web-apps/immich.nix>
