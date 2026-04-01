---
module: services.matrix-continuwuity
option_count: 6
source: options.html
---

# services.matrix-continuwuity

## services.matrix-continuwuity.enable

Whether to enable continuwuity. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/matrix/continuwuity.nix>

## services.matrix-continuwuity.package

The matrix-continuwuity package to use. Type: package Default: pkgs.matrix-continuwuity Declared by: <nixpkgs/nixos/modules/services/matrix/continuwuity.nix>

## services.matrix-continuwuity.extraEnvironment

Extra Environment variables to pass to the continuwuity server. Type: attribute set of string Default: { } Example: { RUST_BACKTRACE = "yes"; } Declared by: <nixpkgs/nixos/modules/services/matrix/continuwuity.nix>

## services.matrix-continuwuity.group

The group continuwuity is run as. Type: non-empty string Default: "continuwuity" Declared by: <nixpkgs/nixos/modules/services/matrix/continuwuity.nix>

## services.matrix-continuwuity.settings

Generates the continuwuity.toml configuration file. Refer to https://continuwuity.org/configuration.html for details on supported values. Type: open submodule of (TOML value) Default: { } Declared by: <nixpkgs/nixos/modules/services/matrix/continuwuity.nix>

## services.matrix-continuwuity.user

The user continuwuity is run as. Type: non-empty string Default: "continuwuity" Declared by: <nixpkgs/nixos/modules/services/matrix/continuwuity.nix>
