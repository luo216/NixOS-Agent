---
module: powerManagement.cpufreq
option_count: 2
source: options.html
---

# powerManagement.cpufreq

## powerManagement.cpufreq.max

The maximum frequency the CPU will use. Defaults to the maximum possible. Type: null or (unsigned integer, meaning >=0) Default: null Example: 2200000 Declared by: <nixpkgs/nixos/modules/tasks/cpu-freq.nix>

## powerManagement.cpufreq.min

The minimum frequency the CPU will use. Type: null or (unsigned integer, meaning >=0) Default: null Example: 800000 Declared by: <nixpkgs/nixos/modules/tasks/cpu-freq.nix>
