---
module: services.thanos.store.store.limits
option_count: 1
source: options.html
---

# services.thanos.store.store.limits

## services.thanos.store.store.limits.request-samples

The maximum samples allowed for a single Series request. The Series call fails if this limit is exceeded. 0 means no limit. NOTE: For efficiency the limit is internally implemented as ‘chunks limit’ considering each chunk contains a maximum of 120 samples. Defaults to 0 in Thanos when set to null. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>
