---
module: services.misskey.redis
option_count: 2
source: options.html
---

# services.misskey.redis

## services.misskey.redis.createLocally

Create and use a local Redis instance. Sets services.misskey.settings.redis.host. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>

## services.misskey.redis.passwordFile

The path to a file containing the Redis password. Sets services.misskey.settings.redis.pass. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>
