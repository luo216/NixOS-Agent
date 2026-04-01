---
module: services.pppd
option_count: 3
source: options.html
---

# services.pppd

## services.pppd.enable

Whether to enable pppd. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/pppd.nix>

## services.pppd.package

The ppp package to use. Type: package Default: pkgs.ppp Declared by: <nixpkgs/nixos/modules/services/networking/pppd.nix>

## services.pppd.peers

pppd peers. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/pppd.nix>
