---
module: services.matrix-tuwunel
option_count: 7
source: options.html
---

# services.matrix-tuwunel

## services.matrix-tuwunel.enable

Whether to enable tuwunel. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/matrix/tuwunel.nix>

## services.matrix-tuwunel.package

The matrix-tuwunel package to use. Type: package Default: pkgs.matrix-tuwunel Declared by: <nixpkgs/nixos/modules/services/matrix/tuwunel.nix>

## services.matrix-tuwunel.extraEnvironment

Extra Environment variables to pass to the tuwunel server. Type: attribute set of string Default: { } Example: { RUST_BACKTRACE = "yes"; } Declared by: <nixpkgs/nixos/modules/services/matrix/tuwunel.nix>

## services.matrix-tuwunel.group

The group tuwunel is run as. If left as the default, the group will automatically be created by the service. Type: non-empty string Default: "tuwunel" Example: "conduit" Declared by: <nixpkgs/nixos/modules/services/matrix/tuwunel.nix>

## services.matrix-tuwunel.settings

Generates the tuwunel.toml configuration file. Refer to https://matrix-construct.github.io/tuwunel/configuration.html for details on supported values. Type: open submodule of (TOML value) Default: { } Declared by: <nixpkgs/nixos/modules/services/matrix/tuwunel.nix>

## services.matrix-tuwunel.stateDirectory

The name of the directory under /var/lib/ where the database will be stored. Note that stateDirectory cannot be changed once created because of the service’s reliance on systemd StateDirectory. Type: non-empty string Default: "tuwunel" Example: "matrix-conduit" Declared by: <nixpkgs/nixos/modules/services/matrix/tuwunel.nix>

## services.matrix-tuwunel.user

The user tuwunel is run as. If left as the default, the user will automatically be created by the service. Type: non-empty string Default: "tuwunel" Example: "conduit" Declared by: <nixpkgs/nixos/modules/services/matrix/tuwunel.nix>
