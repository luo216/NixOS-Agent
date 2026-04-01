---
module: services.screego
option_count: 4
source: options.html
---

# services.screego

## services.screego.enable

Whether to enable screego screen-sharing server for developers. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/screego.nix>

## services.screego.environmentFile

Environment file (see systemd.exec(5) “EnvironmentFile=” section for the syntax) passed to the service. This option can be used to safely include secrets in the configuration. Type: null or absolute path Default: null Example: "/run/secrets/screego-envfile" Declared by: <nixpkgs/nixos/modules/services/web-apps/screego.nix>

## services.screego.openFirewall

Open the firewall port(s). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/screego.nix>

## services.screego.settings

Screego settings passed as Nix attribute set, they will be merged with the defaults. Settings will be passed as environment variables. See https://screego.net/#/config for possible values Type: attribute set of string Default: { SCREEGO_AUTH_MODE = "turn"; SCREEGO_CLOSE_ROOM_WHEN_OWNER_LEAVES = "true"; SCREEGO_LOG_LEVEL = "info"; SCREEGO_SERVER_ADDRESS = "127.0.0.1:5050"; SCREEGO_SESSION_TIMEOUT_SECONDS = "0"; SCREEGO_TURN_ADDRESS = "0.0.0.0:3478"; SCREEGO_TURN_PORT_RANGE = "50000:55000"; } Example: { SCREEGO_EXTERNAL_IP = "dns:example.com"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/screego.nix>
