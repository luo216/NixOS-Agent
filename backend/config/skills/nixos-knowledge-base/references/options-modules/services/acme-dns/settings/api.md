---
module: services.acme-dns.settings.api
option_count: 4
source: options.html
---

# services.acme-dns.settings.api

## services.acme-dns.settings.api.disable_registration

Whether to disable the HTTP registration endpoint. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/acme-dns.nix>

## services.acme-dns.settings.api.ip

IP to bind the HTTP API on. Type: string Default: "[::]" Example: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/acme-dns.nix>

## services.acme-dns.settings.api.port

Listen port for the HTTP API. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/networking/acme-dns.nix>

## services.acme-dns.settings.api.tls

TLS backend to use. Type: one of “letsencrypt”, “letsencryptstaging”, “cert”, “none” Default: "none" Declared by: <nixpkgs/nixos/modules/services/networking/acme-dns.nix>
