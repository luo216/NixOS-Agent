---
module: services._3proxy.resolution
option_count: 4
source: options.html
---

# services._3proxy.resolution

## services._3proxy.resolution.nscache

Set name cache size for IPv4. Type: signed integer Default: 65535 Declared by: <nixpkgs/nixos/modules/services/networking/3proxy.nix>

## services._3proxy.resolution.nscache6

Set name cache size for IPv6. Type: signed integer Default: 65535 Declared by: <nixpkgs/nixos/modules/services/networking/3proxy.nix>

## services._3proxy.resolution.nserver

List of nameservers to use. Up to 5 nservers may be specified. If no nserver is configured, default system name resolution functions are used. Type: list of string Default: [ ] Example: [ "127.0.0.53" "192.168.1.3:5353/tcp" ] Declared by: <nixpkgs/nixos/modules/services/networking/3proxy.nix>

## services._3proxy.resolution.nsrecord

Adds static nsrecords. Type: attribute set of string Default: { } Example: { "files.local" = "192.168.1.12"; "site.local" = "192.168.1.43"; } Declared by: <nixpkgs/nixos/modules/services/networking/3proxy.nix>
