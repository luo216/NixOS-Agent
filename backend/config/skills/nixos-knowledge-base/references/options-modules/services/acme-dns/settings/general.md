---
module: services.acme-dns.settings.general
option_count: 6
source: options.html
---

# services.acme-dns.settings.general

## services.acme-dns.settings.general.domain

Domain name to serve the requests off of. Type: string Example: "acme-dns.example.com" Declared by: <nixpkgs/nixos/modules/services/networking/acme-dns.nix>

## services.acme-dns.settings.general.listen

IP+port combination to bind and serve the DNS server on. Type: string Default: "[::]:53" Example: "127.0.0.1:53" Declared by: <nixpkgs/nixos/modules/services/networking/acme-dns.nix>

## services.acme-dns.settings.general.nsadmin

Zone admin email address for SOA. Type: string Example: "admin.example.com" Declared by: <nixpkgs/nixos/modules/services/networking/acme-dns.nix>

## services.acme-dns.settings.general.nsname

Zone name server. Type: string Example: "acme-dns.example.com" Declared by: <nixpkgs/nixos/modules/services/networking/acme-dns.nix>

## services.acme-dns.settings.general.protocol

Protocols to serve DNS responses on. Type: one of “both”, “both4”, “both6”, “udp”, “udp4”, “udp6”, “tcp”, “tcp4”, “tcp6” Default: "both" Declared by: <nixpkgs/nixos/modules/services/networking/acme-dns.nix>

## services.acme-dns.settings.general.records

Predefined DNS records served in addition to the _acme-challenge TXT records. Type: list of string Example: [ # replace with your acme-dns server's public IPv4 "acme-dns.example.com. A 198.51.100.1" # replace with your acme-dns server's public IPv6 "acme-dns.example.com. AAAA 2001:db8::1" # acme-dns.example.com should resolve any *.acme-dns.example.com records "acme-dns.example.com. NS acme-dns.example.com." ] Declared by: <nixpkgs/nixos/modules/services/networking/acme-dns.nix>
