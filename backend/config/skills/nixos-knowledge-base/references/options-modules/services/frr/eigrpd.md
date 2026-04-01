---
module: services.frr.eigrpd
option_count: 3
source: options.html
---

# services.frr.eigrpd

## services.frr.eigrpd.enable

Whether to enable FRR eigrpd. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>

## services.frr.eigrpd.extraOptions

Extra options to be appended to the FRR eigrpd daemon options. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>

## services.frr.eigrpd.options

Options for the FRR eigrpd daemon. Type: list of string Default: [ "-A 127.0.0.1" ] Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>
