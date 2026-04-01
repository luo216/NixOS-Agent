---
module: services.prometheus.exporters.nvidia-gpu
option_count: 9
source: options.html
---

# services.prometheus.exporters.nvidia-gpu

## services.prometheus.exporters.nvidia-gpu.enable

Whether to enable the prometheus nvidia-gpu exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.nvidia-gpu.extraFlags

Extra commandline options to pass to the nvidia-gpu exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.nvidia-gpu.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.nvidia-gpu.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9835" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.nvidia-gpu.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.nvidia-gpu.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9835 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.nvidia-gpu.group

Group under which the nvidia-gpu exporter shall be run. Type: string Default: "nvidia-gpu-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.nvidia-gpu.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.nvidia-gpu.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.nvidia-gpu.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9835 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.nvidia-gpu.user

User name under which the nvidia-gpu exporter shall be run. Type: string Default: "nvidia-gpu-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
