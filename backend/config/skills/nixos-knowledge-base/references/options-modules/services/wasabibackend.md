---
module: services.wasabibackend
option_count: 6
source: options.html
---

# services.wasabibackend

## services.wasabibackend.enable

Whether to enable Wasabi backend service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/wasabibackend.nix>

## services.wasabibackend.customConfigFile

Defines the path to a custom configuration file that is copied to the user’s directory. Overrides any config options. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/wasabibackend.nix>

## services.wasabibackend.dataDir

The data directory for the Wasabi backend node. Type: absolute path Default: "/var/lib/wasabibackend" Declared by: <nixpkgs/nixos/modules/services/networking/wasabibackend.nix>

## services.wasabibackend.group

The group as which to run the wasabibackend node. Type: string Default: config.services.wasabibackend.user Declared by: <nixpkgs/nixos/modules/services/networking/wasabibackend.nix>

## services.wasabibackend.network

The network to use for the Wasabi backend service. Type: one of “mainnet”, “testnet”, “regtest” Default: "mainnet" Declared by: <nixpkgs/nixos/modules/services/networking/wasabibackend.nix>

## services.wasabibackend.user

The user as which to run the wasabibackend node. Type: string Default: "wasabibackend" Declared by: <nixpkgs/nixos/modules/services/networking/wasabibackend.nix>
