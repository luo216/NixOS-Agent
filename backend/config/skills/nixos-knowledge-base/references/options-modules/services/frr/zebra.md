---
module: services.frr.zebra
option_count: 2
source: options.html
---

# services.frr.zebra

## services.frr.zebra.extraOptions

Extra options to be appended to the FRR zebra daemon options. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>

## services.frr.zebra.options

Options for the FRR zebra daemon. Type: list of string Default: [ "-A 127.0.0.1 -s 90000000" ] Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>
