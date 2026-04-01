---
module: services.maubot.settings
option_count: 10
source: options.html
---

# services.maubot.settings

## services.maubot.settings.admins

List of administrator users. Plaintext passwords will be bcrypted on startup. Set empty password to prevent normal login. Root is a special user that can’t have a password and will always exist. Type: attribute set of string Default: { root = ""; } Declared by: <nixpkgs/nixos/modules/services/matrix/maubot.nix>

## services.maubot.settings.api_features

API feature switches. Type: attribute set of boolean Default: { client = true; client_auth = true; client_proxy = true; dev_open = true; instance = true; instance_database = true; log = true; login = true; plugin = true; plugin_upload = true; } Declared by: <nixpkgs/nixos/modules/services/matrix/maubot.nix>

## services.maubot.settings.crypto_database

Separate database URL for the crypto database. By default, the regular database is also used for crypto. Type: string Default: "default" Example: "postgresql://username:password@hostname/dbname" Declared by: <nixpkgs/nixos/modules/services/matrix/maubot.nix>

## services.maubot.settings.database

The full URI to the database. SQLite and Postgres are fully supported. Other DBMSes supported by SQLAlchemy may or may not work. Type: string Default: "sqlite:maubot.db" Example: "postgresql://username:password@hostname/dbname" Declared by: <nixpkgs/nixos/modules/services/matrix/maubot.nix>

## services.maubot.settings.database_opts

Additional arguments for asyncpg.create_pool() or sqlite3.connect() Type: attribute set Default: { } Declared by: <nixpkgs/nixos/modules/services/matrix/maubot.nix>

## services.maubot.settings.homeservers

Known homeservers. This is required for the mbc auth command and also allows more convenient access from the management UI. If you want to specify registration secrets, pass this via extraConfigFile instead. Type: attribute set of (submodule) Default: { "matrix.org" = { url = "https://matrix-client.matrix.org"; }; } Declared by: <nixpkgs/nixos/modules/services/matrix/maubot.nix>

## services.maubot.settings.logging

Python logging configuration. See section 16.7.2 of the Python documentation for more info. Type: attribute set Default: { formatters = { colored = { "()" = "maubot.lib.color_log.ColorFormatter"; format = "[%(asctime)s] [%(levelname)s@%(name)s] %(message)s"; }; normal = { format = "[%(asctime)s] [%(levelname)s@%(name)s] %(message)s"; }; }; handlers = { console = { class = "logging.StreamHandler"; formatter = "colored"; }; file = { backupCount = 10; class = "logging.handlers.RotatingFileHandler"; filename = "./maubot.log"; formatter = "normal"; maxBytes = 10485760; }; }; loggers = { aiohttp = { level = "INFO"; }; mau = { level = "DEBUG"; }; maubot = { level = "DEBUG"; }; }; root = { handlers = [ "file" "console" ]; level = "DEBUG"; }; version = 1; } Declared by: <nixpkgs/nixos/modules/services/matrix/maubot.nix>

## services.maubot.settings.plugin_databases

Plugin database settings Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/matrix/maubot.nix>

## services.maubot.settings.plugin_directories

Plugin directory paths Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/matrix/maubot.nix>

## services.maubot.settings.server

Listener config Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/matrix/maubot.nix>
