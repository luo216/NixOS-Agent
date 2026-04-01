---
module: services.below
option_count: 2
source: options.html
---

# services.below

## services.below.enable

Whether to enable ‘below’ resource monitor. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/below.nix>

## services.below.cgroupFilterOut

A regexp matching the full paths of cgroups whose data shouldn’t be collected Type: null or string Default: null Example: "user.slice.*" Declared by: <nixpkgs/nixos/modules/services/monitoring/below.nix>
