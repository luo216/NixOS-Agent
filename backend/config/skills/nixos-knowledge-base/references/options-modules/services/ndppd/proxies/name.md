---
module: services.ndppd.proxies.<name>
option_count: 5
source: options.html
---

# services.ndppd.proxies.<name>

## services.ndppd.proxies.<name>.interface

Listen for any Neighbor Solicitation messages on this interface, and respond to them according to a set of rules. Defaults to the name of the attrset. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/ndppd.nix>

## services.ndppd.proxies.<name>.router

Turns on or off the router flag for Neighbor Advertisement Messages. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/ndppd.nix>

## services.ndppd.proxies.<name>.rules

This is a rule that the target address is to match against. If no netmask is provided, /128 is assumed. You may have several rule sections, and the addresses may or may not overlap. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/ndppd.nix>

## services.ndppd.proxies.<name>.timeout

Controls how long to wait for a Neighbor Advertisement Message before invalidating the entry, in milliseconds. Type: signed integer Default: 500 Declared by: <nixpkgs/nixos/modules/services/networking/ndppd.nix>

## services.ndppd.proxies.<name>.ttl

Controls how long a valid or invalid entry remains in the cache, in milliseconds. Type: signed integer Default: 30000 Declared by: <nixpkgs/nixos/modules/services/networking/ndppd.nix>
