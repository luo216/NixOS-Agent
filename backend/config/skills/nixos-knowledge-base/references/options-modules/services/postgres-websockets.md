---
module: services.postgres-websockets
option_count: 4
source: options.html
---

# services.postgres-websockets

## services.postgres-websockets.enable

Whether to enable postgres-websockets. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/databases/postgres-websockets.nix>

## services.postgres-websockets.environment

postgres-websockets configuration as defined in: https://github.com/diogob/postgres-websockets/blob/master/src/PostgresWebsockets/Config.hs#L71-L87 PGWS_DB_URI is represented as an attribute set, see environment.PGWS_DB_URI Note The environment.PGWS_JWT_SECRET option is blocked. Use jwtSecretFile instead. Type: open submodule of attribute set of string Default: { } Example: { PGWS_LISTEN_CHANNEL = "my_channel"; PGWS_DB_URI.dbname = "postgres"; } Declared by: <nixpkgs/nixos/modules/services/databases/postgres-websockets.nix>

## services.postgres-websockets.jwtSecretFile

Secret used to sign JWT tokens used to open communications channels. Type: null or absolute path not in the Nix store Example: "/run/keys/jwt_secret" Declared by: <nixpkgs/nixos/modules/services/databases/postgres-websockets.nix>

## services.postgres-websockets.pgpassFile

The password to authenticate to PostgreSQL with. Not needed for peer or trust based authentication. The file must be a valid .pgpass file as described in: https://www.postgresql.org/docs/current/libpq-pgpass.html In most cases, the following will be enough: *:*:*:*:<password> Type: null or absolute path not in the Nix store Default: null Example: "/run/keys/db_password" Declared by: <nixpkgs/nixos/modules/services/databases/postgres-websockets.nix>
