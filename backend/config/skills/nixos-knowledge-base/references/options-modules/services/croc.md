---
module: services.croc
option_count: 5
source: options.html
---

# services.croc

## services.croc.enable

Whether to enable croc relay. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/croc.nix>

## services.croc.debug

Whether to enable debug logs. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/croc.nix>

## services.croc.openFirewall

Whether to enable opening of the peer port(s) in the firewall. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/croc.nix>

## services.croc.pass

Password or passwordfile for the relay. Type: absolute path or string Default: "pass123" Declared by: <nixpkgs/nixos/modules/services/networking/croc.nix>

## services.croc.ports

Ports of the relay. Type: list of 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: [ 9009 9010 9011 9012 9013 ] Declared by: <nixpkgs/nixos/modules/services/networking/croc.nix>
