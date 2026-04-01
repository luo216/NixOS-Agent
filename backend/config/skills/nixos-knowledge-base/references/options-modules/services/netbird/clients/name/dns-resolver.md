---
module: services.netbird.clients.<name>.dns-resolver
option_count: 2
source: options.html
---

# services.netbird.clients.<name>.dns-resolver

## services.netbird.clients.<name>.dns-resolver.address

An explicit address that NetBird will serve *.netbird.cloud. (usually) entries on. NetBird serves DNS on it’s own (dynamic) client address by default. Type: null or string Default: null Example: "127.0.0.123" Declared by: <nixpkgs/nixos/modules/services/networking/netbird.nix>

## services.netbird.clients.<name>.dns-resolver.port

A port to serve DNS entries on when dns-resolver.address is enabled. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 53 Declared by: <nixpkgs/nixos/modules/services/networking/netbird.nix>
