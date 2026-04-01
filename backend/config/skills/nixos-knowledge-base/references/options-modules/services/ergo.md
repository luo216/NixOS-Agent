---
module: services.ergo
option_count: 6
source: options.html
---

# services.ergo

## services.ergo.enable

Whether to enable Ergo service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/ergo.nix>

## services.ergo.dataDir

The data directory for the Ergo node. Type: absolute path Default: "/var/lib/ergo" Declared by: <nixpkgs/nixos/modules/services/networking/ergo.nix>

## services.ergo.group

The group as which to run the Ergo node. Type: string Default: config.services.ergo.user Declared by: <nixpkgs/nixos/modules/services/networking/ergo.nix>

## services.ergo.openFirewall

Open ports in the firewall for the Ergo node as well as the API. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/ergo.nix>

## services.ergo.testnet

Connect to testnet network instead of the default mainnet. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/ergo.nix>

## services.ergo.user

The user as which to run the Ergo node. Type: string Default: "ergo" Declared by: <nixpkgs/nixos/modules/services/networking/ergo.nix>
