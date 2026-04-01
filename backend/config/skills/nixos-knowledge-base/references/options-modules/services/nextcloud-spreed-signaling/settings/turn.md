---
module: services.nextcloud-spreed-signaling.settings.turn
option_count: 3
source: options.html
---

# services.nextcloud-spreed-signaling.settings.turn

## services.nextcloud-spreed-signaling.settings.turn.apikeyFile

The path to the file containing the value for turn.apikey. API key that the MCU will need to send when requesting TURN credentials. Type: null or absolute path Default: null Example: "/run/secrets/turn.apikey" Declared by: <nixpkgs/nixos/modules/services/networking/nextcloud-spreed-signaling.nix>

## services.nextcloud-spreed-signaling.settings.turn.secretFile

The path to the file containing the value for turn.secret. The shared secret to use for generating TURN credentials. This must be the same as on the TURN server. Type: null or absolute path Default: null Example: "/run/secrets/turn.secret" Declared by: <nixpkgs/nixos/modules/services/networking/nextcloud-spreed-signaling.nix>

## services.nextcloud-spreed-signaling.settings.turn.servers

A list of TURN servers to use. Leave empty to disable the TURN REST API. Type: list of string Default: [ ] Example: [ "turn:1.2.3.4:9991?transport=udp" ] Declared by: <nixpkgs/nixos/modules/services/networking/nextcloud-spreed-signaling.nix>
