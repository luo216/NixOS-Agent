---
module: services.pretalx.settings.database
option_count: 4
source: options.html
---

# services.pretalx.settings.database

## services.pretalx.settings.database.backend

Database backend to use. Currently only PostgreSQL gets tested, and as such we don’t support any other DBMS. Type: value “postgresql” (singular enum) (read only) Default: "postgresql" Declared by: <nixpkgs/nixos/modules/services/web-apps/pretalx.nix>

## services.pretalx.settings.database.host

Database host or socket path. Type: null or absolute path Default: if config.services.pretalx.settings..database.backend == "postgresql" then "/run/postgresql" else if config.services.pretalx.settings.database.backend == "mysql" then "/run/mysqld/mysqld.sock" else null Declared by: <nixpkgs/nixos/modules/services/web-apps/pretalx.nix>

## services.pretalx.settings.database.name

Database name. Type: string Default: "pretalx" Declared by: <nixpkgs/nixos/modules/services/web-apps/pretalx.nix>

## services.pretalx.settings.database.user

Database username. Type: string Default: "pretalx" Declared by: <nixpkgs/nixos/modules/services/web-apps/pretalx.nix>
