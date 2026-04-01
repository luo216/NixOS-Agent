---
module: services.firewalld.services.<name>.destination
option_count: 2
source: options.html
---

# services.firewalld.services.<name>.destination

## services.firewalld.services.<name>.destination.ipv4

IPv4 destination. Type: null or string matching the pattern ([0-9]{1,3}\.){3}[0-9]{1,3}(/[0-9]{1,2})? Default: null Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/service.nix>

## services.firewalld.services.<name>.destination.ipv6

IPv6 destination. Type: null or string matching the pattern [0-9A-Fa-f:]{3,39}(/[0-9]{1,3})? Default: null Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/service.nix>
