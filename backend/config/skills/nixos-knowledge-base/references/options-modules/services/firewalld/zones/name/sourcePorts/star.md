---
module: services.firewalld.zones.<name>.sourcePorts.*
option_count: 2
source: options.html
---

# services.firewalld.zones.<name>.sourcePorts.*

## services.firewalld.zones.<name>.sourcePorts.*.port

Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) or (submodule) Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/zone.nix>

## services.firewalld.zones.<name>.sourcePorts.*.protocol

Type: one of “tcp”, “udp”, “sctp”, “dccp” Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/zone.nix>
