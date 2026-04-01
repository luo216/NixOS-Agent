---
module: services.kubernetes.proxy.kubeconfig
option_count: 4
source: options.html
---

# services.kubernetes.proxy.kubeconfig

## services.kubernetes.proxy.kubeconfig.caFile

Kubernetes proxy certificate authority file used to connect to kube-apiserver. Type: null or absolute path Default: config.services.kubernetes.caFile Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/proxy.nix>

## services.kubernetes.proxy.kubeconfig.certFile

Kubernetes proxy client certificate file used to connect to kube-apiserver. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/proxy.nix>

## services.kubernetes.proxy.kubeconfig.keyFile

Kubernetes proxy client key file used to connect to kube-apiserver. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/proxy.nix>

## services.kubernetes.proxy.kubeconfig.server

Kubernetes proxy kube-apiserver server address. Type: string Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/proxy.nix>
