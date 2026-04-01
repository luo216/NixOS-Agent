---
module: services.ntopng.redis
option_count: 2
source: options.html
---

# services.ntopng.redis

## services.ntopng.redis.address

Redis address - may be a Unix socket or a network host and port. Type: string Example: config.services.redis.ntopng.unixSocket Declared by: <nixpkgs/nixos/modules/services/networking/ntopng.nix>

## services.ntopng.redis.createInstance

Local Redis instance name. Set to null to disable local Redis instance. Defaults to "" for system.stateVersion older than 22.05. Type: null or string Default: "ntopng" Declared by: <nixpkgs/nixos/modules/services/networking/ntopng.nix>
