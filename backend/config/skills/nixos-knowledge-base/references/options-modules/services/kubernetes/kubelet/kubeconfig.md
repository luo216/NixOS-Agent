---
module: services.kubernetes.kubelet.kubeconfig
option_count: 4
source: options.html
---

# services.kubernetes.kubelet.kubeconfig

## services.kubernetes.kubelet.kubeconfig.caFile

Kubelet certificate authority file used to connect to kube-apiserver. Type: null or absolute path Default: config.services.kubernetes.caFile Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/kubelet.nix>

## services.kubernetes.kubelet.kubeconfig.certFile

Kubelet client certificate file used to connect to kube-apiserver. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/kubelet.nix>

## services.kubernetes.kubelet.kubeconfig.keyFile

Kubelet client key file used to connect to kube-apiserver. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/kubelet.nix>

## services.kubernetes.kubelet.kubeconfig.server

Kubelet kube-apiserver server address. Type: string Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/kubelet.nix>
