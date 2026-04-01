---
module: services.below.collect
option_count: 3
source: options.html
---

# services.below.collect

## services.below.collect.diskStats

Whether to enable dist_stat collection. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/monitoring/below.nix>

## services.below.collect.exitStats

Whether to enable eBPF-based exitstats. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/monitoring/below.nix>

## services.below.collect.ioStats

Whether to enable io.stat collection for cgroups. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/below.nix>
