---
module: services.rkvm.client.settings
option_count: 3
source: options.html
---

# services.rkvm.client.settings

## services.rkvm.client.settings.certificate

TLS ceritficate path. Note This should be generated with rkvm-certificate-gen. Type: absolute path Default: "/etc/rkvm/certificate.pem" Declared by: <nixpkgs/nixos/modules/services/misc/rkvm.nix>

## services.rkvm.client.settings.password

Shared secret token to authenticate the client. Make sure this matches your server’s config. Type: string Declared by: <nixpkgs/nixos/modules/services/misc/rkvm.nix>

## services.rkvm.client.settings.server

An RKVM server’s internet socket address, either IPv4 or IPv6. Type: string Example: "192.168.0.123:5258" Declared by: <nixpkgs/nixos/modules/services/misc/rkvm.nix>
