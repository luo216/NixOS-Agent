---
module: services.omnom.settings.db
option_count: 2
source: options.html
---

# services.omnom.settings.db

## services.omnom.settings.db.connection

Database connection URI. Type: string Default: "${config.services.omnom.dataDir}/db.sqlite3" Declared by: <nixpkgs/nixos/modules/services/misc/omnom.nix>

## services.omnom.settings.db.type

Database type. Type: value “sqlite” (singular enum) Default: "sqlite" Declared by: <nixpkgs/nixos/modules/services/misc/omnom.nix>
