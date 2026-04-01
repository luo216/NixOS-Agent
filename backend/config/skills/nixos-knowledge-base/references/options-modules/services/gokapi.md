---
module: services.gokapi
option_count: 6
source: options.html
---

# services.gokapi

## services.gokapi.enable

Whether to enable Lightweight selfhosted Firefox Send alternative without public upload. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/gokapi.nix>

## services.gokapi.package

The gokapi package to use. Type: package Default: pkgs.gokapi Declared by: <nixpkgs/nixos/modules/services/networking/gokapi.nix>

## services.gokapi.environment

Environment variables to be set for the gokapi service. Can use systemd specifiers. For full list see https://gokapi.readthedocs.io/en/latest/advanced.html#environment-variables. Type: open submodule of attribute set of (string or signed integer) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/gokapi.nix>

## services.gokapi.mutableSettings

Allow changes to the program config made by the program to persist between restarts. If disabled all required values must be set using nix, and all changes to config format over application updates must be resolved by user. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/gokapi.nix>

## services.gokapi.settings

Configuration settings for the generated config json file. See https://gokapi.readthedocs.io/en/latest/advanced.html#config-json for more information Type: open submodule of (JSON value) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/gokapi.nix>

## services.gokapi.settingsFile

Path to config file to parse and append to settings. Largely useful for loading secrets from a file not in the nix store. Can use systemd specifiers. See https://gokapi.readthedocs.io/en/latest/advanced.html#config-json for more information Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/gokapi.nix>
