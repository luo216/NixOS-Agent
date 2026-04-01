---
module: services.pgscv
option_count: 4
source: options.html
---

# services.pgscv

## services.pgscv.enable

Whether to enable pgSCV, a PostgreSQL ecosystem metrics collector. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/pgscv.nix>

## services.pgscv.package

The pgscv package to use. Type: package Default: pkgs.pgscv Declared by: <nixpkgs/nixos/modules/services/monitoring/pgscv.nix>

## services.pgscv.logLevel

Log level for pgSCV. Type: one of “debug”, “info”, “warn”, “error” Default: "info" Declared by: <nixpkgs/nixos/modules/services/monitoring/pgscv.nix>

## services.pgscv.settings

Configuration for pgSCV, in YAML format. See configuration reference. Type: YAML 1.1 value Default: { } Declared by: <nixpkgs/nixos/modules/services/monitoring/pgscv.nix>
