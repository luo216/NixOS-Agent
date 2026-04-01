---
module: security.acme
option_count: 5
source: options.html
---

# security.acme

## security.acme.acceptTerms

Accept the CA’s terms of service. The default provider is Let’s Encrypt, you can find their ToS at https://letsencrypt.org/repository/. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.certs

Attribute set of certificates to get signed and renewed. Creates acme-${cert}.{service,timer} systemd units for each certificate defined here. Other services can add dependencies to those units if they rely on the certificates being present, or trigger restarts of the service if certificates get renewed. Type: attribute set of (submodule) Default: { } Example: { "example.com" = { webroot = "/var/lib/acme/acme-challenge/"; email = "foo@example.com"; extraDomainNames = [ "www.example.com" "foo.example.com" ]; }; "bar.example.com" = { webroot = "/var/lib/acme/acme-challenge/"; email = "bar@example.com"; }; } Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.defaults

Default values inheritable by all configured certs. You can use this to define options shared by all your certs. These defaults can also be ignored on a per-cert basis using the security.acme.certs.${cert}.inheritDefaults option. Type: submodule Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.maxConcurrentRenewals

Maximum number of concurrent certificate generation or renewal jobs. All other jobs will queue and wait running jobs to finish. Reduces the system load of certificate generation. Set to 0 to allow unlimited number of concurrent job runs." Type: signed integer Default: 5 Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.useRoot

Whether to use the root user when generating certs. This is not recommended for security + compatibility reasons. If a service requires root owned certificates consider following the guide on “Using ACME with services demanding root owned certificates” in the NixOS manual, and only using this as a fallback or for testing. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/acme>
