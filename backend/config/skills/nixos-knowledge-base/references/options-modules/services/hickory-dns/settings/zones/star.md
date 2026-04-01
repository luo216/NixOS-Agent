---
module: services.hickory-dns.settings.zones.*
option_count: 3
source: options.html
---

# services.hickory-dns.settings.zones.*

## services.hickory-dns.settings.zones.*.file

Path to the .zone file. If not fully-qualified, this path will be interpreted relative to the directory option. If omitted, defaults to the value of the zone option suffixed with “.zone” when zone_type isn’t External; otherwise, defaults to null. Type: null or absolute path or string Default: if config.zone_type != "External" then "${config.zone}.zone" else null Declared by: <nixpkgs/nixos/modules/services/networking/hickory-dns.nix>

## services.hickory-dns.settings.zones.*.zone

Zone name, like “example.com”, “localhost”, or “0.0.127.in-addr.arpa”. Type: string Declared by: <nixpkgs/nixos/modules/services/networking/hickory-dns.nix>

## services.hickory-dns.settings.zones.*.zone_type

One of: “Primary” (the master, authority for the zone). “Secondary” (the slave, replicated from the primary). “External” (a cached zone that queries other nameservers). For more details about these zone types, consult the documentation for BIND, though note that hickory-dns supports only a subset of BIND’s zone types: https://bind9.readthedocs.io/en/v9_18_4/reference.html#type Type: one of “Primary”, “Secondary”, “External” Default: "Primary" Declared by: <nixpkgs/nixos/modules/services/networking/hickory-dns.nix>
