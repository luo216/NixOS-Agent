---
module: services.documize
option_count: 12
source: options.html
---

# services.documize

## services.documize.enable

Whether to enable Documize Wiki. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/documize.nix>

## services.documize.package

The documize-community package to use. Type: package Default: pkgs.documize-community Declared by: <nixpkgs/nixos/modules/services/web-apps/documize.nix>

## services.documize.cert

The cert.pem file used for https. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/documize.nix>

## services.documize.db

Database specific connection string for example: MySQL/Percona/MariaDB: user:password@tcp(host:3306)/documize MySQLv8+: user:password@tcp(host:3306)/documize?allowNativePasswords=true PostgreSQL: host=localhost port=5432 dbname=documize user=admin password=secret sslmode=disable MSSQL: sqlserver://username:password@localhost:1433?database=Documize or sqlserver://sa@localhost/SQLExpress?database=Documize Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/documize.nix>

## services.documize.dbtype

Specify the database provider: mysql, percona, mariadb, postgresql, sqlserver Type: one of “mysql”, “percona”, “mariadb”, “postgresql”, “sqlserver” Default: "postgresql" Declared by: <nixpkgs/nixos/modules/services/web-apps/documize.nix>

## services.documize.forcesslport

Redirect given http port number to TLS. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/documize.nix>

## services.documize.key

The key.pem file used for https. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/documize.nix>

## services.documize.location

reserved Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/documize.nix>

## services.documize.offline

Set true for offline mode. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/documize.nix>

## services.documize.port

The http/https port number. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5001 Declared by: <nixpkgs/nixos/modules/services/web-apps/documize.nix>

## services.documize.salt

The salt string used to encode JWT tokens, if not set a random value will be generated. Type: null or string Default: null Example: "3edIYV6c8B28b19fh" Declared by: <nixpkgs/nixos/modules/services/web-apps/documize.nix>

## services.documize.stateDirectoryName

The name of the directory below /var/lib/private where documize runs in and stores, for example, backups. Type: string Default: "documize" Declared by: <nixpkgs/nixos/modules/services/web-apps/documize.nix>
