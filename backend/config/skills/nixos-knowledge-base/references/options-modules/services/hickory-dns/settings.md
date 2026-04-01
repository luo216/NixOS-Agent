---
module: services.hickory-dns.settings
option_count: 5
source: options.html
---

# services.hickory-dns.settings

## services.hickory-dns.settings.directory

The directory in which hickory-dns should look for .zone files, whenever zones aren’t specified by absolute path. Type: string Default: "/var/lib/hickory-dns" Declared by: <nixpkgs/nixos/modules/services/networking/hickory-dns.nix>

## services.hickory-dns.settings.listen_addrs_ipv4

List of ipv4 addresses on which to listen for DNS queries. Type: list of string Default: [ "0.0.0.0" ] Declared by: <nixpkgs/nixos/modules/services/networking/hickory-dns.nix>

## services.hickory-dns.settings.listen_addrs_ipv6

List of ipv6 addresses on which to listen for DNS queries. Type: list of string Default: lib.optional config.networking.enableIPv6 "::0" Declared by: <nixpkgs/nixos/modules/services/networking/hickory-dns.nix>

## services.hickory-dns.settings.listen_port

Port to listen on (applies to all listen addresses). Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 53 Declared by: <nixpkgs/nixos/modules/services/networking/hickory-dns.nix>

## services.hickory-dns.settings.zones

List of zones to serve. Type: list of ((open submodule of (TOML value)) or string convertible to it) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/hickory-dns.nix>
