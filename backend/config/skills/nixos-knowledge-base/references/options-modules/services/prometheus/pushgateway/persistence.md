---
module: services.prometheus.pushgateway.persistence
option_count: 1
source: options.html
---

# services.prometheus.pushgateway.persistence

## services.prometheus.pushgateway.persistence.interval

The minimum interval at which to write out the persistence file. null will default to 5m. Type: null or string Default: null Example: "10m" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/pushgateway.nix>
