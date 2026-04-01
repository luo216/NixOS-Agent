---
module: services.matrix-appservice-discord
option_count: 8
source: options.html
---

# services.matrix-appservice-discord

## services.matrix-appservice-discord.enable

Whether to enable a bridge between Matrix and Discord. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/matrix/appservice-discord.nix>

## services.matrix-appservice-discord.package

The matrix-appservice-discord package to use. Type: package Default: pkgs.matrix-appservice-discord Declared by: <nixpkgs/nixos/modules/services/matrix/appservice-discord.nix>

## services.matrix-appservice-discord.environmentFile

File containing environment variables to be passed to the matrix-appservice-discord service, in which secret tokens can be specified securely by defining values for APPSERVICE_DISCORD_AUTH_CLIENT_I_D and APPSERVICE_DISCORD_AUTH_BOT_TOKEN. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/matrix/appservice-discord.nix>

## services.matrix-appservice-discord.localpart

The user_id localpart to assign to the AS. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/matrix/appservice-discord.nix>

## services.matrix-appservice-discord.port

Port number on which the bridge should listen for internal communication with the Matrix homeserver. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9005 Declared by: <nixpkgs/nixos/modules/services/matrix/appservice-discord.nix>

## services.matrix-appservice-discord.serviceDependencies

List of Systemd services to require and wait for when starting the application service, such as the Matrix homeserver if it’s running on the same host. Type: list of string Default: lib.optional config.services.matrix-synapse.enable config.services.matrix-synapse.serviceUnit Declared by: <nixpkgs/nixos/modules/services/matrix/appservice-discord.nix>

## services.matrix-appservice-discord.settings

config.yaml configuration as a Nix attribute set. Configuration options should match those described in config.sample.yaml. config.bridge.domain and config.bridge.homeserverUrl should be set to match the public host name of the Matrix homeserver for webhooks and avatars to work. Secret tokens should be specified using environmentFile instead of this world-readable attribute set. Type: attribute set Default: { auth = { botToken = ""; clientID = ""; }; database = { filename = "/var/lib/matrix-appservice-discord/discord.db"; }; } Example: { bridge = { domain = "public-domain.tld"; homeserverUrl = "http://public-domain.tld:8008"; }; } Declared by: <nixpkgs/nixos/modules/services/matrix/appservice-discord.nix>

## services.matrix-appservice-discord.url

The URL where the application service is listening for HS requests. Type: string Default: "http://localhost:${toString config.services.matrix-appservice-discord.port}" Declared by: <nixpkgs/nixos/modules/services/matrix/appservice-discord.nix>
