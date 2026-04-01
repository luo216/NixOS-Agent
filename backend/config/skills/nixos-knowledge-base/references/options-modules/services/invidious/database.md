---
module: services.invidious.database
option_count: 4
source: options.html
---

# services.invidious.database

## services.invidious.database.createLocally

Whether to create a local database with PostgreSQL. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/invidious.nix>

## services.invidious.database.host

The database host Invidious should use. If null, the local unix socket is used. Otherwise TCP is used. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/invidious.nix>

## services.invidious.database.passwordFile

Path to file containing the database password. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/invidious.nix>

## services.invidious.database.port

The port of the database Invidious should use. Defaults to the the default postgresql port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: config.services.postgresql.settings.port Declared by: <nixpkgs/nixos/modules/services/web-apps/invidious.nix>
