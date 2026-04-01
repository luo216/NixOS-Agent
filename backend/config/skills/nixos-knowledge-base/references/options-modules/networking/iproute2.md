---
module: networking.iproute2
option_count: 2
source: options.html
---

# networking.iproute2

## networking.iproute2.enable

Whether to enable copying IP route configuration files. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/config/iproute2.nix>

## networking.iproute2.rttablesExtraConfig

Verbatim lines to add to /etc/iproute2/rt_tables Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/config/iproute2.nix>
