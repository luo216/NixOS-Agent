---
module: services.loki
option_count: 8
source: options.html
---

# services.loki

## services.loki.enable

Whether to enable Grafana Loki. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/loki.nix>

## services.loki.package

The grafana-loki package to use. Type: package Default: pkgs.grafana-loki Declared by: <nixpkgs/nixos/modules/services/monitoring/loki.nix>

## services.loki.configFile

Specify a configuration file that Loki should use. Cannot be specified together with services.loki.configuration. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/loki.nix>

## services.loki.configuration

Specify the configuration for Loki in Nix. See documentation of Grafana Loki for all available options. Cannot be specified together with services.loki.configFile. Type: JSON value Default: { } Declared by: <nixpkgs/nixos/modules/services/monitoring/loki.nix>

## services.loki.dataDir

Specify the data directory for Loki. Type: absolute path Default: "/var/lib/loki" Declared by: <nixpkgs/nixos/modules/services/monitoring/loki.nix>

## services.loki.extraFlags

Specify a list of additional command line flags, which get escaped and are then passed to Loki. Type: list of string Default: [ ] Example: [ "--server.http-listen-port=3101" ] Declared by: <nixpkgs/nixos/modules/services/monitoring/loki.nix>

## services.loki.group

Group under which the Loki service runs. Type: string Default: "loki" Declared by: <nixpkgs/nixos/modules/services/monitoring/loki.nix>

## services.loki.user

User under which the Loki service runs. Type: string Default: "loki" Declared by: <nixpkgs/nixos/modules/services/monitoring/loki.nix>
