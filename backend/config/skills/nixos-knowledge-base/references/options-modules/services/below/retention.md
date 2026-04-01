---
module: services.below.retention
option_count: 2
source: options.html
---

# services.below.retention

## services.below.retention.size

Size limit for below’s data, in bytes. Data is deleted oldest-first, in 24h ‘shards’. Note The size limit may be exceeded by at most the size of the active shard, as: the active shard cannot be deleted; the size limit is only enforced when a new shard is created. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/below.nix>

## services.below.retention.time

Retention time, in seconds. Note As data is stored in 24 hour shards which are discarded as a whole, only data expired by 24h (or more) is guaranteed to be discarded. Note If retention.size is set, data may be discarded earlier than the specified time. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/below.nix>
