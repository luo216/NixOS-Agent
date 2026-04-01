---
module: services.maddy.tls
option_count: 3
source: options.html
---

# services.maddy.tls

## services.maddy.tls.certificates

A list of attribute sets containing paths to TLS certificates and keys. Maddy will use SNI if multiple pairs are selected. Type: list of (submodule) Default: [ ] Example: [{ keyPath = "/etc/ssl/mx1.example.org.key"; certPath = "/etc/ssl/mx1.example.org.crt"; }] Declared by: <nixpkgs/nixos/modules/services/mail/maddy.nix>

## services.maddy.tls.extraConfig

Arguments for the specified certificate loader. In case the tls loader is set, the defaults are considered secure and there is no need to change anything in most cases. For available options see upstream manual. For ACME configuration, see following page. Type: null or strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/mail/maddy.nix>

## services.maddy.tls.loader

TLS certificates are obtained by modules called “certificate loaders”. The file loader module reads certificates from files specified by the certificates option. Alternatively the acme module can be used to automatically obtain certificates using the ACME protocol. Module configuration is done via the tls.extraConfig option. Secrets such as API keys or passwords should not be supplied in plaintext. Instead the secrets option can be used to read secrets at runtime as environment variables. Secrets can be referenced with {env:VAR}. Type: null or one of “off”, “file”, “acme” Default: "off" Declared by: <nixpkgs/nixos/modules/services/mail/maddy.nix>
