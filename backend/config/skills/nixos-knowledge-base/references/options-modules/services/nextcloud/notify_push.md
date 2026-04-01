---
module: services.nextcloud.notify_push
option_count: 12
source: options.html
---

# services.nextcloud.notify_push

## services.nextcloud.notify_push.enable

Whether to enable Notify push. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud-notify_push.nix>

## services.nextcloud.notify_push.package

The nextcloud-notify_push package to use. Type: package Default: pkgs.nextcloud-notify_push Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud-notify_push.nix>

## services.nextcloud.notify_push.bendDomainToLocalhost

Whether to add an entry to /etc/hosts for the configured nextcloud domain to point to localhost and add localhost to nextcloud’s trusted_proxies config option. This is useful when nextcloud’s domain is not a static IP address and when the reverse proxy cannot be bypassed because the backend connection is done via unix socket. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud-notify_push.nix>

## services.nextcloud.notify_push.dbhost

Database host (+port) or socket path. If services.nextcloud.database.createLocally is true and services.nextcloud.config.dbtype is either pgsql or mysql, defaults to the correct Unix socket instead. Type: null or string Default: config.services.nextcloud.config.dbhost Example: "localhost:5000" Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud-notify_push.nix>

## services.nextcloud.notify_push.dbname

Database name. Type: null or string Default: config.services.nextcloud.config.dbname Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud-notify_push.nix>

## services.nextcloud.notify_push.dbpassFile

The full path to a file that contains the database password. Type: null or string Default: config.services.nextcloud.config.dbpassFile Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud-notify_push.nix>

## services.nextcloud.notify_push.dbtableprefix

Table prefix in Nextcloud’s database. Note: since Nextcloud 20 it’s not an option anymore to create a database schema with a custom table prefix. This option only exists for backwards compatibility with installations that were originally provisioned with Nextcloud <20. Type: null or string Default: config.services.nextcloud.config.dbtableprefix Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud-notify_push.nix>

## services.nextcloud.notify_push.dbtype

Database type. Type: null or one of “sqlite”, “pgsql”, “mysql” Default: config.services.nextcloud.config.dbtype Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud-notify_push.nix>

## services.nextcloud.notify_push.dbuser

Database user. Type: null or string Default: config.services.nextcloud.config.dbuser Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud-notify_push.nix>

## services.nextcloud.notify_push.logLevel

Log level Type: one of “error”, “warn”, “info”, “debug”, “trace” Default: "error" Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud-notify_push.nix>

## services.nextcloud.notify_push.nextcloudUrl

Configure the nextcloud URL notify_push tries to connect to. Type: string Default: "http${lib.optionalString config.services.nextcloud.https "s"}://${config.services.nextcloud.hostName}" Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud-notify_push.nix>

## services.nextcloud.notify_push.socketPath

Socket path to use for notify_push Type: string Default: "/run/nextcloud-notify_push/sock" Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud-notify_push.nix>
