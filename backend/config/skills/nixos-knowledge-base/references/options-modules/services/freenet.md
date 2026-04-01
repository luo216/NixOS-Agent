---
module: services.freenet
option_count: 2
source: options.html
---

# services.freenet

## services.freenet.enable

Whether to enable Freenet daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/freenet.nix>

## services.freenet.nice

Set the nice level for the Freenet daemon Type: integer between -20 and 19 (both inclusive) Default: 10 Declared by: <nixpkgs/nixos/modules/services/networking/freenet.nix>
