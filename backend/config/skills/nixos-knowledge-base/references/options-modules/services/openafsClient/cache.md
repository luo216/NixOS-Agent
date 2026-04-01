---
module: services.openafsClient.cache
option_count: 4
source: options.html
---

# services.openafsClient.cache

## services.openafsClient.cache.blocks

Cache size in 1KB blocks. Type: signed integer Default: 100000 Declared by: <nixpkgs/nixos/modules/services/network-filesystems/openafs/client.nix>

## services.openafsClient.cache.chunksize

Size of each cache chunk given in powers of 2. 0 resets the chunk size to its default values (13 (8 KB) for memcache, 18-20 (256 KB to 1 MB) for diskcache). Maximum value is 30. Important performance parameter. Set to higher values when dealing with large files. Type: integer between 0 and 30 (both inclusive) Default: 0 Declared by: <nixpkgs/nixos/modules/services/network-filesystems/openafs/client.nix>

## services.openafsClient.cache.directory

Cache directory. Type: string Default: "/var/cache/openafs" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/openafs/client.nix>

## services.openafsClient.cache.diskless

Use in-memory cache for diskless machines. Has no real performance benefit anymore. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/network-filesystems/openafs/client.nix>
