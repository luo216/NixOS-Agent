---
module: services.freeciv
option_count: 3
source: options.html
---

# services.freeciv

## services.freeciv.enable

Whether to enable freeciv. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/games/freeciv.nix>

## services.freeciv.openFirewall

Whether to enable opening the firewall for the port listening for clients. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/games/freeciv.nix>

## services.freeciv.settings

Parameters of freeciv-server. Type: open submodule of (freeciv-server params) Default: { } Declared by: <nixpkgs/nixos/modules/services/games/freeciv.nix>
