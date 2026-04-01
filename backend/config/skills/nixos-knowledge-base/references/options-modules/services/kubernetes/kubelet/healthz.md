---
module: services.kubernetes.kubelet.healthz
option_count: 2
source: options.html
---

# services.kubernetes.kubelet.healthz

## services.kubernetes.kubelet.healthz.bind

Kubernetes kubelet healthz listening address. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/kubelet.nix>

## services.kubernetes.kubelet.healthz.port

Kubernetes kubelet healthz port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 10248 Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/kubelet.nix>
