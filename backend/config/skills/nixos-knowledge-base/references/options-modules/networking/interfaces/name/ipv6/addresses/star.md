---
module: networking.interfaces.<name>.ipv6.addresses.*
option_count: 2
source: options.html
---

# networking.interfaces.<name>.ipv6.addresses.*

## networking.interfaces.<name>.ipv6.addresses.*.address

IPv6 address of the interface. Leave empty to configure the interface using DHCP. Type: string Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.interfaces.<name>.ipv6.addresses.*.prefixLength

Subnet mask of the interface, specified as the number of bits in the prefix (64). Type: integer between 0 and 128 (both inclusive) Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>
