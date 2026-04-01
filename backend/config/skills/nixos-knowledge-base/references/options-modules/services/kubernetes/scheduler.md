---
module: services.kubernetes.scheduler
option_count: 7
source: options.html
---

# services.kubernetes.scheduler

## services.kubernetes.scheduler.enable

Whether to enable Kubernetes scheduler. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/scheduler.nix>

## services.kubernetes.scheduler.address

Kubernetes scheduler listening address. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/scheduler.nix>

## services.kubernetes.scheduler.extraOpts

Kubernetes scheduler extra command line options. Type: strings concatenated with " " Default: "" Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/scheduler.nix>

## services.kubernetes.scheduler.featureGates

Attribute set of feature gates. Type: attribute set of boolean Default: config.services.kubernetes.featureGates Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/scheduler.nix>

## services.kubernetes.scheduler.leaderElect

Whether to start leader election before executing main loop. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/scheduler.nix>

## services.kubernetes.scheduler.port

Kubernetes scheduler listening port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 10251 Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/scheduler.nix>

## services.kubernetes.scheduler.verbosity

Optional glog verbosity level for logging statements. See https://github.com/kubernetes/community/blob/master/contributors/devel/logging.md Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/scheduler.nix>
