---
module: services.peertube.database
option_count: 6
source: options.html
---

# services.peertube.database

## services.peertube.database.createLocally

Configure local PostgreSQL database server for PeerTube. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube.nix>

## services.peertube.database.host

Database host address or unix socket. Type: string Default: if config.services.peertube.database.createLocally then "/run/postgresql" else null Example: "192.168.15.47" Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube.nix>

## services.peertube.database.name

Database name. Type: string Default: "peertube" Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube.nix>

## services.peertube.database.passwordFile

Password for PostgreSQL database. Type: null or absolute path Default: null Example: "/run/keys/peertube/password-postgresql" Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube.nix>

## services.peertube.database.port

Database host port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5432 Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube.nix>

## services.peertube.database.user

Database user. Type: string Default: "peertube" Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube.nix>
