---
module: services.leaps
option_count: 4
source: options.html
---

# services.leaps

## services.leaps.enable

Whether to enable leaps, a pair programming service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/leaps.nix>

## services.leaps.address

Hostname or IP-address to listen to. By default it will listen on all interfaces. Type: string Default: "" Example: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/misc/leaps.nix>

## services.leaps.path

Subdirectory used for reverse proxy setups Type: absolute path Default: "/" Declared by: <nixpkgs/nixos/modules/services/misc/leaps.nix>

## services.leaps.port

A port where leaps listens for incoming http requests Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/misc/leaps.nix>
