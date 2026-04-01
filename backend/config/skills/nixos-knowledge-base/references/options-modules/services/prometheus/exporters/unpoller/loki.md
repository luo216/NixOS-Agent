---
module: services.prometheus.exporters.unpoller.loki
option_count: 7
source: options.html
---

# services.prometheus.exporters.unpoller.loki

## services.prometheus.exporters.unpoller.loki.interval

How often the events are polled and pushed to Loki. Type: string Default: "2m" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.unpoller.loki.pass

Path of a file containing the password for Loki. This file needs to be readable by the unifi-poller user. Type: absolute path Default: "unpoller-influxdb-default.password" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.unpoller.loki.tenant_id

Tenant ID to use in Loki. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.unpoller.loki.timeout

Should be increased in case of timeout errors. Type: string Default: "10s" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.unpoller.loki.url

URL of the Loki host. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.unpoller.loki.user

Username for Loki. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.unpoller.loki.verify_ssl

Verify Loki’s certificate. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
