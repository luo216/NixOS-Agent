---
module: services.kubernetes.kubeconfig
option_count: 4
source: options.html
---

# services.kubernetes.kubeconfig

## services.kubernetes.kubeconfig.caFile

Default kubeconfig certificate authority file used to connect to kube-apiserver. Type: null or absolute path Default: config.services.kubernetes.caFile Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/default.nix>

## services.kubernetes.kubeconfig.certFile

Default kubeconfig client certificate file used to connect to kube-apiserver. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/default.nix>

## services.kubernetes.kubeconfig.keyFile

Default kubeconfig client key file used to connect to kube-apiserver. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/default.nix>

## services.kubernetes.kubeconfig.server

Default kubeconfig kube-apiserver server address. Type: string Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/default.nix>
