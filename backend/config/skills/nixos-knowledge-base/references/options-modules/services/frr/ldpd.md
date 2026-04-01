---
module: services.frr.ldpd
option_count: 3
source: options.html
---

# services.frr.ldpd

## services.frr.ldpd.enable

Whether to enable FRR ldpd. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>

## services.frr.ldpd.extraOptions

Extra options to be appended to the FRR ldpd daemon options. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>

## services.frr.ldpd.options

Options for the FRR ldpd daemon. Type: list of string Default: [ "-A 127.0.0.1" ] Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>
