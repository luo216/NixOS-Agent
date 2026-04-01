---
module: services.frr.pim6d
option_count: 3
source: options.html
---

# services.frr.pim6d

## services.frr.pim6d.enable

Whether to enable FRR pim6d. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>

## services.frr.pim6d.extraOptions

Extra options to be appended to the FRR pim6d daemon options. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>

## services.frr.pim6d.options

Options for the FRR pim6d daemon. Type: list of string Default: [ "-A ::1" ] Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>
