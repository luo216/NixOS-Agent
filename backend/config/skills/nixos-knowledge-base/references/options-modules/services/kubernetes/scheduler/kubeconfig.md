---
module: services.kubernetes.scheduler.kubeconfig
option_count: 4
source: options.html
---

# services.kubernetes.scheduler.kubeconfig

## services.kubernetes.scheduler.kubeconfig.caFile

Kubernetes scheduler certificate authority file used to connect to kube-apiserver. Type: null or absolute path Default: config.services.kubernetes.caFile Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/scheduler.nix>

## services.kubernetes.scheduler.kubeconfig.certFile

Kubernetes scheduler client certificate file used to connect to kube-apiserver. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/scheduler.nix>

## services.kubernetes.scheduler.kubeconfig.keyFile

Kubernetes scheduler client key file used to connect to kube-apiserver. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/scheduler.nix>

## services.kubernetes.scheduler.kubeconfig.server

Kubernetes scheduler kube-apiserver server address. Type: string Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/scheduler.nix>
