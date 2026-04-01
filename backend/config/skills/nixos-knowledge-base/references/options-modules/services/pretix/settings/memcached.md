---
module: services.pretix.settings.memcached
option_count: 1
source: options.html
---

# services.pretix.settings.memcached

## services.pretix.settings.memcached.location

The host:port combination or the path to the UNIX socket of a memcached instance. Can be used instead of Redis for caching. Type: null or string Default: null Example: "127.0.0.1:11211" Declared by: <nixpkgs/nixos/modules/services/web-apps/pretix.nix>
