---
module: services.victoriametrics
option_count: 10
source: options.html
---

# services.victoriametrics

## services.victoriametrics.enable

Whether to enable VictoriaMetrics in single-node mode. VictoriaMetrics is a fast, cost-effective and scalable monitoring solution and time series database. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/databases/victoriametrics.nix>

## services.victoriametrics.package

The victoriametrics package to use. Type: package Default: pkgs.victoriametrics Declared by: <nixpkgs/nixos/modules/services/databases/victoriametrics.nix>

## services.victoriametrics.basicAuthPasswordFile

File that contains the Basic Auth password used to protect VictoriaMetrics instance by authorization Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/databases/victoriametrics.nix>

## services.victoriametrics.basicAuthUsername

Basic Auth username used to protect VictoriaMetrics instance by authorization Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/databases/victoriametrics.nix>

## services.victoriametrics.checkConfig

Check configuration. If you use credentials stored in external files (environmentFile, etc), they will not be visible and it will report errors, despite a correct configuration. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/databases/victoriametrics.nix>

## services.victoriametrics.extraOptions

Extra options to pass to VictoriaMetrics. See the docs: https://docs.victoriametrics.com/single-server-victoriametrics/#list-of-command-line-flags or victoriametrics -help for more information. Type: list of string Default: [ ] Example: [ "-loggerLevel=WARN" ] Declared by: <nixpkgs/nixos/modules/services/databases/victoriametrics.nix>

## services.victoriametrics.listenAddress

TCP address to listen for incoming http requests. Type: string Default: ":8428" Declared by: <nixpkgs/nixos/modules/services/databases/victoriametrics.nix>

## services.victoriametrics.prometheusConfig

Config for prometheus style metrics. See the docs: https://docs.victoriametrics.com/vmagent/#how-to-collect-metrics-in-prometheus-format for more information. Type: open submodule of (YAML 1.1 value) Default: { } Example: { scrape_configs = [ { job_name = "postgres-exporter"; metrics_path = "/metrics"; static_configs = [ { targets = ["1.2.3.4:9187"]; labels.type = "database"; } ]; } { job_name = "node-exporter"; metrics_path = "/metrics"; static_configs = [ { targets = ["1.2.3.4:9100"]; labels.type = "node"; } { targets = ["5.6.7.8:9100"]; labels.type = "node"; } ]; } ]; } Declared by: <nixpkgs/nixos/modules/services/databases/victoriametrics.nix>

## services.victoriametrics.retentionPeriod

How long to retain samples in storage. The minimum retentionPeriod is 24h or 1d. See also -retentionFilter The following optional suffixes are supported: s (second), h (hour), d (day), w (week), y (year). If suffix isn’t set, then the duration is counted in months (default 1) Type: null or string Default: null Example: "15d" Declared by: <nixpkgs/nixos/modules/services/databases/victoriametrics.nix>

## services.victoriametrics.stateDir

Directory below /var/lib to store VictoriaMetrics metrics data. This directory will be created automatically using systemd’s StateDirectory mechanism. Type: string Default: "victoriametrics" Declared by: <nixpkgs/nixos/modules/services/databases/victoriametrics.nix>
