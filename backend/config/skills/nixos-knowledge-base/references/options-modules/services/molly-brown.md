---
module: services.molly-brown
option_count: 7
source: options.html
---

# services.molly-brown

## services.molly-brown.enable

Whether to enable Molly-Brown Gemini server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-servers/molly-brown.nix>

## services.molly-brown.certPath

Path to TLS certificate. An ACME certificate and key may be shared with an HTTP server, but only if molly-brown has permissions allowing it to read such keys. As an example: systemd.services.molly-brown.serviceConfig.SupplementaryGroups = [ config.security.acme.certs."example.com".group ]; Type: absolute path Example: "/var/lib/acme/example.com/cert.pem" Declared by: <nixpkgs/nixos/modules/services/web-servers/molly-brown.nix>

## services.molly-brown.docBase

Base directory for Gemini content. Type: absolute path Example: "/var/lib/molly-brown" Declared by: <nixpkgs/nixos/modules/services/web-servers/molly-brown.nix>

## services.molly-brown.hostName

The hostname to respond to requests for. Requests for URLs with other hosts will result in a status 53 (PROXY REQUEST REFUSED) response. Type: string Default: config.networking.hostName Declared by: <nixpkgs/nixos/modules/services/web-servers/molly-brown.nix>

## services.molly-brown.keyPath

Path to TLS key. See CertPath. Type: absolute path Example: "/var/lib/acme/example.com/key.pem" Declared by: <nixpkgs/nixos/modules/services/web-servers/molly-brown.nix>

## services.molly-brown.port

TCP port for molly-brown to bind to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 1965 Declared by: <nixpkgs/nixos/modules/services/web-servers/molly-brown.nix>

## services.molly-brown.settings

molly-brown configuration. Refer to https://tildegit.org/solderpunk/molly-brown/src/branch/master/example.conf for details on supported values. Type: TOML value Default: { } Declared by: <nixpkgs/nixos/modules/services/web-servers/molly-brown.nix>
