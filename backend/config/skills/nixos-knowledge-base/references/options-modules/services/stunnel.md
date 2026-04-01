---
module: services.stunnel
option_count: 8
source: options.html
---

# services.stunnel

## services.stunnel.enable

Whether to enable the stunnel TLS tunneling service. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/stunnel.nix>

## services.stunnel.enableInsecureSSLv3

Enable support for the insecure SSLv3 protocol. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/stunnel.nix>

## services.stunnel.clients

Define the client configurations. By default, verifyChain and OCSPaia are enabled and CAFile is set to security.pki.caBundle. See “SERVICE-LEVEL OPTIONS” in stunnel(8). Type: attribute set of attribute set of (null or boolean or signed integer or string) Default: { } Example: { foobar = { accept = "0.0.0.0:8080"; connect = "nixos.org:443"; verifyChain = false; }; } Declared by: <nixpkgs/nixos/modules/services/networking/stunnel.nix>

## services.stunnel.fipsMode

Enable FIPS 140-2 mode required for compliance. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/stunnel.nix>

## services.stunnel.group

The group under which stunnel runs. Type: null or string Default: "nogroup" Declared by: <nixpkgs/nixos/modules/services/networking/stunnel.nix>

## services.stunnel.logLevel

Verbosity of stunnel output. Type: one of “emerg”, “alert”, “crit”, “err”, “warning”, “notice”, “info”, “debug” Default: "info" Declared by: <nixpkgs/nixos/modules/services/networking/stunnel.nix>

## services.stunnel.servers

Define the server configurations. See “SERVICE-LEVEL OPTIONS” in stunnel(8). Type: attribute set of attribute set of (null or boolean or signed integer or string) Default: { } Example: { fancyWebserver = { accept = 443; cert = "/path/to/pem/file"; connect = 8080; }; } Declared by: <nixpkgs/nixos/modules/services/networking/stunnel.nix>

## services.stunnel.user

The user under which stunnel runs. Type: null or string Default: "nobody" Declared by: <nixpkgs/nixos/modules/services/networking/stunnel.nix>
