---
module: services.thanos.sidecar.prometheus
option_count: 1
source: options.html
---

# services.thanos.sidecar.prometheus

## services.thanos.sidecar.prometheus.url

URL at which to reach Prometheus’s API. For better performance use local network. Defaults to http://localhost:9090 in Thanos when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>
