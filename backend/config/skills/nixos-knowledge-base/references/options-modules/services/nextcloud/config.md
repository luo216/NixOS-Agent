---
module: services.nextcloud.config
option_count: 8
source: options.html
---

# services.nextcloud.config

## services.nextcloud.config.adminpassFile

The full path to a file that contains the admin’s password. The password is set only in the initial setup of Nextcloud by the systemd service nextcloud-setup.service. Type: null or string Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud.nix>

## services.nextcloud.config.adminuser

Username for the admin account. The username is only set during the initial setup of Nextcloud! Since the username also acts as unique ID internally, it cannot be changed later! Type: null or string Default: "root" Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud.nix>

## services.nextcloud.config.dbhost

Database host (+port) or socket path. If services.nextcloud.database.createLocally is true and services.nextcloud.config.dbtype is either pgsql or mysql, defaults to the correct Unix socket instead. Type: null or string Default: "localhost" Example: "localhost:5000" Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud.nix>

## services.nextcloud.config.dbname

Database name. Type: null or string Default: "nextcloud" Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud.nix>

## services.nextcloud.config.dbpassFile

The full path to a file that contains the database password. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud.nix>

## services.nextcloud.config.dbtableprefix

Table prefix in Nextcloud’s database. Note: since Nextcloud 20 it’s not an option anymore to create a database schema with a custom table prefix. This option only exists for backwards compatibility with installations that were originally provisioned with Nextcloud <20. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud.nix>

## services.nextcloud.config.dbtype

Database type. Type: null or one of “sqlite”, “pgsql”, “mysql” Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud.nix>

## services.nextcloud.config.dbuser

Database user. Type: null or string Default: "nextcloud" Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud.nix>
