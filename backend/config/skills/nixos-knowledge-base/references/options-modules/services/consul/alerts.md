---
module: services.consul.alerts
option_count: 6
source: options.html
---

# services.consul.alerts

## services.consul.alerts.enable

Whether to enable consul-alerts. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/consul.nix>

## services.consul.alerts.package

The consul-alerts package to use. Type: package Default: pkgs.consul-alerts Declared by: <nixpkgs/nixos/modules/services/networking/consul.nix>

## services.consul.alerts.consulAddr

Consul api listening address Type: string Default: "localhost:8500" Declared by: <nixpkgs/nixos/modules/services/networking/consul.nix>

## services.consul.alerts.listenAddr

Api listening address. Type: string Default: "localhost:9000" Declared by: <nixpkgs/nixos/modules/services/networking/consul.nix>

## services.consul.alerts.watchChecks

Whether to enable check watcher. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/consul.nix>

## services.consul.alerts.watchEvents

Whether to enable event watcher. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/consul.nix>
