---
module: services.prometheus.pushgateway.log
option_count: 2
source: options.html
---

# services.prometheus.pushgateway.log

## services.prometheus.pushgateway.log.format

Set the log target and format. null will default to logger:stderr. Type: null or string Default: null Example: "logger:syslog?appname=bob&local=7" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/pushgateway.nix>

## services.prometheus.pushgateway.log.level

Only log messages with the given severity or above. null will default to info. Type: null or one of “debug”, “info”, “warn”, “error”, “fatal” Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/pushgateway.nix>
