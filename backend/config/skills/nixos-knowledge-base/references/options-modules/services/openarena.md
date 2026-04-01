---
module: services.openarena
option_count: 4
source: options.html
---

# services.openarena

## services.openarena.enable

Whether to enable OpenArena game server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/games/openarena.nix>

## services.openarena.package

The openarena package to use. Type: package Default: pkgs.openarena Declared by: <nixpkgs/nixos/modules/services/games/openarena.nix>

## services.openarena.extraFlags

Extra flags to pass to oa_ded Type: list of string Default: [ ] Example: [ "+set dedicated 2" "+set sv_hostname 'My NixOS OpenArena Server'" "+map oa_dm1" ] Declared by: <nixpkgs/nixos/modules/services/games/openarena.nix>

## services.openarena.openPorts

Whether to open firewall ports for OpenArena Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/games/openarena.nix>
