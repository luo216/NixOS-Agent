---
module: services.saunafs.metalogger
option_count: 2
source: options.html
---

# services.saunafs.metalogger

## services.saunafs.metalogger.enable

Whether to enable Saunafs metalogger daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/saunafs.nix>

## services.saunafs.metalogger.settings

Contents of metalogger config file (see sfsmetalogger.cfg(5)). Type: open submodule of attribute set of (Flat key-value file) Declared by: <nixpkgs/nixos/modules/services/network-filesystems/saunafs.nix>
