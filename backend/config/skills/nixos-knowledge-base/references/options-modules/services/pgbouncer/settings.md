---
module: services.pgbouncer.settings
option_count: 3
source: options.html
---

# services.pgbouncer.settings

## services.pgbouncer.settings.databases

Detailed information about PostgreSQL database definitions: https://www.pgbouncer.org/config.html#section-databases Type: attribute set of string Default: { } Example: { bardb = "host=localhost dbname=bazdb"; exampledb = "host=/run/postgresql/ port=5432 auth_user=exampleuser dbname=exampledb sslmode=require"; foodb = "host=host1.example.com port=5432"; } Declared by: <nixpkgs/nixos/modules/services/databases/pgbouncer.nix>

## services.pgbouncer.settings.peers

Optional. Detailed information about PostgreSQL database definitions: https://www.pgbouncer.org/config.html#section-peers Type: attribute set of string Default: { } Example: { "1" = "host=host1.example.com"; "2" = "host=/tmp/pgbouncer-2 port=5555"; } Declared by: <nixpkgs/nixos/modules/services/databases/pgbouncer.nix>

## services.pgbouncer.settings.users

Optional. Detailed information about PostgreSQL user definitions: https://www.pgbouncer.org/config.html#section-users Type: attribute set of string Default: { } Example: { user1 = "pool_mode=session"; } Declared by: <nixpkgs/nixos/modules/services/databases/pgbouncer.nix>
