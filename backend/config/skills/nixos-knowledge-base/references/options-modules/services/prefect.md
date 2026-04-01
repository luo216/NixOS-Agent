---
module: services.prefect
option_count: 13
source: options.html
---

# services.prefect

## services.prefect.enable

enable prefect server and worker services Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/scheduling/prefect.nix>

## services.prefect.package

The prefect package to use. Type: package Default: pkgs.prefect Declared by: <nixpkgs/nixos/modules/services/scheduling/prefect.nix>

## services.prefect.baseUrl

external url when served by a reverse proxy, e.g. https://example.com/prefect Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/scheduling/prefect.nix>

## services.prefect.dataDir

Specify the directory for Prefect. Type: absolute path Default: "/var/lib/prefect-server" Declared by: <nixpkgs/nixos/modules/services/scheduling/prefect.nix>

## services.prefect.database

which database to use for prefect server: sqlite or postgres Type: one of “sqlite”, “postgres” Default: "sqlite" Declared by: <nixpkgs/nixos/modules/services/scheduling/prefect.nix>

## services.prefect.databaseHost

database host for postgres only Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/scheduling/prefect.nix>

## services.prefect.databaseName

database name for postgres only Type: string Default: "prefect" Declared by: <nixpkgs/nixos/modules/services/scheduling/prefect.nix>

## services.prefect.databasePasswordFile

path to a file containing e.g.: DBPASSWORD=supersecret stored outside the nix store, read by systemd as EnvironmentFile. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/scheduling/prefect.nix>

## services.prefect.databasePort

database port for postgres only Type: string Default: "5432" Declared by: <nixpkgs/nixos/modules/services/scheduling/prefect.nix>

## services.prefect.databaseUser

database user for postgres only Type: string Default: "postgres" Declared by: <nixpkgs/nixos/modules/services/scheduling/prefect.nix>

## services.prefect.host

Prefect server host Type: string Default: "127.0.0.1" Example: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/scheduling/prefect.nix>

## services.prefect.port

Prefect server port Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 4200 Declared by: <nixpkgs/nixos/modules/services/scheduling/prefect.nix>

## services.prefect.workerPools

define a set of worker pools with submodule config. example: workerPools.my-pool = { installPolicy = “never”; }; Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/scheduling/prefect.nix>
