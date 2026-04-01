---
module: services.immich.database
option_count: 8
source: options.html
---

# services.immich.database

## services.immich.database.enable

Whether to enable the postgresql database for use with immich. See services.postgresql. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/immich.nix>

## services.immich.database.enableVectorChord

Whether to enable the new VectorChord extension for full-text search in Postgres. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/immich.nix>

## services.immich.database.enableVectors

Whether to enable pgvecto.rs in the database. You may disable this, if you have migrated to VectorChord and deleted the vectors schema… Type: boolean Default: lib.versionOlder config.system.stateVersion "25.11" Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/immich.nix>

## services.immich.database.createDB

Whether to enable the automatic creation of the database for immich… Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/immich.nix>

## services.immich.database.host

Hostname or address of the postgresql server. If an absolute path is given here, it will be interpreted as a unix socket path. Type: string Default: "/run/postgresql" Example: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/web-apps/immich.nix>

## services.immich.database.name

The name of the immich database. Type: string Default: "immich" Declared by: <nixpkgs/nixos/modules/services/web-apps/immich.nix>

## services.immich.database.port

Port of the postgresql server. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5432 Declared by: <nixpkgs/nixos/modules/services/web-apps/immich.nix>

## services.immich.database.user

The database user for immich. Type: string Default: "immich" Declared by: <nixpkgs/nixos/modules/services/web-apps/immich.nix>
