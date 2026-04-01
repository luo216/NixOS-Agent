---
module: services.kubernetes.apiserver.etcd
option_count: 4
source: options.html
---

# services.kubernetes.apiserver.etcd

## services.kubernetes.apiserver.etcd.caFile

Etcd ca file. Type: null or absolute path Default: config.services.kubernetes.caFile Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/apiserver.nix>

## services.kubernetes.apiserver.etcd.certFile

Etcd cert file. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/apiserver.nix>

## services.kubernetes.apiserver.etcd.keyFile

Etcd key file. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/apiserver.nix>

## services.kubernetes.apiserver.etcd.servers

List of etcd servers. Type: list of string Default: [ "http://127.0.0.1:2379" ] Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/apiserver.nix>
