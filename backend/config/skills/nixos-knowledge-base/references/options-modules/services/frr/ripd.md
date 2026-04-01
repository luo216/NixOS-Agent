---
module: services.frr.ripd
option_count: 3
source: options.html
---

# services.frr.ripd

## services.frr.ripd.enable

Whether to enable FRR ripd. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>

## services.frr.ripd.extraOptions

Extra options to be appended to the FRR ripd daemon options. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>

## services.frr.ripd.options

Options for the FRR ripd daemon. Type: list of string Default: [ "-A 127.0.0.1" ] Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>
