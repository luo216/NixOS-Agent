---
module: services.maubot.settings.server
option_count: 6
source: options.html
---

# services.maubot.settings.server

## services.maubot.settings.server.hostname

The IP to listen on Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/matrix/maubot.nix>

## services.maubot.settings.server.override_resource_path

Override path from where to load UI resources. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/matrix/maubot.nix>

## services.maubot.settings.server.plugin_base_path

The base path for plugin endpoints. The instance ID will be appended directly. Type: string Default: "${config.services.maubot.settings.server.ui_base_path}/plugin/" Declared by: <nixpkgs/nixos/modules/services/matrix/maubot.nix>

## services.maubot.settings.server.port

The port to listen on Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 29316 Declared by: <nixpkgs/nixos/modules/services/matrix/maubot.nix>

## services.maubot.settings.server.public_url

Public base URL where the server is visible. Type: string Default: "http://${config.services.maubot.settings.server.hostname}:${toString config.services.maubot.settings.server.port}" Declared by: <nixpkgs/nixos/modules/services/matrix/maubot.nix>

## services.maubot.settings.server.ui_base_path

The base path for the UI. Type: string Default: "/_matrix/maubot" Declared by: <nixpkgs/nixos/modules/services/matrix/maubot.nix>
