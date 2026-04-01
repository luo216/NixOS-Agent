---
module: services.frr.ospf6d
option_count: 3
source: options.html
---

# services.frr.ospf6d

## services.frr.ospf6d.enable

Whether to enable FRR ospf6d. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>

## services.frr.ospf6d.extraOptions

Extra options to be appended to the FRR ospf6d daemon options. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>

## services.frr.ospf6d.options

Options for the FRR ospf6d daemon. Type: list of string Default: [ "-A ::1" ] Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>
