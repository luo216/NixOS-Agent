---
module: services.tinc.networks.<name>.hostSettings.<name>.subnets.*
option_count: 3
source: options.html
---

# services.tinc.networks.<name>.hostSettings.<name>.subnets.*

## services.tinc.networks.<name>.hostSettings.<name>.subnets.*.address

The subnet of this host. Subnets can either be single MAC, IPv4 or IPv6 addresses, in which case a subnet consisting of only that single address is assumed, or they can be a IPv4 or IPv6 network address with a prefix length. IPv4 subnets are notated like 192.168.1.0/24, IPv6 subnets are notated like fec0:0:0:1::/64. MAC addresses are notated like 0:1a:2b:3c:4d:5e. Note that subnets like 192.168.1.1/24 are invalid. Type: string Declared by: <nixpkgs/nixos/modules/services/networking/tinc.nix>

## services.tinc.networks.<name>.hostSettings.<name>.subnets.*.prefixLength

The prefix length of the subnet. If null, a subnet consisting of only that single address is assumed. This conforms to standard CIDR notation as described in RFC1519. Type: null or integer between 0 and 128 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/tinc.nix>

## services.tinc.networks.<name>.hostSettings.<name>.subnets.*.weight

Indicates the priority over identical Subnets owned by different nodes. Lower values indicate higher priority. Packets will be sent to the node with the highest priority, unless that node is not reachable, in which case the node with the next highest priority will be tried, and so on. Type: unsigned integer, meaning >=0 Default: 10 Declared by: <nixpkgs/nixos/modules/services/networking/tinc.nix>
