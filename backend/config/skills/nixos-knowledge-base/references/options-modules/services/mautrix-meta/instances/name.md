---
module: services.mautrix-meta.instances.<name>
option_count: 9
source: options.html
---

# services.mautrix-meta.instances.<name>

## services.mautrix-meta.instances.<name>.enable

Whether to enable Mautrix-Meta, a Matrix <-> Facebook and Matrix <-> Instagram hybrid puppeting/relaybot bridge. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/matrix/mautrix-meta.nix>

## services.mautrix-meta.instances.<name>.dataDir

Path to the directory with database, registration, and other data for the bridge service. This path is relative to /var/lib, it cannot start with ../ (it cannot be outside of /var/lib). Type: string Default: "mautrix-meta-‹name›" Declared by: <nixpkgs/nixos/modules/services/matrix/mautrix-meta.nix>

## services.mautrix-meta.instances.<name>.environmentFile

File containing environment variables to substitute when copying the configuration out of Nix store to the services.mautrix-meta.dataDir. Can be used for storing the secrets without making them available in the Nix store. For example, you can set services.mautrix-meta.settings.appservice.as_token = "$MAUTRIX_META_APPSERVICE_AS_TOKEN" and then specify MAUTRIX_META_APPSERVICE_AS_TOKEN="{token}" in the environment file. This value will get substituted into the configuration file as as token. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/matrix/mautrix-meta.nix>

## services.mautrix-meta.instances.<name>.registerToSynapse

Whether to add registration file to services.matrix-synapse.settings.app_service_config_files and make Synapse wait for registration service. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/matrix/mautrix-meta.nix>

## services.mautrix-meta.instances.<name>.registrationFile

Path to the yaml registration file of the appservice. Type: absolute path (read only) Declared by: <nixpkgs/nixos/modules/services/matrix/mautrix-meta.nix>

## services.mautrix-meta.instances.<name>.registrationServiceUnit

The registration service that generates the registration file. Systemd unit (a service or a target) for other services to depend on if they need to be started after mautrix-meta registration service. This option is useful as the actual parent unit for all matrix-synapse processes changes when configuring workers. Type: string (read only) Declared by: <nixpkgs/nixos/modules/services/matrix/mautrix-meta.nix>

## services.mautrix-meta.instances.<name>.serviceDependencies

List of Systemd services to require and wait for when starting the application service. Type: list of string Default: '' [ config.registrationServiceUnit ] ++ (lib.lists.optional upperConfig.services.matrix-synapse.enable upperConfig.services.matrix-synapse.serviceUnit) ++ (lib.lists.optional upperConfig.services.matrix-conduit.enable "matrix-conduit.service") ++ (lib.lists.optional upperConfig.services.dendrite.enable "dendrite.service"); '' Declared by: <nixpkgs/nixos/modules/services/matrix/mautrix-meta.nix>

## services.mautrix-meta.instances.<name>.serviceUnit

The systemd unit (a service or a target) for other services to depend on if they need to be started after matrix-synapse. This option is useful as the actual parent unit for all matrix-synapse processes changes when configuring workers. Type: string (read only) Declared by: <nixpkgs/nixos/modules/services/matrix/mautrix-meta.nix>

## services.mautrix-meta.instances.<name>.settings

config.yaml configuration as a Nix attribute set. Configuration options should match those described in example-config.yaml. Secret tokens should be specified using environmentFile instead Type: YAML 1.1 value Default: '' { homeserver = { software = "standard"; address = "https://''${config.settings.homeserver.domain}"; }; appservice = { database = { type = "sqlite3-fk-wal"; uri = "file:''${fullDataDir config}/mautrix-meta.db?_txlock=immediate"; }; hostname = "localhost"; port = 29319; address = "http://''${config.settings.appservice.hostname}:''${toString config.settings.appservice.port}"; }; bridge = { # Require encryption by default to make the bridge more secure encryption = { allow = true; default = true; require = true; # Recommended options from mautrix documentation # for optimal security. delete_keys = { dont_store_outbound = true; ratchet_on_decrypt = true; delete_fully_used_on_decrypt = true; delete_prev_on_new_session = true; delete_on_device_delete = true; periodically_delete_expired = true; delete_outdated_inbound = true; }; verification_levels = { receive = "cross-signed-tofu"; send = "cross-signed-tofu"; share = "cross-signed-tofu"; }; }; }; logging = { min_level = "info"; writers = lib.singleton { type = "stdout"; format = "pretty-colored"; time_format = " "; }; }; }; '' Declared by: <nixpkgs/nixos/modules/services/matrix/mautrix-meta.nix>
