---
module: services.mastodon.database
option_count: 6
source: options.html
---

# services.mastodon.database

## services.mastodon.database.createLocally

Configure local PostgreSQL database server for Mastodon. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/mastodon.nix>

## services.mastodon.database.host

Database host address or unix socket. Type: string Default: "/run/postgresql" Example: "192.168.23.42" Declared by: <nixpkgs/nixos/modules/services/web-apps/mastodon.nix>

## services.mastodon.database.name

Database name. Type: string Default: "mastodon" Declared by: <nixpkgs/nixos/modules/services/web-apps/mastodon.nix>

## services.mastodon.database.passwordFile

A file containing the password corresponding to database.user. Type: null or absolute path Default: null Example: "/var/lib/mastodon/secrets/db-password" Declared by: <nixpkgs/nixos/modules/services/web-apps/mastodon.nix>

## services.mastodon.database.port

Database host port. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: if config.services.mastodon.database.createLocally then null else 5432 Declared by: <nixpkgs/nixos/modules/services/web-apps/mastodon.nix>

## services.mastodon.database.user

Database user. Type: string Default: "mastodon" Declared by: <nixpkgs/nixos/modules/services/web-apps/mastodon.nix>
