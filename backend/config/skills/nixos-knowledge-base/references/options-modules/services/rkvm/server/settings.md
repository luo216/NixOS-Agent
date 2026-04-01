---
module: services.rkvm.server.settings
option_count: 5
source: options.html
---

# services.rkvm.server.settings

## services.rkvm.server.settings.certificate

TLS certificate path. Note This should be generated with rkvm-certificate-gen. Type: absolute path Default: "/etc/rkvm/certificate.pem" Declared by: <nixpkgs/nixos/modules/services/misc/rkvm.nix>

## services.rkvm.server.settings.key

TLS key path. Note This should be generated with rkvm-certificate-gen. Type: absolute path Default: "/etc/rkvm/key.pem" Declared by: <nixpkgs/nixos/modules/services/misc/rkvm.nix>

## services.rkvm.server.settings.listen

An internet socket address to listen on, either IPv4 or IPv6. Type: string Default: "0.0.0.0:5258" Declared by: <nixpkgs/nixos/modules/services/misc/rkvm.nix>

## services.rkvm.server.settings.password

Shared secret token to authenticate the client. Make sure this matches your client’s config. Type: string Declared by: <nixpkgs/nixos/modules/services/misc/rkvm.nix>

## services.rkvm.server.settings.switch-keys

A key list specifying a host switch combination. A list of key names is available in https://github.com/htrefil/rkvm/blob/master/switch-keys.md. Type: list of string Default: [ "left-alt" "left-ctrl" ] Declared by: <nixpkgs/nixos/modules/services/misc/rkvm.nix>
