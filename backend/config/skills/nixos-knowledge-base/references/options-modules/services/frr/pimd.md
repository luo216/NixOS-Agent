---
module: services.frr.pimd
option_count: 3
source: options.html
---

# services.frr.pimd

## services.frr.pimd.enable

Whether to enable FRR pimd. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>

## services.frr.pimd.extraOptions

Extra options to be appended to the FRR pimd daemon options. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>

## services.frr.pimd.options

Options for the FRR pimd daemon. Type: list of string Default: [ "-A 127.0.0.1" ] Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>
