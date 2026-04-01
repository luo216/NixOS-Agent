---
module: services.firewalld.zones.<name>.forwardPorts.*
option_count: 4
source: options.html
---

# services.firewalld.zones.<name>.forwardPorts.*

## services.firewalld.zones.<name>.forwardPorts.*.port

Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) or (submodule) Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/zone.nix>

## services.firewalld.zones.<name>.forwardPorts.*.protocol

Type: one of “tcp”, “udp”, “sctp”, “dccp” Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/zone.nix>

## services.firewalld.zones.<name>.forwardPorts.*.to-addr

Destination IP address. Type: null or non-empty string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/zone.nix>

## services.firewalld.zones.<name>.forwardPorts.*.to-port

Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/zone.nix>
