---
module: services.mautrix-discord
option_count: 9
source: options.html
---

# services.mautrix-discord

## services.mautrix-discord.enable

Whether to enable Mautrix-Discord, a Matrix-Discord puppeting/relay-bot bridge. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/matrix/mautrix-discord.nix>

## services.mautrix-discord.package

The mautrix-discord package to use. Type: package Default: pkgs.mautrix-discord Declared by: <nixpkgs/nixos/modules/services/matrix/mautrix-discord.nix>

## services.mautrix-discord.dataDir

Directory to store the bridge’s configuration and database files. This directory will be created if it does not exist. Type: absolute path Default: "/var/lib/mautrix-discord" Declared by: <nixpkgs/nixos/modules/services/matrix/mautrix-discord.nix>

## services.mautrix-discord.environmentFile

File containing environment variables to substitute when copying the configuration out of Nix store to the services.mautrix-discord.dataDir. Can be used for storing the secrets without making them available in the Nix store. For example, you can set services.mautrix-discord.settings.appservice.as_token = "$MAUTRIX_DISCORD_APPSERVICE_AS_TOKEN" and then specify MAUTRIX_DISCORD_APPSERVICE_AS_TOKEN="{token}" in the environment file. This value will get substituted into the configuration file as a token. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/matrix/mautrix-discord.nix>

## services.mautrix-discord.registerToSynapse

Whether to add the bridge’s app service registration file to services.matrix-synapse.settings.app_service_config_files. Type: boolean Default: config.services.matrix-synapse.enable Declared by: <nixpkgs/nixos/modules/services/matrix/mautrix-discord.nix>

## services.mautrix-discord.registrationServiceUnit

The registration service that generates the registration file. Systemd unit (a service or a target) for other services to depend on if they need to be started after mautrix-discord registration service. This option is useful as the actual parent unit for all matrix-synapse processes changes when configuring workers. Type: string (read only) Default: "mautrix-discord-registration.service" Declared by: <nixpkgs/nixos/modules/services/matrix/mautrix-discord.nix>

## services.mautrix-discord.serviceDependencies

List of Systemd services to require and wait for when starting the application service. Type: list of string Default: '' [ cfg.registrationServiceUnit ] ++ (lib.lists.optional config.services.matrix-synapse.enable config.services.matrix-synapse.serviceUnit) ++ (lib.lists.optional config.services.matrix-conduit.enable "matrix-conduit.service") ++ (lib.lists.optional config.services.dendrite.enable "dendrite.service"); '' Declared by: <nixpkgs/nixos/modules/services/matrix/mautrix-discord.nix>

## services.mautrix-discord.serviceUnit

The systemd unit (a service or a target) for other services to depend on if they need to be started after matrix-synapse. This option is useful as the actual parent unit for all matrix-synapse processes changes when configuring workers. Type: string (read only) Default: "mautrix-discord.service" Declared by: <nixpkgs/nixos/modules/services/matrix/mautrix-discord.nix>

## services.mautrix-discord.settings

config.yaml configuration as a Nix attribute set. Configuration options should match those described in example-config.yaml. Type: open submodule of (YAML 1.1 value) Default: { } Example: { homeserver = { address = "http://localhost:8008"; domain = "public-domain.tld"; }; appservice.public = { prefix = "/public"; external = "https://public-appservice-address/public"; }; bridge.permissions = { "example.com" = "user"; "@admin:example.com" = "admin"; }; } Declared by: <nixpkgs/nixos/modules/services/matrix/mautrix-discord.nix>
