---
module: services.firewalld.zones.<name>.ports.*
option_count: 2
source: options.html
---

# services.firewalld.zones.<name>.ports.*

## services.firewalld.zones.<name>.ports.*.port

Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) or (submodule) Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/zone.nix>

## services.firewalld.zones.<name>.ports.*.protocol

Type: one of “tcp”, “udp”, “sctp”, “dccp” Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/zone.nix>
