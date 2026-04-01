---
module: services.kubernetes.kubelet.taints.<name>
option_count: 3
source: options.html
---

# services.kubernetes.kubelet.taints.<name>

## services.kubernetes.kubelet.taints.<name>.effect

Effect of taint. Type: one of “NoSchedule”, “PreferNoSchedule”, “NoExecute” Example: "NoSchedule" Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/kubelet.nix>

## services.kubernetes.kubelet.taints.<name>.key

Key of taint. Type: string Default: Name of this submodule. Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/kubelet.nix>

## services.kubernetes.kubelet.taints.<name>.value

Value of taint. Type: string Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/kubelet.nix>
