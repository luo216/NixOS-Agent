---
module: services.szurubooru.database
option_count: 5
source: options.html
---

# services.szurubooru.database

## services.szurubooru.database.host

Host on which the PostgreSQL database runs. Type: string Default: "localhost" Example: "192.168.1.2" Declared by: <nixpkgs/nixos/modules/services/web-apps/szurubooru.nix>

## services.szurubooru.database.name

Name of the PostgreSQL database. Type: string Default: szurubooru.database.name Example: "szuru" Declared by: <nixpkgs/nixos/modules/services/web-apps/szurubooru.nix>

## services.szurubooru.database.passwordFile

A file containing the password for the PostgreSQL user. Type: absolute path Example: "/run/secrets/szurubooru-db-password" Declared by: <nixpkgs/nixos/modules/services/web-apps/szurubooru.nix>

## services.szurubooru.database.port

The port under which PostgreSQL listens to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5432 Declared by: <nixpkgs/nixos/modules/services/web-apps/szurubooru.nix>

## services.szurubooru.database.user

PostgreSQL user. Type: string Default: "szurubooru" Example: "szuru" Declared by: <nixpkgs/nixos/modules/services/web-apps/szurubooru.nix>
