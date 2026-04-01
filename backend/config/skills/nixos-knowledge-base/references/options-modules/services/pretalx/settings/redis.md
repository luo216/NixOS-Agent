---
module: services.pretalx.settings.redis
option_count: 2
source: options.html
---

# services.pretalx.settings.redis

## services.pretalx.settings.redis.location

URI to the redis server, used to speed up locking, caching and session storage. Type: null or string Default: "unix://${config.services.redis.servers.pretalx.unixSocket}?db=0" Declared by: <nixpkgs/nixos/modules/services/web-apps/pretalx.nix>

## services.pretalx.settings.redis.session

Whether to use redis as the session storage. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/web-apps/pretalx.nix>
