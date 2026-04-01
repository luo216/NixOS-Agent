---
module: services.bitmagnet
option_count: 7
source: options.html
---

# services.bitmagnet

## services.bitmagnet.enable

Whether to enable Bitmagnet service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/torrent/bitmagnet.nix>

## services.bitmagnet.package

The bitmagnet package to use. Type: package Default: pkgs.bitmagnet Declared by: <nixpkgs/nixos/modules/services/torrent/bitmagnet.nix>

## services.bitmagnet.group

Group of user running bitmagnet Type: string Default: "bitmagnet" Declared by: <nixpkgs/nixos/modules/services/torrent/bitmagnet.nix>

## services.bitmagnet.openFirewall

Open DHT ports in firewall Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/torrent/bitmagnet.nix>

## services.bitmagnet.settings

Bitmagnet configuration (https://bitmagnet.io/setup/configuration.html). Type: open submodule of (YAML 1.1 value) Default: { } Declared by: <nixpkgs/nixos/modules/services/torrent/bitmagnet.nix>

## services.bitmagnet.useLocalPostgresDB

Use a local postgresql database, create user and database Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/torrent/bitmagnet.nix>

## services.bitmagnet.user

User running bitmagnet Type: string Default: "bitmagnet" Declared by: <nixpkgs/nixos/modules/services/torrent/bitmagnet.nix>
