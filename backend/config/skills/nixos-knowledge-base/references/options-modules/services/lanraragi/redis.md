---
module: services.lanraragi.redis
option_count: 2
source: options.html
---

# services.lanraragi.redis

## services.lanraragi.redis.passwordFile

A file containing the password for LANraragi’s Redis server. Type: null or absolute path Default: null Example: "/run/keys/redis-lanraragi-password" Declared by: <nixpkgs/nixos/modules/services/web-apps/lanraragi.nix>

## services.lanraragi.redis.port

Port for LANraragi’s Redis server. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 6379 Declared by: <nixpkgs/nixos/modules/services/web-apps/lanraragi.nix>
