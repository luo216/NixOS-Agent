---
module: services.redis
option_count: 3
source: options.html
---

# services.redis

## services.redis.package

The redis package to use. Type: package Default: pkgs.redis Declared by: <nixpkgs/nixos/modules/services/databases/redis.nix>

## services.redis.servers

Configuration of multiple redis-server instances. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/databases/redis.nix>

## services.redis.vmOverCommit

Whether to enable set vm.overcommit_memory sysctl to 1 (Suggested for Background Saving: https://redis.io/docs/get-started/faq/) . Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/databases/redis.nix>
