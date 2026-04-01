---
module: services.k3s.gracefulNodeShutdown
option_count: 3
source: options.html
---

# services.k3s.gracefulNodeShutdown

## services.k3s.gracefulNodeShutdown.enable

Whether to enable graceful node shutdowns where the kubelet attempts to detect node system shutdown and terminates pods running on the node. See the documentation for further information. . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.gracefulNodeShutdown.shutdownGracePeriod

Specifies the total duration that the node should delay the shutdown by. This is the total grace period for pod termination for both regular and critical pods. Type: non-empty string Default: "30s" Example: "1m30s" Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.gracefulNodeShutdown.shutdownGracePeriodCriticalPods

Specifies the duration used to terminate critical pods during a node shutdown. This should be less than shutdownGracePeriod. Type: non-empty string Default: "10s" Example: "15s" Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>
