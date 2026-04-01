---
module: services.prometheus.remoteWrite.*.queue_config
option_count: 7
source: options.html
---

# services.prometheus.remoteWrite.*.queue_config

## services.prometheus.remoteWrite.*.queue_config.batch_send_deadline

Maximum time a sample will wait in buffer. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.remoteWrite.*.queue_config.capacity

Number of samples to buffer per shard before we block reading of more samples from the WAL. It is recommended to have enough capacity in each shard to buffer several requests to keep throughput up while processing occasional slow remote requests. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.remoteWrite.*.queue_config.max_backoff

Maximum retry delay. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.remoteWrite.*.queue_config.max_samples_per_send

Maximum number of samples per send. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.remoteWrite.*.queue_config.max_shards

Maximum number of shards, i.e. amount of concurrency. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.remoteWrite.*.queue_config.min_backoff

Initial retry delay. Gets doubled for every retry. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.remoteWrite.*.queue_config.min_shards

Minimum number of shards, i.e. amount of concurrency. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>
