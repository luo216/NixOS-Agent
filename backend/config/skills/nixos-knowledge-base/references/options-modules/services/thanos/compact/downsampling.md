---
module: services.thanos.compact.downsampling
option_count: 1
source: options.html
---

# services.thanos.compact.downsampling

## services.thanos.compact.downsampling.disable

Disables downsampling. This is not recommended as querying long time ranges without non-downsampled data is not efficient and useful e.g it is not possible to render all samples for a human eye anyway Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>
