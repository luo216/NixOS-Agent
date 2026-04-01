---
module: services.mattermost.database
option_count: 11
source: options.html
---

# services.mattermost.database

## services.mattermost.database.create

Create a local PostgreSQL or MySQL database for Mattermost automatically. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/mattermost.nix>

## services.mattermost.database.driver

The database driver to use (Postgres or MySQL). Type: one of “postgres”, “mysql” Default: "postgres" Declared by: <nixpkgs/nixos/modules/services/web-apps/mattermost.nix>

## services.mattermost.database.extraConnectionOptions

Extra options that are placed in the connection URI’s query parameters. Type: attribute set of (signed integer or string) Default: '' if config.mattermost.database.driver == "postgres" then { sslmode = "disable"; connect_timeout = 60; } else if config.mattermost.database.driver == "mysql" then { charset = "utf8mb4"; writeTimeout = "60s"; readTimeout = "60s"; } else throw "Invalid database driver"; '' Declared by: <nixpkgs/nixos/modules/services/web-apps/mattermost.nix>

## services.mattermost.database.fromEnvironment

Use services.mattermost.environmentFile to configure the database instead of writing the database URI to the Nix store. Useful if you use password authentication with peerAuth set to false. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/mattermost.nix>

## services.mattermost.database.host

Host to use for the database. Can also be set to a path if you’d like to connect to a socket using a username and password. Type: string Default: "localhost" Example: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/web-apps/mattermost.nix>

## services.mattermost.database.name

Local Mattermost database name. Type: string Default: "mattermost" Declared by: <nixpkgs/nixos/modules/services/web-apps/mattermost.nix>

## services.mattermost.database.password

Password for local Mattermost database user. If set and peerAuth is not true, will cause a warning nagging you to use environmentFile instead since it will end up in the Nix store. Type: string Default: "mmpgsecret" Declared by: <nixpkgs/nixos/modules/services/web-apps/mattermost.nix>

## services.mattermost.database.peerAuth

If set, will use peer auth instead of connecting to a Postgres server. Use services.mattermost.database.socketPath to configure the socket path. Type: boolean Default: '' versionAtLeast config.system.stateVersion "25.05" && config.services.mattermost.database.host == "localhost" '' Declared by: <nixpkgs/nixos/modules/services/web-apps/mattermost.nix>

## services.mattermost.database.port

Port to use for the database. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: '' if config.services.mattermost.database.type == "postgres" then 5432 else 3306 '' Example: 3306 Declared by: <nixpkgs/nixos/modules/services/web-apps/mattermost.nix>

## services.mattermost.database.socketPath

The database (Postgres or MySQL) socket path. Type: absolute path Default: '' if config.services.mattermost.database.driver == "postgres" then "/run/postgresql" else "/run/mysqld/mysqld.sock"; '' Declared by: <nixpkgs/nixos/modules/services/web-apps/mattermost.nix>

## services.mattermost.database.user

Local Mattermost database username. Type: string Default: "mattermost" Declared by: <nixpkgs/nixos/modules/services/web-apps/mattermost.nix>
