---
module: services.roundcube.database
option_count: 5
source: options.html
---

# services.roundcube.database

## services.roundcube.database.dbname

Name of the postgresql database Type: string Default: "roundcube" Declared by: <nixpkgs/nixos/modules/services/mail/roundcube.nix>

## services.roundcube.database.host

Host of the postgresql server. If this is not set to localhost, you have to create the postgresql user and database yourself, with appropriate permissions. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/mail/roundcube.nix>

## services.roundcube.database.password

Password for the postgresql connection. Do not use: the password will be stored world readable in the store; use passwordFile instead. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/mail/roundcube.nix>

## services.roundcube.database.passwordFile

Password file for the postgresql connection. Must be formatted according to PostgreSQL .pgpass standard (see https://www.postgresql.org/docs/current/libpq-pgpass.html) but only one line, no comments and readable by user nginx. Ignored if database.host is set to localhost, as peer authentication will be used. Type: absolute path Example: pkgs.writeText "roundcube-postgres-passwd.txt" '' hostname:port:database:username:password '' Declared by: <nixpkgs/nixos/modules/services/mail/roundcube.nix>

## services.roundcube.database.username

Username for the postgresql connection. If database.host is set to localhost, a unix user and group of the same name will be created as well. Type: string Default: "roundcube" Declared by: <nixpkgs/nixos/modules/services/mail/roundcube.nix>
