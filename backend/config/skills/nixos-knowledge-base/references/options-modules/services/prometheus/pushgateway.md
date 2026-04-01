---
module: services.prometheus.pushgateway
option_count: 5
source: options.html
---

# services.prometheus.pushgateway

## services.prometheus.pushgateway.enable

Whether to enable Prometheus Pushgateway. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/pushgateway.nix>

## services.prometheus.pushgateway.package

The prometheus-pushgateway package to use. Type: package Default: pkgs.prometheus-pushgateway Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/pushgateway.nix>

## services.prometheus.pushgateway.extraFlags

Extra commandline options when launching the Pushgateway. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/pushgateway.nix>

## services.prometheus.pushgateway.persistMetrics

Whether to persist metrics to a file. When enabled metrics will be saved to a file called metrics in the directory /var/lib/pushgateway. The directory below /var/lib can be set using services.prometheus.pushgateway.stateDir. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/pushgateway.nix>

## services.prometheus.pushgateway.stateDir

Directory below /var/lib to store metrics. This directory will be created automatically using systemd’s StateDirectory mechanism when services.prometheus.pushgateway.persistMetrics is enabled. Type: string Default: "pushgateway" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/pushgateway.nix>
