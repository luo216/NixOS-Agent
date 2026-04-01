---
module: networking.sits.<name>.encapsulation
option_count: 3
source: options.html
---

# networking.sits.<name>.encapsulation

## networking.sits.<name>.encapsulation.port

Destination port when using UDP encapsulation. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Example: 9001 Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.sits.<name>.encapsulation.sourcePort

Source port when using UDP encapsulation. Will be chosen automatically by the kernel if unset. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Example: 9002 Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.sits.<name>.encapsulation.type

Select the encapsulation type: 6in4: the IPv6 packets are encapsulated using the 6in4 protocol (formerly known as SIT, RFC 4213); gue: the IPv6 packets are encapsulated in UDP packets using the Generic UDP Encapsulation (GUE) scheme; foo: the IPv6 packets are encapsulated in UDP packets using the Foo over UDP (FOU) scheme. Type: one of “6in4”, “fou”, “gue” Default: "6in4" Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>
