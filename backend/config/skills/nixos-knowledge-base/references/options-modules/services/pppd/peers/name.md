---
module: services.pppd.peers.<name>
option_count: 4
source: options.html
---

# services.pppd.peers.<name>

## services.pppd.peers.<name>.enable

Whether to enable this PPP peer. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/networking/pppd.nix>

## services.pppd.peers.<name>.autostart

Whether the PPP session is automatically started at boot time. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/networking/pppd.nix>

## services.pppd.peers.<name>.config

pppd configuration for this peer, see the pppd(8) man page. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/pppd.nix>

## services.pppd.peers.<name>.name

Name of the PPP peer. Type: string Default: "‹name›" Example: "dialup" Declared by: <nixpkgs/nixos/modules/services/networking/pppd.nix>
