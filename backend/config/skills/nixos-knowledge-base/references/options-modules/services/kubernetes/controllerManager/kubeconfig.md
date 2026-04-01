---
module: services.kubernetes.controllerManager.kubeconfig
option_count: 4
source: options.html
---

# services.kubernetes.controllerManager.kubeconfig

## services.kubernetes.controllerManager.kubeconfig.caFile

Kubernetes controller manager certificate authority file used to connect to kube-apiserver. Type: null or absolute path Default: config.services.kubernetes.caFile Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/controller-manager.nix>

## services.kubernetes.controllerManager.kubeconfig.certFile

Kubernetes controller manager client certificate file used to connect to kube-apiserver. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/controller-manager.nix>

## services.kubernetes.controllerManager.kubeconfig.keyFile

Kubernetes controller manager client key file used to connect to kube-apiserver. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/controller-manager.nix>

## services.kubernetes.controllerManager.kubeconfig.server

Kubernetes controller manager kube-apiserver server address. Type: string Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/controller-manager.nix>
