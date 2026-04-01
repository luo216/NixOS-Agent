---
module: services.pretix.settings.database
option_count: 4
source: options.html
---

# services.pretix.settings.database

## services.pretix.settings.database.backend

Database backend to use. Only postgresql is recommended for production setups. Type: one of “sqlite3”, “postgresql” Default: "postgresql" Declared by: <nixpkgs/nixos/modules/services/web-apps/pretix.nix>

## services.pretix.settings.database.host

Database host or socket path. Type: null or string Default: if config.services.pretix.settings..database.backend == "postgresql" then "/run/postgresql" else null Declared by: <nixpkgs/nixos/modules/services/web-apps/pretix.nix>

## services.pretix.settings.database.name

Database name. Type: string Default: "pretix" Declared by: <nixpkgs/nixos/modules/services/web-apps/pretix.nix>

## services.pretix.settings.database.user

Database username. Type: string Default: "pretix" Declared by: <nixpkgs/nixos/modules/services/web-apps/pretix.nix>
