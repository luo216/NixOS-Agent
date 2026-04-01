---
module: services.dependency-track.database
option_count: 5
source: options.html
---

# services.dependency-track.database

## services.dependency-track.database.createLocally

Whether a database should be automatically created on the local host. Set this to false if you plan on provisioning a local database yourself. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/dependency-track.nix>

## services.dependency-track.database.databaseName

Database name to use when connecting to an external or manually provisioned database; has no effect when a local database is automatically provisioned. To use this with a local database, set services.dependency-track.database.createLocally to false and create the database and user. Type: string Default: "dependency-track" Declared by: <nixpkgs/nixos/modules/services/web-apps/dependency-track.nix>

## services.dependency-track.database.passwordFile

The path to a file containing the database password. Type: absolute path Example: "/run/keys/db_password" Declared by: <nixpkgs/nixos/modules/services/web-apps/dependency-track.nix>

## services.dependency-track.database.type

h2 database is not recommended for a production setup. postgresql this settings it recommended for production setups. manual the module doesn’t handle database settings. Type: one of “h2”, “postgresql”, “manual” Default: "postgresql" Declared by: <nixpkgs/nixos/modules/services/web-apps/dependency-track.nix>

## services.dependency-track.database.username

Username to use when connecting to an external or manually provisioned database; has no effect when a local database is automatically provisioned. To use this with a local database, set services.dependency-track.database.createLocally to false and create the database and user. Type: string Default: "dependency-track" Declared by: <nixpkgs/nixos/modules/services/web-apps/dependency-track.nix>
