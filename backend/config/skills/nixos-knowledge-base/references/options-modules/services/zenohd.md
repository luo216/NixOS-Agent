---
module: services.zenohd
option_count: 8
source: options.html
---

# services.zenohd

## services.zenohd.enable

Whether to enable Zenoh daemon… Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/zenohd.nix>

## services.zenohd.package

The zenoh package to use. Type: package Default: pkgs.zenoh Declared by: <nixpkgs/nixos/modules/services/networking/zenohd.nix>

## services.zenohd.backends

Storage backend packages to add to zenohd search paths. Type: list of package Default: [ ] Example: [ pkgs.zenoh-backend-rocksdb ] Declared by: <nixpkgs/nixos/modules/services/networking/zenohd.nix>

## services.zenohd.env

Set environment variables consumed by zenohd and its plugins. Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/zenohd.nix>

## services.zenohd.extraOptions

Extra command line options for zenohd. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/zenohd.nix>

## services.zenohd.home

Base directory for zenohd related files defined via ZENOH_HOME. Type: string Default: "/var/lib/zenoh" Declared by: <nixpkgs/nixos/modules/services/networking/zenohd.nix>

## services.zenohd.plugins

Plugin packages to add to zenohd search paths. Type: list of package Default: [ ] Example: [ pkgs.zenoh-plugin-mqtt ] Declared by: <nixpkgs/nixos/modules/services/networking/zenohd.nix>

## services.zenohd.settings

Config options for zenoh.json5 configuration file. See https://github.com/eclipse-zenoh/zenoh/blob/main/DEFAULT_CONFIG.json5 for more information. Type: open submodule of (JSON value) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/zenohd.nix>
