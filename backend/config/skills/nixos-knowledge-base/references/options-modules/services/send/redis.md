---
module: services.send.redis
option_count: 5
source: options.html
---

# services.send.redis

## services.send.redis.createLocally

Whether to create a local redis automatically. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-servers/send.nix>

## services.send.redis.host

Redis server address. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-servers/send.nix>

## services.send.redis.name

Name of the redis server. Only used if services.send.redis.createLocally is set to true. Type: string Default: "send" Declared by: <nixpkgs/nixos/modules/services/web-servers/send.nix>

## services.send.redis.passwordFile

The path to the file containing the Redis password. If services.send.redis.createLocally is set to true, the content of this file will be used as the password for the locally created Redis instance. Leave it blank if no password is required. Type: null or absolute path Default: null Example: "/run/agenix/send-redis-password" Declared by: <nixpkgs/nixos/modules/services/web-servers/send.nix>

## services.send.redis.port

Port of the redis server. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 6379 Declared by: <nixpkgs/nixos/modules/services/web-servers/send.nix>
