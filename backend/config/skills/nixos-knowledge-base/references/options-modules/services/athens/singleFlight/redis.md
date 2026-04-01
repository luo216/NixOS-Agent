---
module: services.athens.singleFlight.redis
option_count: 2
source: options.html
---

# services.athens.singleFlight.redis

## services.athens.singleFlight.redis.endpoint

URL of the redis server. Type: string Default: "" Example: "localhost:6379" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.singleFlight.redis.password

Password for the redis server. Warning: this is stored in plain text in the config file. Type: string Default: "" Example: "swordfish" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>
