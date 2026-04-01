---
module: services.skydns.etcd
option_count: 4
source: options.html
---

# services.skydns.etcd

## services.skydns.etcd.caCert

Skydns path of TLS certificate authority public key. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/skydns.nix>

## services.skydns.etcd.machines

Skydns list of etcd endpoints to connect to. Type: list of string Default: [ "http://127.0.0.1:2379" ] Declared by: <nixpkgs/nixos/modules/services/networking/skydns.nix>

## services.skydns.etcd.tlsKey

Skydns path of TLS client certificate - private key. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/skydns.nix>

## services.skydns.etcd.tlsPem

Skydns path of TLS client certificate - public key. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/skydns.nix>
