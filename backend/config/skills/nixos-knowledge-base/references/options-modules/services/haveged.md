---
module: services.haveged
option_count: 2
source: options.html
---

# services.haveged

## services.haveged.enable

Whether to enable haveged entropy daemon, which refills /dev/random when low. NOTE: does nothing on kernels newer than 5.6 . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/haveged.nix>

## services.haveged.refill_threshold

The number of bits of available entropy beneath which haveged should refill the entropy pool. Type: signed integer Default: 1024 Declared by: <nixpkgs/nixos/modules/services/security/haveged.nix>
