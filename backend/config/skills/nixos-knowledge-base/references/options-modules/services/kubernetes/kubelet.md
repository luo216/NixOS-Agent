---
module: services.kubernetes.kubelet
option_count: 20
source: options.html
---

# services.kubernetes.kubelet

## services.kubernetes.kubelet.enable

Whether to enable Kubernetes kubelet. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/kubelet.nix>

## services.kubernetes.kubelet.address

Kubernetes kubelet info server listening address. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/kubelet.nix>

## services.kubernetes.kubelet.clientCaFile

Kubernetes apiserver CA file for client authentication. Type: null or absolute path Default: config.services.kubernetes.caFile Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/kubelet.nix>

## services.kubernetes.kubelet.clusterDns

Use alternative DNS. Type: list of string Default: [ "10.1.0.1" ] Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/kubelet.nix>

## services.kubernetes.kubelet.clusterDomain

Use alternative domain. Type: string Default: config.services.kubernetes.addons.dns.clusterDomain Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/kubelet.nix>

## services.kubernetes.kubelet.containerRuntimeEndpoint

Endpoint at which to find the container runtime api interface/socket Type: string Default: "unix:///run/containerd/containerd.sock" Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/kubelet.nix>

## services.kubernetes.kubelet.extraConfig

Kubernetes kubelet extra configuration file entries. See also Set Kubelet Parameters Via A Configuration File and Kubelet Configuration. Type: attribute set of (JSON value) Default: { } Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/kubelet.nix>

## services.kubernetes.kubelet.extraOpts

Kubernetes kubelet extra command line options. Type: strings concatenated with " " Default: "" Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/kubelet.nix>

## services.kubernetes.kubelet.featureGates

Attribute set of feature gate Type: attribute set of boolean Default: config.services.kubernetes.featureGates Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/kubelet.nix>

## services.kubernetes.kubelet.hostname

Kubernetes kubelet hostname override. Type: string Default: config.networking.fqdnOrHostName Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/kubelet.nix>

## services.kubernetes.kubelet.manifests

List of manifests to bootstrap with kubelet (only pods can be created as manifest entry) Type: attribute set of (attribute set) Default: { } Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/kubelet.nix>

## services.kubernetes.kubelet.nodeIp

IP address of the node. If set, kubelet will use this IP address for the node. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/kubelet.nix>

## services.kubernetes.kubelet.port

Kubernetes kubelet info server listening port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 10250 Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/kubelet.nix>

## services.kubernetes.kubelet.registerNode

Whether to auto register kubelet with API server. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/kubelet.nix>

## services.kubernetes.kubelet.seedDockerImages

List of docker images to preload on system Type: list of package Default: [ ] Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/kubelet.nix>

## services.kubernetes.kubelet.taints

Node taints (https://kubernetes.io/docs/concepts/configuration/assign-pod-node/). Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/kubelet.nix>

## services.kubernetes.kubelet.tlsCertFile

File containing x509 Certificate for HTTPS. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/kubelet.nix>

## services.kubernetes.kubelet.tlsKeyFile

File containing x509 private key matching tlsCertFile. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/kubelet.nix>

## services.kubernetes.kubelet.unschedulable

Whether to set node taint to unschedulable=true as it is the case of node that has only master role. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/kubelet.nix>

## services.kubernetes.kubelet.verbosity

Optional glog verbosity level for logging statements. See https://github.com/kubernetes/community/blob/master/contributors/devel/logging.md Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/kubelet.nix>
