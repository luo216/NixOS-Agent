---
module: services.kubernetes.controllerManager
option_count: 13
source: options.html
---

# services.kubernetes.controllerManager

## services.kubernetes.controllerManager.enable

Whether to enable Kubernetes controller manager. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/controller-manager.nix>

## services.kubernetes.controllerManager.allocateNodeCIDRs

Whether to automatically allocate CIDR ranges for cluster nodes. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/controller-manager.nix>

## services.kubernetes.controllerManager.bindAddress

Kubernetes controller manager listening address. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/controller-manager.nix>

## services.kubernetes.controllerManager.clusterCidr

Kubernetes CIDR Range for Pods in cluster. Type: string Default: config.services.kubernetes.clusterCidr Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/controller-manager.nix>

## services.kubernetes.controllerManager.extraOpts

Kubernetes controller manager extra command line options. Type: strings concatenated with " " Default: "" Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/controller-manager.nix>

## services.kubernetes.controllerManager.featureGates

Attribute set of feature gates. Type: attribute set of boolean Default: config.services.kubernetes.featureGates Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/controller-manager.nix>

## services.kubernetes.controllerManager.leaderElect

Whether to start leader election before executing main loop. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/controller-manager.nix>

## services.kubernetes.controllerManager.rootCaFile

Kubernetes controller manager certificate authority file included in service account’s token secret. Type: null or absolute path Default: config.services.kubernetes.caFile Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/controller-manager.nix>

## services.kubernetes.controllerManager.securePort

Kubernetes controller manager secure listening port. Type: signed integer Default: 10252 Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/controller-manager.nix>

## services.kubernetes.controllerManager.serviceAccountKeyFile

Kubernetes controller manager PEM-encoded private RSA key file used to sign service account tokens Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/controller-manager.nix>

## services.kubernetes.controllerManager.tlsCertFile

Kubernetes controller-manager certificate file. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/controller-manager.nix>

## services.kubernetes.controllerManager.tlsKeyFile

Kubernetes controller-manager private key file. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/controller-manager.nix>

## services.kubernetes.controllerManager.verbosity

Optional glog verbosity level for logging statements. See https://github.com/kubernetes/community/blob/master/contributors/devel/logging.md Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/controller-manager.nix>
