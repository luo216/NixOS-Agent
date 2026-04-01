---
module: services.part-db
option_count: 8
source: options.html
---

# services.part-db

## services.part-db.enable

Whether to enable PartDB. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/part-db.nix>

## services.part-db.enableNginx

Whether to enable nginx or not. If enabled, an nginx virtual host will be created for access to part-db. If not enabled, then you may use ${config.services.part-db.package}/public as your document root in whichever webserver you wish to setup. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/part-db.nix>

## services.part-db.enablePostgresql

Whether to configure the postgresql database for part-db. If enabled, a database and user will be created for part-db. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/part-db.nix>

## services.part-db.package

The part-db package to use. Type: package Default: pkgs.part-db Declared by: <nixpkgs/nixos/modules/services/web-apps/part-db.nix>

## services.part-db.phpPackage

The php package to use. Type: package Default: pkgs.php Declared by: <nixpkgs/nixos/modules/services/web-apps/part-db.nix>

## services.part-db.poolConfig

Options for the PartDB PHP pool. See the documentation on <literal>php-fpm.conf</literal> for details on configuration directives. Type: attribute set of (string or signed integer or boolean) Default: '' { "pm" = "dynamic"; "pm.max_children" = 32; "pm.start_servers" = 2; "pm.min_spare_servers" = 2; "pm.max_spare_servers" = 4; "pm.max_requests" = 500; } '' Declared by: <nixpkgs/nixos/modules/services/web-apps/part-db.nix>

## services.part-db.settings

Options for part-db configuration. Refer to https://github.com/Part-DB/Part-DB-server/blob/master/.env for details on supported values. All <option>_FILE values supported by upstream are supported here. Type: open submodule of attribute set of (string or signed integer or boolean) Default: { } Example: { DATABASE_URL = "postgresql://db_user@localhost/db_name?serverVersion=16.6&charset=utf8&host=/var/run/postgresql"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/part-db.nix>

## services.part-db.virtualHost

The virtualHost at which you wish part-db to be served. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/part-db.nix>
