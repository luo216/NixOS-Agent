---
module: services.firefox-syncserver.database
option_count: 4
source: options.html
---

# services.firefox-syncserver.database

## services.firefox-syncserver.database.createLocally

Whether to create database and user on the local machine if they do not exist. This includes enabling unix domain socket authentication for the configured user. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/firefox-syncserver.nix>

## services.firefox-syncserver.database.host

Database host name. localhost is treated specially and inserts systemd dependencies, other hostnames or IP addresses of the local machine do not. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/networking/firefox-syncserver.nix>

## services.firefox-syncserver.database.name

Database to use for storage. Will be created automatically if it does not exist and config.services.firefox-syncserver.database.createLocally is set. Type: string matching the pattern [a-z_][a-z0-9_]* Default: "firefox_syncserver" Declared by: <nixpkgs/nixos/modules/services/networking/firefox-syncserver.nix>

## services.firefox-syncserver.database.user

Username for database connections. Type: string Default: "firefox-syncserver" Declared by: <nixpkgs/nixos/modules/services/networking/firefox-syncserver.nix>
