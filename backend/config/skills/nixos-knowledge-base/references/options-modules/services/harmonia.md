---
module: services.harmonia
option_count: 5
source: options.html
---

# services.harmonia

## services.harmonia.enable

Whether to enable Harmonia: Nix binary cache written in Rust. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/harmonia.nix>

## services.harmonia.package

The harmonia package to use. Type: package Default: pkgs.harmonia Declared by: <nixpkgs/nixos/modules/services/networking/harmonia.nix>

## services.harmonia.settings

Settings to merge with the default configuration. For the list of the default configuration, see https://github.com/nix-community/harmonia/tree/master#configuration. Type: TOML value Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/harmonia.nix>

## services.harmonia.signKeyPath

DEPRECATED: Use services.harmonia.signKeyPaths instead. Path to the signing key to use for signing the cache Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/harmonia.nix>

## services.harmonia.signKeyPaths

Paths to the signing keys to use for signing the cache Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/harmonia.nix>
