---
module: services.mautrix-whatsapp
option_count: 6
source: options.html
---

# services.mautrix-whatsapp

## services.mautrix-whatsapp.enable

Whether to enable mautrix-whatsapp, a Matrix-WhatsApp puppeting bridge. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/matrix/mautrix-whatsapp.nix>

## services.mautrix-whatsapp.package

The mautrix-whatsapp package to use. Type: package Default: pkgs.mautrix-whatsapp Declared by: <nixpkgs/nixos/modules/services/matrix/mautrix-whatsapp.nix>

## services.mautrix-whatsapp.environmentFile

File containing environment variables to be passed to the mautrix-whatsapp service. If an environment variable MAUTRIX_WHATSAPP_BRIDGE_LOGIN_SHARED_SECRET is set, then its value will be used in the configuration file for the option double_puppet.secrets without leaking it to the store, using the configured homeserver.domain as key. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/matrix/mautrix-whatsapp.nix>

## services.mautrix-whatsapp.registerToSynapse

Whether to add the bridge’s app service registration file to services.matrix-synapse.settings.app_service_config_files. Type: boolean Default: config.services.matrix-synapse.enable Declared by: <nixpkgs/nixos/modules/services/matrix/mautrix-whatsapp.nix>

## services.mautrix-whatsapp.serviceDependencies

List of systemd units to require and wait for when starting the application service. Type: list of string Default: optional config.services.matrix-synapse.enable config.services.matrix-synapse.serviceUnit ++ optional config.services.matrix-conduit.enable "conduit.service" Declared by: <nixpkgs/nixos/modules/services/matrix/mautrix-whatsapp.nix>

## services.mautrix-whatsapp.settings

config.yaml configuration as a Nix attribute set. Configuration options should match those described in the example configuration. Get an example configuration by executing mautrix-whatsapp -c example.yaml --generate-example-config Secret tokens should be specified using environmentFile instead of this world-readable attribute set. Type: JSON value Default: { appservice = { as_token = ""; bot = { displayname = "WhatsApp Bridge Bot"; username = "whatsappbot"; }; hostname = "[::]"; hs_token = ""; id = "whatsapp"; port = 29318; username_template = "whatsapp_{{.}}"; }; bridge = { command_prefix = "!wa"; permissions = { "*" = "relay"; }; relay = { enabled = true; }; }; database = { type = "sqlite3-fk-wal"; uri = "file:/var/lib/mautrix-whatsapp/mautrix-whatsapp.db?_txlock=immediate"; }; direct_media = { server_key = ""; }; double_puppet = { secrets = { }; servers = { }; }; encryption = { pickle_key = ""; }; homeserver = { address = "http://localhost:8448"; }; logging = { min_level = "info"; writers = [ { format = "pretty-colored"; time_format = " "; type = "stdout"; } ]; }; network = { displayname_template = "{{or .BusinessName .PushName .Phone}} (WA)"; history_sync = { request_full_sync = true; }; identity_change_notices = true; }; provisioning = { shared_secret = ""; }; public_media = { signing_key = ""; }; } Example: { appservice = { ephemeral_events = false; id = "whatsapp"; }; backfill = { enabled = true; }; bridge = { mute_only_on_create = false; permissions = { "example.com" = "user"; }; private_chat_portal_meta = true; }; database = { type = "postgres"; uri = "postgresql:///mautrix_whatsapp?host=/run/postgresql"; }; encryption = { allow = true; default = true; pickle_key = "$ENCRYPTION_PICKLE_KEY"; require = true; }; homeserver = { address = "http://[::1]:8008"; domain = "my-domain.tld"; }; matrix = { message_status_events = true; }; provisioning = { shared_secret = "disable"; }; } Declared by: <nixpkgs/nixos/modules/services/matrix/mautrix-whatsapp.nix>
