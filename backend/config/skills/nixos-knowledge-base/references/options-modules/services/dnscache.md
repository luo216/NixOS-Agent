---
module: services.dnscache
option_count: 5
source: options.html
---

# services.dnscache

## services.dnscache.enable

Whether to run the dnscache caching dns server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/dnscache.nix>

## services.dnscache.clientIps

Client IP addresses (or prefixes) from which to accept connections. Type: list of string Default: [ "127.0.0.1" ] Example: [ "192.168" "172.23.75.82" ] Declared by: <nixpkgs/nixos/modules/services/networking/dnscache.nix>

## services.dnscache.domainServers

Table of {hostname: server} pairs to use as authoritative servers for hosts (and subhosts). If entry for @ is not specified predefined list of root servers is used. Type: attribute set of list of string Default: { } Example: { "@" = ["8.8.8.8" "8.8.4.4"]; "example.com" = ["192.168.100.100"]; } Declared by: <nixpkgs/nixos/modules/services/networking/dnscache.nix>

## services.dnscache.forwardOnly

Whether to treat root servers (for @) as caching servers, requesting addresses the same way a client does. This is needed if you want to use e.g. Google DNS as your upstream DNS. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/dnscache.nix>

## services.dnscache.ip

IP address on which to listen for connections. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/networking/dnscache.nix>
