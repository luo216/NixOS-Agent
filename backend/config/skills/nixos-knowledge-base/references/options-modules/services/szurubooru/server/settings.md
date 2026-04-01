---
module: services.szurubooru.server.settings
option_count: 8
source: options.html
---

# services.szurubooru.server.settings

## services.szurubooru.server.settings.data_dir

Path to the static files. Type: absolute path Default: "${services.szurubooru.dataDir}/data" Example: "/srv/szurubooru/data" Declared by: <nixpkgs/nixos/modules/services/web-apps/szurubooru.nix>

## services.szurubooru.server.settings.data_url

Full URL to the data endpoint. Type: string Default: "${services.szurubooru.server.settings.domain}/data/" Example: "http://example.com/content/" Declared by: <nixpkgs/nixos/modules/services/web-apps/szurubooru.nix>

## services.szurubooru.server.settings.debug

Whether to generate server logs. Type: signed integer Default: 0 Example: 1 Declared by: <nixpkgs/nixos/modules/services/web-apps/szurubooru.nix>

## services.szurubooru.server.settings.delete_source_files

Whether to delete thumbnails and source files on post delete. Type: one of “yes”, “no” Default: "no" Example: "yes" Declared by: <nixpkgs/nixos/modules/services/web-apps/szurubooru.nix>

## services.szurubooru.server.settings.domain

Full URL to the homepage of this szurubooru site (with no trailing slash). Type: string Example: "http://example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/szurubooru.nix>

## services.szurubooru.server.settings.name

Name shown in the website title and on the front page. Type: string Default: "szurubooru" Example: "Szuru" Declared by: <nixpkgs/nixos/modules/services/web-apps/szurubooru.nix>

## services.szurubooru.server.settings.secretFile

File containing a secret used to salt the users’ password hashes and generate filenames for static content. Type: absolute path Example: "/run/secrets/szurubooru-server-secret" Declared by: <nixpkgs/nixos/modules/services/web-apps/szurubooru.nix>

## services.szurubooru.server.settings.show_sql

Whether to show SQL in server logs. Type: signed integer Default: 0 Example: 1 Declared by: <nixpkgs/nixos/modules/services/web-apps/szurubooru.nix>
