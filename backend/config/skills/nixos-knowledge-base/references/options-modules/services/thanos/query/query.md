---
module: services.thanos.query.query
option_count: 6
source: options.html
---

# services.thanos.query.query

## services.thanos.query.query.auto-downsampling

Enable automatic adjustment (step / 5) to what source of data should be used in store gateways if no max_source_resolution param is specified. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.query.query.default-evaluation-interval

Set default evaluation interval for sub queries. Defaults to 1m in Thanos when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.query.query.max-concurrent

Maximum number of queries processed concurrently by query node. Defaults to 20 in Thanos when set to null. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.query.query.partial-response

Enable partial response for queries if no partial_response param is specified. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.query.query.replica-labels

Labels to treat as a replica indicator along which data is deduplicated. Still you will be able to query without deduplication using ‘dedup=false’ parameter. Data includes time series, recording rules, and alerting rules. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.query.query.timeout

Maximum time to process query by query node. Defaults to 2m in Thanos when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>
