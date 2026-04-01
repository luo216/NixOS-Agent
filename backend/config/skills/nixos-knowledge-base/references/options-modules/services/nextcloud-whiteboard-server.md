---
module: services.nextcloud-whiteboard-server
option_count: 3
source: options.html
---

# services.nextcloud-whiteboard-server

## services.nextcloud-whiteboard-server.enable

Whether to enable Nextcloud backend server for the Whiteboard app. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud-whiteboard-server.nix>

## services.nextcloud-whiteboard-server.secrets

A list of files containing the various secrets. Should be in the format expected by systemd’s EnvironmentFile directory. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud-whiteboard-server.nix>

## services.nextcloud-whiteboard-server.settings

Settings to configure backend server. Especially the Nextcloud host url has to be set. The required environment variable JWT_SECRET_KEY should be set via the secrets option. Type: attribute set of string Default: { } Example: { NEXTCLOUD_URL = "https://nextcloud.example.org"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud-whiteboard-server.nix>
