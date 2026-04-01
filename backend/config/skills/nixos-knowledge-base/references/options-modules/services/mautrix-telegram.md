---
module: services.mautrix-telegram
option_count: 6
source: options.html
---

# services.mautrix-telegram

## services.mautrix-telegram.enable

Whether to enable Mautrix-Telegram, a Matrix-Telegram hybrid puppeting/relaybot bridge. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/matrix/mautrix-telegram.nix>

## services.mautrix-telegram.package

The mautrix-telegram package to use. Type: package Default: pkgs.mautrix-telegram Declared by: <nixpkgs/nixos/modules/services/matrix/mautrix-telegram.nix>

## services.mautrix-telegram.environmentFile

File containing environment variables to be passed to the mautrix-telegram service, in which secret tokens can be specified securely by defining values for e.g. MAUTRIX_TELEGRAM_APPSERVICE_AS_TOKEN, MAUTRIX_TELEGRAM_APPSERVICE_HS_TOKEN, MAUTRIX_TELEGRAM_TELEGRAM_API_ID, MAUTRIX_TELEGRAM_TELEGRAM_API_HASH and optionally MAUTRIX_TELEGRAM_TELEGRAM_BOT_TOKEN. These environment variables can also be used to set other options by replacing hierarchy levels by ., converting the name to uppercase and prepending MAUTRIX_TELEGRAM_. For example, the first value above maps to settings.appservice.as_token. The environment variable values can be prefixed with json:: to have them be parsed as JSON. For example, login_shared_secret_map can be set as follows: MAUTRIX_TELEGRAM_BRIDGE_LOGIN_SHARED_SECRET_MAP=json::{"example.com":"secret"}. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/matrix/mautrix-telegram.nix>

## services.mautrix-telegram.registerToSynapse

Whether to add the bridge’s app service registration file to services.matrix-synapse.settings.app_service_config_files. Type: boolean Default: config.services.matrix-synapse.enable Declared by: <nixpkgs/nixos/modules/services/matrix/mautrix-telegram.nix>

## services.mautrix-telegram.serviceDependencies

List of Systemd services to require and wait for when starting the application service. Type: list of string Default: lib.optional config.services.matrix-synapse.enable config.services.matrix-synapse.serviceUnit Declared by: <nixpkgs/nixos/modules/services/matrix/mautrix-telegram.nix>

## services.mautrix-telegram.settings

config.yaml configuration as a Nix attribute set. Configuration options should match those described in example-config.yaml. Secret tokens should be specified using environmentFile instead of this world-readable attribute set. Type: JSON value Default: { appservice = { address = "http://localhost:8080"; database = "sqlite:////var/lib/mautrix-telegram/mautrix-telegram.db"; database_opts = { }; hostname = "0.0.0.0"; port = 8080; }; bridge = { double_puppet_server_map = { }; login_shared_secret_map = { }; permissions = { "*" = "relaybot"; }; relaybot = { whitelist = [ ]; }; }; homeserver = { software = "standard"; }; logging = { formatters = { precise = { format = "[%(levelname)s@%(name)s] %(message)s"; }; }; handlers = { console = { class = "logging.StreamHandler"; formatter = "precise"; }; }; loggers = { aiohttp = { level = "WARNING"; }; mau = { level = "INFO"; }; telethon = { level = "INFO"; }; }; root = { handlers = [ "console" ]; level = "INFO"; }; version = 1; }; } Example: { homeserver = { address = "http://localhost:8008"; domain = "public-domain.tld"; }; appservice.public = { prefix = "/public"; external = "https://public-appservice-address/public"; }; bridge.permissions = { "example.com" = "full"; "@admin:example.com" = "admin"; }; telegram = { connection.use_ipv6 = true; }; } Declared by: <nixpkgs/nixos/modules/services/matrix/mautrix-telegram.nix>
