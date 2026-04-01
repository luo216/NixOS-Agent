---
module: services.pretix.settings.redis
option_count: 2
source: options.html
---

# services.pretix.settings.redis

## services.pretix.settings.redis.location

URI to the redis server, used to speed up locking, caching and session storage. Type: null or string Default: "unix://${config.services.redis.servers.pretix.unixSocket}?db=0" Declared by: <nixpkgs/nixos/modules/services/web-apps/pretix.nix>

## services.pretix.settings.redis.sessions

Whether to use redis as the session storage. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/web-apps/pretix.nix>
