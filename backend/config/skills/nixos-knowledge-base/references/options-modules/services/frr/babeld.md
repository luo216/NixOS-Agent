---
module: services.frr.babeld
option_count: 3
source: options.html
---

# services.frr.babeld

## services.frr.babeld.enable

Whether to enable FRR babeld. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>

## services.frr.babeld.extraOptions

Extra options to be appended to the FRR babeld daemon options. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>

## services.frr.babeld.options

Options for the FRR babeld daemon. Type: list of string Default: [ "-A 127.0.0.1" ] Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>
