---
module: services.atuin.database
option_count: 2
source: options.html
---

# services.atuin.database

## services.atuin.database.createLocally

Create the database and database user locally. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/misc/atuin.nix>

## services.atuin.database.uri

URI to the database. Can be set to null in which case ATUIN_DB_URI should be set through an EnvironmentFile Type: null or string Default: "postgresql:///atuin?host=/run/postgresql" Example: "postgresql://atuin@localhost:5432/atuin" Declared by: <nixpkgs/nixos/modules/services/misc/atuin.nix>
