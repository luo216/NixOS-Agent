---
module: networking.interfaces.<name>.ipv4.routes.*
option_count: 5
source: options.html
---

# networking.interfaces.<name>.ipv4.routes.*

## networking.interfaces.<name>.ipv4.routes.*.address

IPv4 address of the network. Type: string Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.interfaces.<name>.ipv4.routes.*.options

Other route options. See the symbol OPTIONS in the ip-route(8) manual page for the details. You may also specify metric, src, protocol, scope, from and table, which are technically not route options, in the sense used in the manual. Type: attribute set of string Default: { } Example: { mtu = "1492"; window = "524288"; } Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.interfaces.<name>.ipv4.routes.*.prefixLength

Subnet mask of the network, specified as the number of bits in the prefix (24). Type: integer between 0 and 32 (both inclusive) Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.interfaces.<name>.ipv4.routes.*.type

Type of the route. See the Route types section in the ip-route(8) manual page for the details. Note that prohibit, blackhole, unreachable, and throw cannot be configured per device, so they are not available here. Similarly, nat hasn’t been supported since kernel 2.6. Type: null or one of “unicast”, “local”, “broadcast”, “multicast” Default: null Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.interfaces.<name>.ipv4.routes.*.via

IPv4 address of the next hop. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>
