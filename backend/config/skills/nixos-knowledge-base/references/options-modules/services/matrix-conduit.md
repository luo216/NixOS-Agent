---
module: services.matrix-conduit
option_count: 5
source: options.html
---

# services.matrix-conduit

## services.matrix-conduit.enable

Whether to enable matrix-conduit. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/matrix/conduit.nix>

## services.matrix-conduit.package

The matrix-conduit package to use. Type: package Default: pkgs.matrix-conduit Declared by: <nixpkgs/nixos/modules/services/matrix/conduit.nix>

## services.matrix-conduit.extraEnvironment

Extra Environment variables to pass to the conduit server. Type: attribute set of string Default: { } Example: { RUST_BACKTRACE = "yes"; } Declared by: <nixpkgs/nixos/modules/services/matrix/conduit.nix>

## services.matrix-conduit.secretFile

Path to a file containing sensitive environment as described in {manpage}`systemd.exec(5). Some variables that can be considered secrets are: CONDUIT_JWT_SECRET: The secret used to enable JWT login. Without it a 400 error will be returned. CONDUIT_TURN_SECRET: The TURN secret Type: null or absolute path Default: null Example: "/run/secrets/matrix-conduit.env" Declared by: <nixpkgs/nixos/modules/services/matrix/conduit.nix>

## services.matrix-conduit.settings

Generates the conduit.toml configuration file. Refer to https://docs.conduit.rs/configuration.html for details on supported values. Note that database_path can not be edited because the service’s reliance on systemd StateDir. For secrets use the secretFile option instead. Type: open submodule of (TOML value) Default: { } Declared by: <nixpkgs/nixos/modules/services/matrix/conduit.nix>
