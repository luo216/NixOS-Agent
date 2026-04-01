---
module: services.wiki-js.settings.db
option_count: 3
source: options.html
---

# services.wiki-js.settings.db

## services.wiki-js.settings.db.db

Name of the database to use. Type: string Default: "wiki" Declared by: <nixpkgs/nixos/modules/services/web-apps/wiki-js.nix>

## services.wiki-js.settings.db.host

Hostname or socket-path to connect to. Type: string Example: "/run/postgresql" Declared by: <nixpkgs/nixos/modules/services/web-apps/wiki-js.nix>

## services.wiki-js.settings.db.type

Database driver to use for persistence. Please note that sqlite is currently not supported as the build process for it is currently not implemented in pkgs.wiki-js and it’s not recommended by upstream for production use. Type: one of “postgres”, “mysql”, “mariadb”, “mssql” Default: "postgres" Declared by: <nixpkgs/nixos/modules/services/web-apps/wiki-js.nix>
