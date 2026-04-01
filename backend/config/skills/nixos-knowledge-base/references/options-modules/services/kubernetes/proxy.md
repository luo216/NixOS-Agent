---
module: services.kubernetes.proxy
option_count: 6
source: options.html
---

# services.kubernetes.proxy

## services.kubernetes.proxy.enable

Whether to enable Kubernetes proxy. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/proxy.nix>

## services.kubernetes.proxy.bindAddress

Kubernetes proxy listening address. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/proxy.nix>

## services.kubernetes.proxy.extraOpts

Kubernetes proxy extra command line options. Type: strings concatenated with " " Default: "" Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/proxy.nix>

## services.kubernetes.proxy.featureGates

Attribute set of feature gates. Type: attribute set of boolean Default: config.services.kubernetes.featureGates Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/proxy.nix>

## services.kubernetes.proxy.hostname

Kubernetes proxy hostname override. Type: string Default: config.networking.hostName Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/proxy.nix>

## services.kubernetes.proxy.verbosity

Optional glog verbosity level for logging statements. See https://github.com/kubernetes/community/blob/master/contributors/devel/logging.md Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/proxy.nix>
