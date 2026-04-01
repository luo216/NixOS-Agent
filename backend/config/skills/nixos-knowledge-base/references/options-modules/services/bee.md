---
module: services.bee
option_count: 6
source: options.html
---

# services.bee

## services.bee.enable

Whether to enable Ethereum Swarm Bee. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/bee.nix>

## services.bee.package

The bee package to use. Type: package Default: pkgs.bee Example: bee-unstable Declared by: <nixpkgs/nixos/modules/services/networking/bee.nix>

## services.bee.daemonNiceLevel

Daemon process priority for bee. 0 is the default Unix process priority, 19 is the lowest. Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/services/networking/bee.nix>

## services.bee.group

Group the bee binary should execute under. Type: string Default: "bee" Declared by: <nixpkgs/nixos/modules/services/networking/bee.nix>

## services.bee.settings

Ethereum Swarm Bee configuration. Refer to https://gateway.ethswarm.org/bzz/docs.swarm.eth/docs/installation/configuration/ for details on supported values. Type: YAML 1.1 value Declared by: <nixpkgs/nixos/modules/services/networking/bee.nix>

## services.bee.user

User the bee binary should execute under. Type: string Default: "bee" Declared by: <nixpkgs/nixos/modules/services/networking/bee.nix>
