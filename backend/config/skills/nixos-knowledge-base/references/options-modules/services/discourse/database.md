---
module: services.discourse.database
option_count: 7
source: options.html
---

# services.discourse.database

## services.discourse.database.createLocally

Whether a database should be automatically created on the local host. Set this to false if you plan on provisioning a local database yourself. This has no effect if services.discourse.database.host is customized. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>

## services.discourse.database.host

Discourse database hostname. null means “prefer local unix socket connection”. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>

## services.discourse.database.ignorePostgresqlVersion

Whether to allow other versions of PostgreSQL than the recommended one. Only effective when services.discourse.database.createLocally is enabled. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>

## services.discourse.database.name

Discourse database name. Type: string Default: "discourse" Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>

## services.discourse.database.passwordFile

File containing the Discourse database user password. This should be a string, not a nix path, since nix paths are copied into the world-readable nix store. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>

## services.discourse.database.pool

Database connection pool size. Type: signed integer Default: 8 Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>

## services.discourse.database.username

Discourse database user. Type: string Default: "discourse" Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>
