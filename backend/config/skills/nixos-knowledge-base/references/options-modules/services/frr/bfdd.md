---
module: services.frr.bfdd
option_count: 3
source: options.html
---

# services.frr.bfdd

## services.frr.bfdd.enable

Whether to enable FRR bfdd. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>

## services.frr.bfdd.extraOptions

Extra options to be appended to the FRR bfdd daemon options. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>

## services.frr.bfdd.options

Options for the FRR bfdd daemon. Type: list of string Default: [ "-A 127.0.0.1" ] Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>
