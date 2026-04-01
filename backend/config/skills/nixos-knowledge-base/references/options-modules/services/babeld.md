---
module: services.babeld
option_count: 4
source: options.html
---

# services.babeld

## services.babeld.enable

Whether to enable the babeld network routing daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/babeld.nix>

## services.babeld.extraConfig

Options that will be copied to babeld.conf. See babeld(8) for details. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/babeld.nix>

## services.babeld.interfaceDefaults

A set describing default parameters for babeld interfaces. See babeld(8) for options. Type: null or (attribute set of unspecified value) Default: null Example: { split-horizon = true; type = "tunnel"; } Declared by: <nixpkgs/nixos/modules/services/networking/babeld.nix>

## services.babeld.interfaces

A set describing babeld interfaces. See babeld(8) for options. Type: attribute set of attribute set of unspecified value Default: { } Example: { enp0s2 = { hello-interval = 5; split-horizon = "auto"; type = "wired"; }; } Declared by: <nixpkgs/nixos/modules/services/networking/babeld.nix>
