---
module: services.frr.bgpd
option_count: 3
source: options.html
---

# services.frr.bgpd

## services.frr.bgpd.enable

Whether to enable FRR bgpd. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>

## services.frr.bgpd.extraOptions

Extra options to be appended to the FRR bgpd daemon options. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>

## services.frr.bgpd.options

Options for the FRR bgpd daemon. Type: list of string Default: [ "-A 127.0.0.1" ] Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>
