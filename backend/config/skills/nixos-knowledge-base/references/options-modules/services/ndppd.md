---
module: services.ndppd
option_count: 6
source: options.html
---

# services.ndppd

## services.ndppd.enable

Whether to enable daemon that proxies NDP (Neighbor Discovery Protocol) messages between interfaces. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/ndppd.nix>

## services.ndppd.configFile

Path to configuration file. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/ndppd.nix>

## services.ndppd.interface

Interface which is on link-level with router. (Legacy option, use services.ndppd.proxies.<interface>.rules.<network> instead) Type: null or string Default: null Example: "eth0" Declared by: <nixpkgs/nixos/modules/services/networking/ndppd.nix>

## services.ndppd.network

Network that we proxy. (Legacy option, use services.ndppd.proxies.<interface>.rules.<network> instead) Type: null or string Default: null Example: "1111::/64" Declared by: <nixpkgs/nixos/modules/services/networking/ndppd.nix>

## services.ndppd.proxies

This sets up a listener, that will listen for any Neighbor Solicitation messages, and respond to them according to a set of rules. Type: attribute set of (submodule) Default: { } Example: { eth0.rules."1111::/64" = {}; } Declared by: <nixpkgs/nixos/modules/services/networking/ndppd.nix>

## services.ndppd.routeTTL

This tells ‘ndppd’ how often to reload the route file /proc/net/ipv6_route, in milliseconds. Type: signed integer Default: 30000 Declared by: <nixpkgs/nixos/modules/services/networking/ndppd.nix>
