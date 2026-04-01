---
module: services.freshrss.database
option_count: 7
source: options.html
---

# services.freshrss.database

## services.freshrss.database.host

Database host for FreshRSS. Type: null or string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/freshrss.nix>

## services.freshrss.database.name

Database name for FreshRSS. Type: null or string Default: "freshrss" Declared by: <nixpkgs/nixos/modules/services/web-apps/freshrss.nix>

## services.freshrss.database.passFile

Database password file for FreshRSS. Type: null or absolute path Default: null Example: "/run/secrets/freshrss" Declared by: <nixpkgs/nixos/modules/services/web-apps/freshrss.nix>

## services.freshrss.database.port

Database port for FreshRSS. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Example: 3306 Declared by: <nixpkgs/nixos/modules/services/web-apps/freshrss.nix>

## services.freshrss.database.tableprefix

Database table prefix for FreshRSS. Type: null or string Default: null Example: "freshrss" Declared by: <nixpkgs/nixos/modules/services/web-apps/freshrss.nix>

## services.freshrss.database.type

Database type. Type: one of “sqlite”, “pgsql”, “mysql” Default: "sqlite" Example: "pgsql" Declared by: <nixpkgs/nixos/modules/services/web-apps/freshrss.nix>

## services.freshrss.database.user

Database user for FreshRSS. Type: null or string Default: "freshrss" Declared by: <nixpkgs/nixos/modules/services/web-apps/freshrss.nix>
