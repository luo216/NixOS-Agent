---
module: services.kubernetes
option_count: 12
source: options.html
---

# services.kubernetes

## services.kubernetes.package

The kubernetes package to use. Type: package Default: pkgs.kubernetes Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/default.nix>

## services.kubernetes.apiserverAddress

Clusterwide accessible address for the kubernetes apiserver, including protocol and optional port. Type: string Example: "https://kubernetes-apiserver.example.com:6443" Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/default.nix>

## services.kubernetes.caFile

Default kubernetes certificate authority Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/default.nix>

## services.kubernetes.clusterCidr

Kubernetes controller manager and proxy CIDR Range for Pods in cluster. Type: null or string Default: "10.1.0.0/16" Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/default.nix>

## services.kubernetes.dataDir

Kubernetes root directory for managing kubelet files. Type: absolute path Default: "/var/lib/kubernetes" Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/default.nix>

## services.kubernetes.easyCerts

Automatically setup x509 certificates and keys for the entire cluster. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/default.nix>

## services.kubernetes.featureGates

List set of feature gates. Type: attribute set of boolean Default: { } Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/default.nix>

## services.kubernetes.lib

Common functions for the kubernetes modules. Type: attribute set Default: { mkCert = <function, args: {CN, action?, fields?, hosts?, name, privateKeyGroup?, privateKeyOwner?}>; mkKubeConfig = <function>; mkKubeConfigOptions = <function>; } Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/default.nix>

## services.kubernetes.masterAddress

Clusterwide available network address or hostname for the kubernetes master server. Type: string Example: "master.example.com" Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/default.nix>

## services.kubernetes.path

Packages added to the services’ PATH environment variable. Both the bin and sbin subdirectories of each package are added. Type: list of package Default: [ ] Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/default.nix>

## services.kubernetes.roles

Kubernetes role that this machine should take. Master role will enable etcd, apiserver, scheduler, controller manager addon manager, flannel and proxy services. Node role will enable flannel, docker, kubelet and proxy services. Type: list of (one of “master”, “node”) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/default.nix>

## services.kubernetes.secretsPath

Default location for kubernetes secrets. Not a store location. Type: absolute path Default: config.services.kubernetes.dataDir + "/secrets" Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/default.nix>
