---
module: services.nginx.resolver
option_count: 4
source: options.html
---

# services.nginx.resolver

## services.nginx.resolver.addresses

List of resolvers to use Type: list of string Default: [ ] Example: [ "[::1]" "127.0.0.1:5353" ] Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.resolver.ipv4

By default, nginx will look up both IPv4 and IPv6 addresses while resolving. If looking up of IPv4 addresses is not desired, the ipv4=off parameter can be specified. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.resolver.ipv6

By default, nginx will look up both IPv4 and IPv6 addresses while resolving. If looking up of IPv6 addresses is not desired, the ipv6=off parameter can be specified. Type: boolean Default: config.networking.enableIPv6 Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.resolver.valid

By default, nginx caches answers using the TTL value of a response. An optional valid parameter allows overriding it Type: string Default: "" Example: "30s" Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>
