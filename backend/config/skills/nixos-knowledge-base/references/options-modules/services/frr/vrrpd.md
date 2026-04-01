---
module: services.frr.vrrpd
option_count: 3
source: options.html
---

# services.frr.vrrpd

## services.frr.vrrpd.enable

Whether to enable FRR vrrpd. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>

## services.frr.vrrpd.extraOptions

Extra options to be appended to the FRR vrrpd daemon options. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>

## services.frr.vrrpd.options

Options for the FRR vrrpd daemon. Type: list of string Default: [ "-A 127.0.0.1" ] Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>
