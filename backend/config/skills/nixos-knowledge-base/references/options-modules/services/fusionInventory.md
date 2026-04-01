---
module: services.fusionInventory
option_count: 3
source: options.html
---

# services.fusionInventory

## services.fusionInventory.enable

Whether to enable Fusion Inventory Agent. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/fusion-inventory.nix>

## services.fusionInventory.extraConfig

Configuration that is injected verbatim into the configuration file. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/monitoring/fusion-inventory.nix>

## services.fusionInventory.servers

The urls of the OCS/GLPI servers to connect to. Type: list of string Declared by: <nixpkgs/nixos/modules/services/monitoring/fusion-inventory.nix>
