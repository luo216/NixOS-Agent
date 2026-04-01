---
module: services.esdm
option_count: 3
source: options.html
---

# services.esdm

## services.esdm.enable

Whether to enable ESDM service configuration. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/esdm.nix>

## services.esdm.enableLinuxCompatServices

Enable /dev/random, /dev/urandom and /proc/sys/kernel/random/* userspace wrapper. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/security/esdm.nix>

## services.esdm.package

The esdm package to use. Type: package Default: pkgs.esdm Declared by: <nixpkgs/nixos/modules/services/security/esdm.nix>
