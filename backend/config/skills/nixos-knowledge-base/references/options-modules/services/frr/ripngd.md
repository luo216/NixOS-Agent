---
module: services.frr.ripngd
option_count: 3
source: options.html
---

# services.frr.ripngd

## services.frr.ripngd.enable

Whether to enable FRR ripngd. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>

## services.frr.ripngd.extraOptions

Extra options to be appended to the FRR ripngd daemon options. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>

## services.frr.ripngd.options

Options for the FRR ripngd daemon. Type: list of string Default: [ "-A ::1" ] Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>
