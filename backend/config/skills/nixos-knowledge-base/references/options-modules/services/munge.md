---
module: services.munge
option_count: 2
source: options.html
---

# services.munge

## services.munge.enable

Whether to enable munge service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/munge.nix>

## services.munge.password

The path to a daemon’s secret key. Type: absolute path Default: "/etc/munge/munge.key" Declared by: <nixpkgs/nixos/modules/services/security/munge.nix>
