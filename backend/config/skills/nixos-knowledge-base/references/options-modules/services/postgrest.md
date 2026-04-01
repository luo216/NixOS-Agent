---
module: services.postgrest
option_count: 4
source: options.html
---

# services.postgrest

## services.postgrest.enable

Whether to enable PostgREST. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/databases/postgrest.nix>

## services.postgrest.jwtSecretFile

The secret or JSON Web Key (JWK) (or set) used to decode JWT tokens clients provide for authentication. For security the key must be at least 32 characters long. If this parameter is not specified then PostgREST refuses authentication requests. https://docs.postgrest.org/en/stable/references/configuration.html#jwt-secret Type: null or absolute path not in the Nix store Default: null Example: "/run/keys/jwt_secret" Declared by: <nixpkgs/nixos/modules/services/databases/postgrest.nix>

## services.postgrest.pgpassFile

The password to authenticate to PostgreSQL with. Not needed for peer or trust based authentication. The file must be a valid .pgpass file as described in: https://www.postgresql.org/docs/current/libpq-pgpass.html In most cases, the following will be enough: *:*:*:*:<password> Type: null or absolute path not in the Nix store Default: null Example: "/run/keys/db_password" Declared by: <nixpkgs/nixos/modules/services/databases/postgrest.nix>

## services.postgrest.settings

PostgREST configuration as documented in: https://docs.postgrest.org/en/stable/references/configuration.html#list-of-parameters db-uri is represented as an attribute set, see settings.db-uri Note The settings.jwt-secret option is blocked. Use jwtSecretFile instead. Type: open submodule of attribute set of (boolean or (unsigned integer, meaning >=0) or string) Default: { } Example: { db-anon-role = "anon"; db-uri.dbname = "postgres"; "app.settings.custom" = "value"; } Declared by: <nixpkgs/nixos/modules/services/databases/postgrest.nix>
