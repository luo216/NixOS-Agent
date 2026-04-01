---
module: services.agate
option_count: 9
source: options.html
---

# services.agate

## services.agate.enable

Whether to enable Agate Server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-servers/agate.nix>

## services.agate.package

The agate package to use. Type: package Default: pkgs.agate Declared by: <nixpkgs/nixos/modules/services/web-servers/agate.nix>

## services.agate.addresses

Addresses to listen on, IP:PORT, if you haven’t disabled forwarding only set IPv4. Type: list of string Default: [ "0.0.0.0:1965" ] Declared by: <nixpkgs/nixos/modules/services/web-servers/agate.nix>

## services.agate.certificatesDir

Root of the certificate directory. Type: absolute path Default: "/var/lib/agate/certificates" Declared by: <nixpkgs/nixos/modules/services/web-servers/agate.nix>

## services.agate.contentDir

Root of the content directory. Type: absolute path Default: "/var/lib/agate/content" Declared by: <nixpkgs/nixos/modules/services/web-servers/agate.nix>

## services.agate.extraArgs

Extra arguments to use running agate. Type: list of string Default: [ "" ] Example: [ "--log-ip" ] Declared by: <nixpkgs/nixos/modules/services/web-servers/agate.nix>

## services.agate.hostnames

Domain name of this Gemini server, enables checking hostname and port in requests. (multiple occurrences means basic vhosts) Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-servers/agate.nix>

## services.agate.language

RFC 4646 Language code for text/gemini documents. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-servers/agate.nix>

## services.agate.onlyTls_1_3

Only use TLSv1.3 (default also allows TLSv1.2). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-servers/agate.nix>
