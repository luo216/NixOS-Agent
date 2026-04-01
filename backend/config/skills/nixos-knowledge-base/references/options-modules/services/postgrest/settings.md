---
module: services.postgrest.settings
option_count: 6
source: options.html
---

# services.postgrest.settings

## services.postgrest.settings.admin-server-port

Specifies the port for the admin server, which can be used for healthchecks. https://docs.postgrest.org/en/stable/references/admin_server.html#admin-server Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/databases/postgrest.nix>

## services.postgrest.settings.db-config

Enables the in-database configuration. https://docs.postgrest.org/en/stable/references/configuration.html#in-database-configuration Note This is enabled by default upstream, but disabled by default in this module. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/databases/postgrest.nix>

## services.postgrest.settings.db-uri

libpq connection parameters as documented in: https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-PARAMKEYWORDS Note The settings.db-uri.password and settings.db-uri.passfile options are blocked. Use pgpassFile instead. Type: open submodule of attribute set of string Default: { } Example: { host = "localhost"; dbname = "postgres"; } Declared by: <nixpkgs/nixos/modules/services/databases/postgrest.nix>

## services.postgrest.settings.server-host

Where to bind the PostgREST web server. Note The admin server will also bind here, but potentially exposes sensitive information. Make sure you turn off the admin server, when opening this to the public. https://github.com/PostgREST/postgrest/issues/3956 Type: null or string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/databases/postgrest.nix>

## services.postgrest.settings.server-port

The TCP port to bind the web server. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Example: 3000 Declared by: <nixpkgs/nixos/modules/services/databases/postgrest.nix>

## services.postgrest.settings.server-unix-socket

Unix domain socket where to bind the PostgREST web server. Type: null or absolute path Default: "/run/postgrest/postgrest.sock" Declared by: <nixpkgs/nixos/modules/services/databases/postgrest.nix>
