---
module: services.kubernetes.kubelet.cni
option_count: 3
source: options.html
---

# services.kubernetes.kubelet.cni

## services.kubernetes.kubelet.cni.packages

List of network plugin packages to install. Type: list of package Default: [ ] Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/kubelet.nix>

## services.kubernetes.kubelet.cni.config

Kubernetes CNI configuration. Type: list of (attribute set) Default: [ ] Example: [{ "cniVersion": "0.3.1", "name": "mynet", "type": "bridge", "bridge": "cni0", "isGateway": true, "ipMasq": true, "ipam": { "type": "host-local", "subnet": "10.22.0.0/16", "routes": [ { "dst": "0.0.0.0/0" } ] } } { "cniVersion": "0.3.1", "type": "loopback" }] Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/kubelet.nix>

## services.kubernetes.kubelet.cni.configDir

Path to Kubernetes CNI configuration directory. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/kubelet.nix>
