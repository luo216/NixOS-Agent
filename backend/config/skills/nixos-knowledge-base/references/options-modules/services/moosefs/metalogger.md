---
module: services.moosefs.metalogger
option_count: 2
source: options.html
---

# services.moosefs.metalogger

## services.moosefs.metalogger.enable

Whether to enable MooseFS metalogger daemon that maintains a backup copy of the master’s metadata. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/moosefs.nix>

## services.moosefs.metalogger.settings

Metalogger configuration options (mfsmetalogger.cfg). Type: open submodule of attribute set of (Flat key-value file) Declared by: <nixpkgs/nixos/modules/services/network-filesystems/moosefs.nix>
