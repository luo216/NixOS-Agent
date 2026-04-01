---
module: services.prometheus.globalConfig
option_count: 5
source: options.html
---

# services.prometheus.globalConfig

## services.prometheus.globalConfig.evaluation_interval

How frequently to evaluate rules by default. Defaults to 1m in prometheus when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.globalConfig.external_labels

The labels to add to any time series or alerts when communicating with external systems (federation, remote storage, Alertmanager). Type: null or (attribute set of string) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.globalConfig.query_log_file

Path to the file prometheus should write its query log to. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.globalConfig.scrape_interval

How frequently to scrape targets by default. Defaults to 1m in prometheus when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.globalConfig.scrape_timeout

How long until a scrape request times out. Defaults to 10s in prometheus when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>
