---
module: services.vector
option_count: 6
source: options.html
---

# services.vector

## services.vector.enable

Whether to enable Vector, a high-performance observability data pipeline. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/logging/vector.nix>

## services.vector.package

The vector package to use. Type: package Default: pkgs.vector Declared by: <nixpkgs/nixos/modules/services/logging/vector.nix>

## services.vector.gracefulShutdownLimitSecs

Set the duration in seconds to wait for graceful shutdown after SIGINT or SIGTERM are received. After the duration has passed, Vector will force shutdown. Type: positive integer, meaning >0 Default: 60 Declared by: <nixpkgs/nixos/modules/services/logging/vector.nix>

## services.vector.journaldAccess

Enable Vector to access journald. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/logging/vector.nix>

## services.vector.settings

Specify the configuration for Vector in Nix. Type: JSON value Default: { } Declared by: <nixpkgs/nixos/modules/services/logging/vector.nix>

## services.vector.validateConfig

Enable the checking of the vector config during build time. This should be disabled when interpolating environment variables. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/logging/vector.nix>
