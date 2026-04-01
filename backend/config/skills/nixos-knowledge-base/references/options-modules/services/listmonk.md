---
module: services.listmonk
option_count: 4
source: options.html
---

# services.listmonk

## services.listmonk.enable

Whether to enable Listmonk, this module assumes a reverse proxy to be set. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/mail/listmonk.nix>

## services.listmonk.package

The listmonk package to use. Type: package Default: pkgs.listmonk Declared by: <nixpkgs/nixos/modules/services/mail/listmonk.nix>

## services.listmonk.secretFile

A file containing secrets as environment variables. See https://listmonk.app/docs/configuration/#environment-variables for details on supported values. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/mail/listmonk.nix>

## services.listmonk.settings

Static settings set in the config.toml, see https://github.com/knadh/listmonk/blob/master/config.toml.sample for details. You can set secrets using the secretFile option with environment variables following https://listmonk.app/docs/configuration/#environment-variables. Type: open submodule of (TOML value) Declared by: <nixpkgs/nixos/modules/services/mail/listmonk.nix>
