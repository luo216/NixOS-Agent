---
module: services.postgres-websockets.environment
option_count: 2
source: options.html
---

# services.postgres-websockets.environment

## services.postgres-websockets.environment.PGWS_DB_URI

libpq connection parameters as documented in: https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-PARAMKEYWORDS Note The environment.PGWS_DB_URI.password and environment.PGWS_DB_URI.passfile options are blocked. Use pgpassFile instead. Type: open submodule of attribute set of string Default: { } Example: { host = "localhost"; dbname = "postgres"; } Declared by: <nixpkgs/nixos/modules/services/databases/postgres-websockets.nix>

## services.postgres-websockets.environment.PGWS_HOST

Address the server will listen for websocket connections. Type: null or string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/databases/postgres-websockets.nix>
