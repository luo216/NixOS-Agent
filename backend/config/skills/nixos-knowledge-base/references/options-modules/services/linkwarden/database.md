---
module: services.linkwarden.database
option_count: 5
source: options.html
---

# services.linkwarden.database

## services.linkwarden.database.createLocally

Whether to enable the automatic creation of the database for Linkwarden… Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/linkwarden.nix>

## services.linkwarden.database.host

Hostname or address of the postgresql server. If an absolute path is given here, it will be interpreted as a unix socket path. Type: string Default: "/run/postgresql" Example: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/linkwarden.nix>

## services.linkwarden.database.name

The name of the Linkwarden database. Type: string Default: "linkwarden" Declared by: <nixpkgs/nixos/modules/services/web-apps/linkwarden.nix>

## services.linkwarden.database.port

Port of the postgresql server. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5432 Declared by: <nixpkgs/nixos/modules/services/web-apps/linkwarden.nix>

## services.linkwarden.database.user

The database user for Linkwarden. Type: string Default: "linkwarden" Declared by: <nixpkgs/nixos/modules/services/web-apps/linkwarden.nix>
