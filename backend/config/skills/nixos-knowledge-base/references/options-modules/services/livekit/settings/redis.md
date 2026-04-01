---
module: services.livekit.settings.redis
option_count: 1
source: options.html
---

# services.livekit.settings.redis

## services.livekit.settings.redis.address

Host and port used to connect to a redis instance. Type: null or string Default: Local Redis host/port when a local ingress component is enabled else null Example: "redis.example.com:6379" Declared by: <nixpkgs/nixos/modules/services/networking/livekit.nix>
