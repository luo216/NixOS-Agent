---
module: services.ndppd.proxies.<name>.rules.<name>
option_count: 3
source: options.html
---

# services.ndppd.proxies.<name>.rules.<name>

## services.ndppd.proxies.<name>.rules.<name>.interface

Interface to use when method is iface. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/ndppd.nix>

## services.ndppd.proxies.<name>.rules.<name>.method

static: Immediately answer any Neighbor Solicitation Messages (if they match the IP rule). iface: Forward the Neighbor Solicitation Message through the specified interface and only respond if a matching Neighbor Advertisement Message is received. auto: Same as iface, but instead of manually specifying the outgoing interface, check for a matching route in /proc/net/ipv6_route. Type: one of “static”, “iface”, “auto” Default: "auto" Declared by: <nixpkgs/nixos/modules/services/networking/ndppd.nix>

## services.ndppd.proxies.<name>.rules.<name>.network

This is the target address is to match against. If no netmask is provided, /128 is assumed. The addresses of several rules may or may not overlap. Defaults to the name of the attrset. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/ndppd.nix>
