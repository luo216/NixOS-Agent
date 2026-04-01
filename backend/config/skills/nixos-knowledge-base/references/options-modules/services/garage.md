---
module: services.garage
option_count: 6
source: options.html
---

# services.garage

## services.garage.enable

Whether to enable Garage Object Storage (S3 compatible). Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-servers/garage.nix>

## services.garage.package

Garage package to use, needs to be set explicitly. If you are upgrading from a major version, please read NixOS and Garage release notes for upgrade instructions. Type: package Declared by: <nixpkgs/nixos/modules/services/web-servers/garage.nix>

## services.garage.environmentFile

File containing environment variables to be passed to the Garage server. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-servers/garage.nix>

## services.garage.extraEnvironment

Extra environment variables to pass to the Garage server. Type: attribute set of string Default: { } Example: { RUST_BACKTRACE = "yes"; } Declared by: <nixpkgs/nixos/modules/services/web-servers/garage.nix>

## services.garage.logLevel

Garage log level, see https://garagehq.deuxfleurs.fr/documentation/quick-start/#launching-the-garage-server for examples. Type: one of “error”, “warn”, “info”, “debug”, “trace” Default: "info" Example: "debug" Declared by: <nixpkgs/nixos/modules/services/web-servers/garage.nix>

## services.garage.settings

Garage configuration, see https://garagehq.deuxfleurs.fr/documentation/reference-manual/configuration/ for reference. Type: open submodule of (TOML value) Declared by: <nixpkgs/nixos/modules/services/web-servers/garage.nix>
