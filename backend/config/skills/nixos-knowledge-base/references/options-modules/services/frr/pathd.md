---
module: services.frr.pathd
option_count: 3
source: options.html
---

# services.frr.pathd

## services.frr.pathd.enable

Whether to enable FRR pathd. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>

## services.frr.pathd.extraOptions

Extra options to be appended to the FRR pathd daemon options. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>

## services.frr.pathd.options

Options for the FRR pathd daemon. Type: list of string Default: [ "-A 127.0.0.1" ] Declared by: <nixpkgs/nixos/modules/services/networking/frr.nix>
