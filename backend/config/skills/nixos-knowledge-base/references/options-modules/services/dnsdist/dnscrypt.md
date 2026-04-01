---
module: services.dnsdist.dnscrypt
option_count: 6
source: options.html
---

# services.dnsdist.dnscrypt

## services.dnsdist.dnscrypt.enable

Whether to enable a DNSCrypt endpoint to dnsdist. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/dnsdist.nix>

## services.dnsdist.dnscrypt.certLifetime

The lifetime (in minutes) of the resolver certificate. This will be automatically rotated before expiration. Type: positive integer, meaning >0 Default: 15 Declared by: <nixpkgs/nixos/modules/services/networking/dnsdist.nix>

## services.dnsdist.dnscrypt.listenAddress

Listen IP address of the endpoint Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/networking/dnsdist.nix>

## services.dnsdist.dnscrypt.listenPort

Listen port of the endpoint Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 443 Declared by: <nixpkgs/nixos/modules/services/networking/dnsdist.nix>

## services.dnsdist.dnscrypt.providerKey

The filepath to the provider secret key. If not given a new provider key pair will be generated in /var/lib/dnsdist on the first run. Note The file must be readable by the dnsdist user/group. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/dnsdist.nix>

## services.dnsdist.dnscrypt.providerName

The name that will be given to this DNSCrypt resolver. Note The provider name must start with 2.dnscrypt-cert.. Type: string Default: 2.dnscrypt-cert.${config.networking.hostName} Example: "2.dnscrypt-cert.myresolver" Declared by: <nixpkgs/nixos/modules/services/networking/dnsdist.nix>
