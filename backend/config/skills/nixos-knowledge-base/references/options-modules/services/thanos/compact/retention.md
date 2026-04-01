---
module: services.thanos.compact.retention
option_count: 3
source: options.html
---

# services.thanos.compact.retention

## services.thanos.compact.retention.resolution-1h

How long to retain samples of resolution 2 (1 hour) in bucket. 0d - disables this retention Defaults to 0d in Thanos when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.compact.retention.resolution-5m

How long to retain samples of resolution 1 (5 minutes) in bucket. 0d - disables this retention Defaults to 0d in Thanos when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.compact.retention.resolution-raw

How long to retain raw samples in bucket. 0d - disables this retention Defaults to 0d in Thanos when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>
