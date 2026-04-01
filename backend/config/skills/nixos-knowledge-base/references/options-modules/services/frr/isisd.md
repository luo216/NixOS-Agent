---
module: services.frr.isisd
option_count: 3
source: options.html
---

# services.frr.isisd

## services.frr.isisd.enable

Whether to enable FRR isisd. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>

## services.frr.isisd.extraOptions

Extra options to be appended to the FRR isisd daemon options. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>

## services.frr.isisd.options

Options for the FRR isisd daemon. Type: list of string Default: [ "-A 127.0.0.1" ] Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>
