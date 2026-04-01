---
module: networking.fooOverUDP.<name>
option_count: 3
source: options.html
---

# networking.fooOverUDP.<name>

## networking.fooOverUDP.<name>.local

Local address (and optionally device) to bind to using the given port. Type: null or (submodule) Default: null Example: { address = "203.0.113.22"; } Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.fooOverUDP.<name>.port

Local port of the encapsulation UDP socket. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.fooOverUDP.<name>.protocol

Protocol number of the encapsulated packets. Specifying null (the default) creates a GUE endpoint, specifying a protocol number will create a FOU endpoint. Type: null or integer between 1 and 255 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>
