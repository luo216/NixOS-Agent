---
module: services.warpgate.settings.http
option_count: 8
source: options.html
---

# services.warpgate.settings.http

## services.warpgate.settings.http.certificate

Path to HTTPS listener certificate. Type: string Default: "/var/lib/warpgate/tls.certificate.pem" Declared by: <nixpkgs/nixos/modules/services/security/warpgate.nix>

## services.warpgate.settings.http.cookie_max_age

How long until logged in cookie expires. Type: string Default: "1day" Declared by: <nixpkgs/nixos/modules/services/security/warpgate.nix>

## services.warpgate.settings.http.external_port

The HTTP listener is reachable via this port externally. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/security/warpgate.nix>

## services.warpgate.settings.http.key

Path to HTTPS listener private key. Type: string Default: "/var/lib/warpgate/tls.key.pem" Declared by: <nixpkgs/nixos/modules/services/security/warpgate.nix>

## services.warpgate.settings.http.listen

Listen endpoint of HTTP listener. Type: string Default: "[::]:8888" Declared by: <nixpkgs/nixos/modules/services/security/warpgate.nix>

## services.warpgate.settings.http.session_max_age

How long until a logged in session expires. Type: string Default: "30m" Declared by: <nixpkgs/nixos/modules/services/security/warpgate.nix>

## services.warpgate.settings.http.sni_certificates

Certificates for additional domains. Type: list of (open submodule of (YAML 1.1 value)) Default: [ ] Example: [ { certificate = "/var/lib/warpgate/example.tld.pem"; key = "/var/lib/warpgate/example.tld.key.pem"; } { ... } ] Declared by: <nixpkgs/nixos/modules/services/security/warpgate.nix>

## services.warpgate.settings.http.trust_x_forwarded_headers

Trust X-Forwarded-* headers. Required when being reverse proxied. See Running behind a reverse proxy. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/warpgate.nix>
