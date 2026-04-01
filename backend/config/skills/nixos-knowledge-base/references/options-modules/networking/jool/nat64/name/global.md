---
module: networking.jool.nat64.<name>.global
option_count: 1
source: options.html
---

# networking.jool.nat64.<name>.global

## networking.jool.nat64.<name>.global.pool6

The prefix used for embedding IPv4 into IPv6 addresses. Defaults to the well-known NAT64 prefix, defined by RFC 6052. Type: Network prefix in CIDR notation Default: "64:ff9b::/96" Declared by: <nixpkgs/nixos/modules/services/networking/jool.nix>
