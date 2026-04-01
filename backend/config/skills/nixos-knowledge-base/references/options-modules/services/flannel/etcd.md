---
module: services.flannel.etcd
option_count: 5
source: options.html
---

# services.flannel.etcd

## services.flannel.etcd.caFile

Etcd certificate authority file Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/flannel.nix>

## services.flannel.etcd.certFile

Etcd cert file Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/flannel.nix>

## services.flannel.etcd.endpoints

Etcd endpoints Type: list of string Default: [ "http://127.0.0.1:2379" ] Declared by: <nixpkgs/nixos/modules/services/networking/flannel.nix>

## services.flannel.etcd.keyFile

Etcd key file Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/flannel.nix>

## services.flannel.etcd.prefix

Etcd key prefix Type: string Default: "/coreos.com/network" Declared by: <nixpkgs/nixos/modules/services/networking/flannel.nix>
