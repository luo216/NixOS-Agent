---
module: services.thanos.rule.alert
option_count: 2
source: options.html
---

# services.thanos.rule.alert

## services.thanos.rule.alert.label-drop

Labels by name to drop before sending to alertmanager. This allows alert to be deduplicated on replica label. Similar Prometheus alert relabelling Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.rule.alert.query-url

The external Thanos Query URL that would be set in all alerts ‘Source’ field. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>
