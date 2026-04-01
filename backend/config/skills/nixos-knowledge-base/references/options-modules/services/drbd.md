---
module: services.drbd
option_count: 2
source: options.html
---

# services.drbd

## services.drbd.enable

Whether to enable support for DRBD, the Distributed Replicated Block Device. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/network-filesystems/drbd.nix>

## services.drbd.config

Contents of the drbd.conf configuration file. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/drbd.nix>
