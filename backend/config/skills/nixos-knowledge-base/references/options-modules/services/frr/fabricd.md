---
module: services.frr.fabricd
option_count: 3
source: options.html
---

# services.frr.fabricd

## services.frr.fabricd.enable

Whether to enable FRR fabricd. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>

## services.frr.fabricd.extraOptions

Extra options to be appended to the FRR fabricd daemon options. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>

## services.frr.fabricd.options

Options for the FRR fabricd daemon. Type: list of string Default: [ "-A 127.0.0.1" ] Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>
