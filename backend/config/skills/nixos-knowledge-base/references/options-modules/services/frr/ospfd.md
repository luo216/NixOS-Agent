---
module: services.frr.ospfd
option_count: 3
source: options.html
---

# services.frr.ospfd

## services.frr.ospfd.enable

Whether to enable FRR ospfd. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>

## services.frr.ospfd.extraOptions

Extra options to be appended to the FRR ospfd daemon options. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>

## services.frr.ospfd.options

Options for the FRR ospfd daemon. Type: list of string Default: [ "-A 127.0.0.1" ] Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>
