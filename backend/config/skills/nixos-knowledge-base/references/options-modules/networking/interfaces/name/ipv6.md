---
module: networking.interfaces.<name>.ipv6
option_count: 2
source: options.html
---

# networking.interfaces.<name>.ipv6

## networking.interfaces.<name>.ipv6.addresses

List of IPv6 addresses that will be statically assigned to the interface. Type: list of (submodule) Default: [ ] Example: [ { address = "fdfd:b3f0:482::1"; prefixLength = 48; } { address = "2001:1470:fffd:2098::e006"; prefixLength = 64; } ] Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.interfaces.<name>.ipv6.routes

List of extra IPv6 static routes that will be assigned to the interface. Type: list of (submodule) Default: [ ] Example: [ { address = "fdfd:b3f0::"; prefixLength = 48; } { address = "2001:1470:fffd:2098::"; prefixLength = 64; via = "fdfd:b3f0::1"; } ] Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>
