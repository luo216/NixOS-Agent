---
module: services.thanos.query.store
option_count: 5
source: options.html
---

# services.thanos.query.store

## services.thanos.query.store.response-timeout

If a Store doesn’t send any data in this specified duration then a Store will be ignored and partial data will be returned if it’s enabled. 0 disables timeout. Defaults to 0ms in Thanos when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.query.store.sd-dns-interval

Interval between DNS resolutions. Defaults to 30s in Thanos when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.query.store.sd-files

Path to files that contain addresses of store API servers. The path can be a glob pattern. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.query.store.sd-interval

Refresh interval to re-read file SD files. It is used as a resync fallback. Defaults to 5m in Thanos when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.query.store.unhealthy-timeout

Timeout before an unhealthy store is cleaned from the store UI page. Defaults to 5m in Thanos when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>
