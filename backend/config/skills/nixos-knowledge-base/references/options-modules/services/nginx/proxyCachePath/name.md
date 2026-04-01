---
module: services.nginx.proxyCachePath.<name>
option_count: 7
source: options.html
---

# services.nginx.proxyCachePath.<name>

## services.nginx.proxyCachePath.<name>.enable

Whether to enable this proxy cache path entry. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.proxyCachePath.<name>.inactive

Cached data that has not been accessed for the time specified by the inactive parameter is removed from the cache, regardless of its freshness. Type: string Default: "10m" Example: "1d" Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.proxyCachePath.<name>.keysZoneName

Set name to shared memory zone. Type: string Default: "cache" Example: "my_cache" Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.proxyCachePath.<name>.keysZoneSize

Set size to shared memory zone. Type: string Default: "10m" Example: "32m" Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.proxyCachePath.<name>.levels

The levels parameter defines structure of subdirectories in cache: from 1 to 3, each level accepts values 1 or 2. Can be used any combination of 1 and 2 in these formats: x, x:x and x:x:x. Type: string Default: "1:2" Example: "1:2:2" Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.proxyCachePath.<name>.maxSize

Set maximum cache size Type: string Default: "1g" Example: "2048m" Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.proxyCachePath.<name>.useTempPath

Nginx first writes files that are destined for the cache to a temporary storage area, and the use_temp_path=off directive instructs Nginx to write them to the same directories where they will be cached. Recommended that you set this parameter to off to avoid unnecessary copying of data between file systems. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>
