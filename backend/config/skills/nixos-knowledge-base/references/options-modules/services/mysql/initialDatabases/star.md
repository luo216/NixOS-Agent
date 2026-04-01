---
module: services.mysql.initialDatabases.*
option_count: 2
source: options.html
---

# services.mysql.initialDatabases.*

## services.mysql.initialDatabases.*.name

The name of the database to create. Type: string Declared by: <nixpkgs/nixos/modules/services/databases/mysql.nix>

## services.mysql.initialDatabases.*.schema

The initial schema of the database; if null (the default), an empty database is created. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/databases/mysql.nix>
