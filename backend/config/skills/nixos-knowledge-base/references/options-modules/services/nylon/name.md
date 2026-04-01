---
module: services.nylon.<name>
option_count: 10
source: options.html
---

# services.nylon.<name>

## services.nylon.<name>.enable

Enables nylon as a running service upon activation. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/nylon.nix>

## services.nylon.<name>.acceptInterface

Tell nylon which interface to listen for client requests on, default is “lo”. Type: string Default: "lo" Declared by: <nixpkgs/nixos/modules/services/networking/nylon.nix>

## services.nylon.<name>.allowedIPRanges

Allowed client IP ranges are evaluated first, defaults to ARIN IPv4 private ranges: [ “192.168.0.0/16” “127.0.0.0/8” “172.16.0.0/12” “10.0.0.0/8” ] Type: list of string Default: [ "192.168.0.0/16" "127.0.0.1/8" "172.16.0.1/12" "10.0.0.0/8" ] Declared by: <nixpkgs/nixos/modules/services/networking/nylon.nix>

## services.nylon.<name>.bindInterface

Tell nylon which interface to use as an uplink, default is “enp3s0f0”. Type: string Default: "enp3s0f0" Declared by: <nixpkgs/nixos/modules/services/networking/nylon.nix>

## services.nylon.<name>.deniedIPRanges

Denied client IP ranges, these gets evaluated after the allowed IP ranges, defaults to all IPv4 addresses: [ “0.0.0.0/0” ] To block all other access than the allowed. Type: list of string Default: [ "0.0.0.0/0" ] Declared by: <nixpkgs/nixos/modules/services/networking/nylon.nix>

## services.nylon.<name>.logging

Enable logging, default is no logging. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/nylon.nix>

## services.nylon.<name>.name

The name of this nylon instance. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/nylon.nix>

## services.nylon.<name>.nrConnections

The number of allowed simultaneous connections to the daemon, default 10. Type: signed integer Default: 10 Declared by: <nixpkgs/nixos/modules/services/networking/nylon.nix>

## services.nylon.<name>.port

What port to listen for client requests, default is 1080. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 1080 Declared by: <nixpkgs/nixos/modules/services/networking/nylon.nix>

## services.nylon.<name>.verbosity

Enable verbose output, default is to not be verbose. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/nylon.nix>
