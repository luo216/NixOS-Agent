---
module: services.frr.pbrd
option_count: 3
source: options.html
---

# services.frr.pbrd

## services.frr.pbrd.enable

Whether to enable FRR pbrd. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>

## services.frr.pbrd.extraOptions

Extra options to be appended to the FRR pbrd daemon options. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>

## services.frr.pbrd.options

Options for the FRR pbrd daemon. Type: list of string Default: [ "-A 127.0.0.1" ] Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>
