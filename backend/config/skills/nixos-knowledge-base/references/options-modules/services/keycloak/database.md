---
module: services.keycloak.database
option_count: 9
source: options.html
---

# services.keycloak.database

## services.keycloak.database.caCert

The SSL / TLS CA certificate that verifies the identity of the database server. Required when PostgreSQL is used and SSL is turned on. For MySQL, if left at null, the default Java keystore is used, which should suffice if the server certificate is issued by an official CA. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/keycloak.nix>

## services.keycloak.database.createLocally

Whether a database should be automatically created on the local host. Set this to false if you plan on provisioning a local database yourself. This has no effect if services.keycloak.database.host is customized. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/keycloak.nix>

## services.keycloak.database.host

Hostname of the database to connect to. For PostgreSQL, this can also be a path to a Unix socket directory (e.g., /run/postgresql) to use peer authentication. This requires adding junixsocket-common and junixsocket-native-common to services.keycloak.plugins. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/keycloak.nix>

## services.keycloak.database.name

Database name to use when connecting to an external or manually provisioned database; has no effect when a local database is automatically provisioned. To use this with a local database, set services.keycloak.database.createLocally to false and create the database and user manually. Type: string Default: "keycloak" Declared by: <nixpkgs/nixos/modules/services/web-apps/keycloak.nix>

## services.keycloak.database.passwordFile

The path to a file containing the database password. Not required when using Unix socket authentication (peer auth) by setting host to a socket path like /run/postgresql. Type: null or absolute path Default: null Example: "/run/keys/db_password" Declared by: <nixpkgs/nixos/modules/services/web-apps/keycloak.nix>

## services.keycloak.database.port

Port of the database to connect to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: default port of selected database Declared by: <nixpkgs/nixos/modules/services/web-apps/keycloak.nix>

## services.keycloak.database.type

The type of database Keycloak should connect to. Type: one of “mysql”, “mariadb”, “postgresql” Default: "postgresql" Example: "mariadb" Declared by: <nixpkgs/nixos/modules/services/web-apps/keycloak.nix>

## services.keycloak.database.useSSL

Whether the database connection should be secured by SSL / TLS. Defaults to false for localhost and Unix socket connections. Type: boolean Default: config.services.keycloak.database.host != "localhost" && !lib.hasPrefix "/" config.services.keycloak.database.host Declared by: <nixpkgs/nixos/modules/services/web-apps/keycloak.nix>

## services.keycloak.database.username

Username to use when connecting to an external or manually provisioned database; has no effect when a local database is automatically provisioned. To use this with a local database, set services.keycloak.database.createLocally to false and create the database and user manually. Type: string Default: "keycloak" Declared by: <nixpkgs/nixos/modules/services/web-apps/keycloak.nix>
