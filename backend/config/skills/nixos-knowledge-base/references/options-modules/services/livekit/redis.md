---
module: services.livekit.redis
option_count: 3
source: options.html
---

# services.livekit.redis

## services.livekit.redis.createLocally

Whether to set up a local redis instance. Type: boolean Default: "true if any other Livekit component is enabled locally else false" Declared by: <nixpkgs/nixos/modules/services/networking/livekit.nix>

## services.livekit.redis.host

Address to bind local redis instance to. Type: null or string Default: "127.0.0.1 if config.services.livekit.redis.createLocally else null" Declared by: <nixpkgs/nixos/modules/services/networking/livekit.nix>

## services.livekit.redis.port

Port to bind local redis instance to. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/livekit.nix>
