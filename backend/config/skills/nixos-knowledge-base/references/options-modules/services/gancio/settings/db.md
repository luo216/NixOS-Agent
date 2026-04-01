---
module: services.gancio.settings.db
option_count: 4
source: options.html
---

# services.gancio.settings.db

## services.gancio.settings.db.database

Name of the PostgreSQL database Type: null or string (read only) Default: "if config.services.gancio.settings.db.dialect == \"postgres\" then cfg.user else null" Declared by: <nixpkgs/nixos/modules/services/web-apps/gancio.nix>

## services.gancio.settings.db.dialect

The database dialect to use Type: one of “sqlite”, “postgres” Default: "sqlite" Declared by: <nixpkgs/nixos/modules/services/web-apps/gancio.nix>

## services.gancio.settings.db.host

Connection string for the PostgreSQL database Type: null or string (read only) Default: "if config.services.gancio.settings.db.dialect == \"postgres\" then \"/run/postgresql\" else null" Declared by: <nixpkgs/nixos/modules/services/web-apps/gancio.nix>

## services.gancio.settings.db.storage

Location for the SQLite database. Type: null or string (read only) Default: "if config.services.gancio.settings.db.dialect == \"sqlite\" then \"/var/lib/gancio/db.sqlite\" else null" Declared by: <nixpkgs/nixos/modules/services/web-apps/gancio.nix>
