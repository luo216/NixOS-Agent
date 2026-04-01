---
module: services.frr.nhrpd
option_count: 3
source: options.html
---

# services.frr.nhrpd

## services.frr.nhrpd.enable

Whether to enable FRR nhrpd. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>

## services.frr.nhrpd.extraOptions

Extra options to be appended to the FRR nhrpd daemon options. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>

## services.frr.nhrpd.options

Options for the FRR nhrpd daemon. Type: list of string Default: [ "-A 127.0.0.1" ] Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>
