---
module: services.firewalld.zones.<name>.sources.*
option_count: 3
source: options.html
---

# services.firewalld.zones.<name>.sources.*

## services.firewalld.zones.<name>.sources.*.address

An IP address or a network IP address with a mask for IPv4 or IPv6. For IPv4, the mask can be a network mask or a plain number. For IPv6 the mask is a plain number. The use of host names is not supported. Type: non-empty string Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/zone.nix>

## services.firewalld.zones.<name>.sources.*.ipset

An ipset. Type: non-empty string Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/zone.nix>

## services.firewalld.zones.<name>.sources.*.mac

A MAC address. Type: string matching the pattern ([[:xdigit:]]{2}:){5}[[:xdigit:]]{2} Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/zone.nix>
