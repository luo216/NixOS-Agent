---
module: services.thanos.rule.alertmanagers
option_count: 2
source: options.html
---

# services.thanos.rule.alertmanagers

## services.thanos.rule.alertmanagers.send-timeout

Timeout for sending alerts to alertmanager. Defaults to 10s in Thanos when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.rule.alertmanagers.urls

Alertmanager replica URLs to push firing alerts. Ruler claims success if push to at least one alertmanager from discovered succeeds. The scheme may be prefixed with dns+ or dnssrv+ to detect Alertmanager IPs through respective DNS lookups. The port defaults to 9093 or the SRV record’s value. The URL path is used as a prefix for the regular Alertmanager API path. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>
