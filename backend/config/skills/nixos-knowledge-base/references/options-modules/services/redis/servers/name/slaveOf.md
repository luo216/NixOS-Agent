---
module: services.redis.servers.<name>.slaveOf
option_count: 2
source: options.html
---

# services.redis.servers.<name>.slaveOf

## services.redis.servers.<name>.slaveOf.ip

IP of the Redis master Type: string Example: "192.168.1.100" Declared by: <nixpkgs/nixos/modules/services/databases/redis.nix>

## services.redis.servers.<name>.slaveOf.port

port of the Redis master Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 6379 Declared by: <nixpkgs/nixos/modules/services/databases/redis.nix>
