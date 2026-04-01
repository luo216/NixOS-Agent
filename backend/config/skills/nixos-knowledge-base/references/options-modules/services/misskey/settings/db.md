---
module: services.misskey.settings.db
option_count: 7
source: options.html
---

# services.misskey.settings.db

## services.misskey.settings.db.db

The database name. Type: string Default: "misskey" Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>

## services.misskey.settings.db.disableCache

Whether to disable caching queries. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>

## services.misskey.settings.db.extra

Extra connection options. Type: null or (attribute set of (YAML 1.1 value)) Default: null Example: { ssl = true; } Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>

## services.misskey.settings.db.host

The PostgreSQL host. Type: string Default: "/var/run/postgresql" Example: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>

## services.misskey.settings.db.pass

The password used for database authentication. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>

## services.misskey.settings.db.port

The PostgreSQL port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5432 Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>

## services.misskey.settings.db.user

The user used for database authentication. Type: string Default: "misskey" Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>
