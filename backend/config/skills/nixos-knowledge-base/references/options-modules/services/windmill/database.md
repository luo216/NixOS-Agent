---
module: services.windmill.database
option_count: 5
source: options.html
---

# services.windmill.database

## services.windmill.database.createLocally

Whether to create a local database automatically. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/windmill.nix>

## services.windmill.database.name

Database name. Type: string Default: "windmill" Declared by: <nixpkgs/nixos/modules/services/web-apps/windmill.nix>

## services.windmill.database.url

Database url. Note that any secret here would be world-readable. Use services.windmill.database.urlPath unstead to include secrets in the url. Type: string Default: "postgres://\$\{config.services.windmill.database.name}?host=/var/run/postgresql"; Declared by: <nixpkgs/nixos/modules/services/web-apps/windmill.nix>

## services.windmill.database.urlPath

Path to the file containing the database url windmill should connect to. This is not deducted from database user and name as it might contain a secret Type: null or absolute path Default: null Example: "config.age.secrets.DATABASE_URL_FILE.path" Declared by: <nixpkgs/nixos/modules/services/web-apps/windmill.nix>

## services.windmill.database.user

Database user. Type: string Default: "windmill" Declared by: <nixpkgs/nixos/modules/services/web-apps/windmill.nix>
