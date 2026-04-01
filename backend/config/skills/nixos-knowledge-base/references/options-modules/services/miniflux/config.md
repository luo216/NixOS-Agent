---
module: services.miniflux.config
option_count: 5
source: options.html
---

# services.miniflux.config

## services.miniflux.config.CREATE_ADMIN

Create an admin user from environment variables. Type: signed integer or boolean convertible to it Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/miniflux.nix>

## services.miniflux.config.DATABASE_URL

Postgresql connection parameters. See lib/pq for more details. Type: null or string Default: if createDatabaseLocally then "user=miniflux host=/run/postgresql dbname=miniflux" else null Declared by: <nixpkgs/nixos/modules/services/web-apps/miniflux.nix>

## services.miniflux.config.LISTEN_ADDR

Address to listen on. Use absolute path for a Unix socket. Multiple addresses can be specified, separated by commas. Type: string Default: "localhost:8080" Example: "127.0.0.1:8080, 127.0.0.1:8081" Declared by: <nixpkgs/nixos/modules/services/web-apps/miniflux.nix>

## services.miniflux.config.RUN_MIGRATIONS

Run database migrations. Type: signed integer or boolean convertible to it Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/miniflux.nix>

## services.miniflux.config.WATCHDOG

Enable or disable Systemd watchdog. Type: signed integer or boolean convertible to it Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/miniflux.nix>
