---
module: services.thanos.receive.tsdb
option_count: 1
source: options.html
---

# services.thanos.receive.tsdb

## services.thanos.receive.tsdb.retention

How long to retain raw samples on local storage. 0d - disables this retention Defaults to 15d in Thanos when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>
