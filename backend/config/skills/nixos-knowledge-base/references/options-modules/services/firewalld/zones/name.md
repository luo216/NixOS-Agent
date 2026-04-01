---
module: services.firewalld.zones.<name>
option_count: 18
source: options.html
---

# services.firewalld.zones.<name>

## services.firewalld.zones.<name>.description

Description for the zone. Type: null or non-empty string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/zone.nix>

## services.firewalld.zones.<name>.egressPriority

Priority for outbound traffic. Lower values have higher priority. Type: null or 16 bit signed integer; between -32768 and 32767 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/zone.nix>

## services.firewalld.zones.<name>.forward

Whether to enable intra-zone forwarding. When enabled, packets will be forwarded between interfaces or sources within a zone, even if the zone’s target is not set to ACCEPT. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/zone.nix>

## services.firewalld.zones.<name>.forwardPorts

Ports to forward in the zone. Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/zone.nix>

## services.firewalld.zones.<name>.icmpBlockInversion

Whether to invert the icmp block handling. Only enabled ICMP types are accepted and all others are rejected in the zone. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/zone.nix>

## services.firewalld.zones.<name>.icmpBlocks

ICMP types to block in the zone. Type: list of non-empty string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/zone.nix>

## services.firewalld.zones.<name>.ingressPriority

Priority for inbound traffic. Lower values have higher priority. Type: null or 16 bit signed integer; between -32768 and 32767 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/zone.nix>

## services.firewalld.zones.<name>.interfaces

Interfaces to bind. Type: list of non-empty string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/zone.nix>

## services.firewalld.zones.<name>.masquerade

Whether to enable masquerading in the zone. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/zone.nix>

## services.firewalld.zones.<name>.ports

Ports to allow in the zone. Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/zone.nix>

## services.firewalld.zones.<name>.protocols

Protocols to allow in the zone. Type: list of non-empty string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/zone.nix>

## services.firewalld.zones.<name>.rules

Rich rules for the zone. Type: list of (XML value) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/zone.nix>

## services.firewalld.zones.<name>.services

Services to allow in the zone. Type: list of non-empty string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/zone.nix>

## services.firewalld.zones.<name>.short

Short description for the zone. Type: null or non-empty string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/zone.nix>

## services.firewalld.zones.<name>.sourcePorts

Source ports to allow in the zone. Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/zone.nix>

## services.firewalld.zones.<name>.sources

Source addresses, address ranges, MAC addresses or ipsets to bind. Type: list of attribute-tagged union Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/zone.nix>

## services.firewalld.zones.<name>.target

Action for packets that doesn’t match any rules. Type: one of “ACCEPT”, “%%REJECT%%”, “DROP” Default: "%%REJECT%%" Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/zone.nix>

## services.firewalld.zones.<name>.version

Version of the zone. Type: null or non-empty string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/zone.nix>
