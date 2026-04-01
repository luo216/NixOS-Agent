---
module: services.prometheus.exporters.sql.configuration.jobs.<name>
option_count: 4
source: options.html
---

# services.prometheus.exporters.sql.configuration.jobs.<name>

## services.prometheus.exporters.sql.configuration.jobs.<name>.connections

A list of connection strings of the SQL servers to scrape metrics from Type: list of string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.sql.configuration.jobs.<name>.interval

How often to run this job, specified in Go duration format. Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.sql.configuration.jobs.<name>.queries

SQL queries to run. Type: attribute set of (submodule) Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.sql.configuration.jobs.<name>.startupSql

A list of SQL statements to execute once after making a connection. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
