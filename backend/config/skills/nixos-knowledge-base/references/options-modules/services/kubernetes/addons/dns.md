---
module: services.kubernetes.addons.dns
option_count: 7
source: options.html
---

# services.kubernetes.addons.dns

## services.kubernetes.addons.dns.enable

Whether to enable kubernetes dns addon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/addons/dns.nix>

## services.kubernetes.addons.dns.clusterDomain

Dns cluster domain Type: string Default: "cluster.local" Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/addons/dns.nix>

## services.kubernetes.addons.dns.clusterIp

Dns addon clusterIP Type: string Default: The x.y.z.254 IP of config.services.kubernetes.apiserver.serviceClusterIpRange. Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/addons/dns.nix>

## services.kubernetes.addons.dns.coredns

Docker image to seed for the CoreDNS container. Type: attribute set Default: { finalImageTag = "1.10.1"; imageDigest = "sha256:a0ead06651cf580044aeb0a0feba63591858fb2e43ade8c9dea45a6a89ae7e5e"; imageName = "coredns/coredns"; sha256 = "0wg696920smmal7552a2zdhfncndn5kfammfa8bk8l7dz9bhk0y1"; } Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/addons/dns.nix>

## services.kubernetes.addons.dns.corefile

Custom coredns corefile configuration. See: https://coredns.io/manual/toc/#configuration. Type: string Default: '' .:10053 { errors health :10054 kubernetes ${config.services.kubernetes.addons.dns.clusterDomain} in-addr.arpa ip6.arpa { pods insecure fallthrough in-addr.arpa ip6.arpa } prometheus :10055 forward . /etc/resolv.conf cache 30 loop reload loadbalance } '' Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/addons/dns.nix>

## services.kubernetes.addons.dns.reconcileMode

Controls the addon manager reconciliation mode for the DNS addon. Setting reconcile mode to EnsureExists makes it possible to tailor DNS behavior by editing the coredns ConfigMap. See: https://github.com/kubernetes/kubernetes/blob/master/cluster/addons/addon-manager/README.md. Type: one of “Reconcile”, “EnsureExists” Default: "Reconcile" Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/addons/dns.nix>

## services.kubernetes.addons.dns.replicas

Number of DNS pod replicas to deploy in the cluster. Type: signed integer Default: 2 Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/addons/dns.nix>
