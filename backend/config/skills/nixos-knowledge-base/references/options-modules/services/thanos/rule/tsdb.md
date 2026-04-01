---
module: services.thanos.rule.tsdb
option_count: 2
source: options.html
---

# services.thanos.rule.tsdb

## services.thanos.rule.tsdb.block-duration

Block duration for TSDB block. Defaults to 2h in Thanos when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.rule.tsdb.retention

Block retention time on local disk. Defaults to 48h in Thanos when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>
