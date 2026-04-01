---
module: services.prometheus.exporters.sql.configuration.jobs.<name>.queries.<name>
option_count: 4
source: options.html
---

# services.prometheus.exporters.sql.configuration.jobs.<name>.queries.<name>

## services.prometheus.exporters.sql.configuration.jobs.<name>.queries.<name>.help

A human-readable description of this metric. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.sql.configuration.jobs.<name>.queries.<name>.labels

A set of columns that will be used as Prometheus labels. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.sql.configuration.jobs.<name>.queries.<name>.query

The SQL query to run. Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.sql.configuration.jobs.<name>.queries.<name>.values

A set of columns that will be used as values of this metric. Type: list of string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
