---
module: services.kubernetes.flannel
option_count: 2
source: options.html
---

# services.kubernetes.flannel

## services.kubernetes.flannel.enable

Whether to enable flannel networking. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/flannel.nix>

## services.kubernetes.flannel.openFirewallPorts

Whether to open the Flannel UDP ports in the firewall on all interfaces. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/flannel.nix>
