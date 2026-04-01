---
module: services.thanos.rule.query
option_count: 4
source: options.html
---

# services.thanos.rule.query

## services.thanos.rule.query.addresses

Addresses of statically configured query API servers. The scheme may be prefixed with dns+ or dnssrv+ to detect query API servers through respective DNS lookups. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.rule.query.sd-dns-interval

Interval between DNS resolutions. Defaults to 30s in Thanos when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.rule.query.sd-files

Path to file that contain addresses of query peers. The path can be a glob pattern. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.rule.query.sd-interval

Refresh interval to re-read file SD files. (used as a fallback) Defaults to 5m in Thanos when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>
