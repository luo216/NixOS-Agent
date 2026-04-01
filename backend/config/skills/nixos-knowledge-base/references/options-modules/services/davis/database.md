---
module: services.davis.database
option_count: 4
source: options.html
---

# services.davis.database

## services.davis.database.createLocally

Create the database and database user locally. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/davis.nix>

## services.davis.database.driver

Database type, required in all circumstances. Type: one of “sqlite”, “postgresql”, “mysql” Default: "sqlite" Declared by: <nixpkgs/nixos/modules/services/web-apps/davis.nix>

## services.davis.database.name

Database name, only used when the databse is created locally. Type: null or string Default: "davis" Declared by: <nixpkgs/nixos/modules/services/web-apps/davis.nix>

## services.davis.database.urlFile

A file containing the database connection url. If set then it overrides all other database settings (except driver). This is mandatory if you want to use an external database, that is when services.davis.database.createLocally is false. Type: null or absolute path Default: null Example: "/run/secrets/davis-db-url" Declared by: <nixpkgs/nixos/modules/services/web-apps/davis.nix>
