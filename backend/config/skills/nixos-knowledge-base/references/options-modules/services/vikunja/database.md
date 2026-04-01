---
module: services.vikunja.database
option_count: 5
source: options.html
---

# services.vikunja.database

## services.vikunja.database.database

Database name. Type: string Default: "vikunja" Declared by: <nixpkgs/nixos/modules/services/web-apps/vikunja.nix>

## services.vikunja.database.host

Database host address. Can also be a socket. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/vikunja.nix>

## services.vikunja.database.path

Path to the sqlite3 database file. Type: string Default: "/var/lib/vikunja/vikunja.db" Declared by: <nixpkgs/nixos/modules/services/web-apps/vikunja.nix>

## services.vikunja.database.type

Database engine to use. Type: one of “sqlite”, “mysql”, “postgres” Default: "sqlite" Example: "postgres" Declared by: <nixpkgs/nixos/modules/services/web-apps/vikunja.nix>

## services.vikunja.database.user

Database user. Type: string Default: "vikunja" Declared by: <nixpkgs/nixos/modules/services/web-apps/vikunja.nix>
