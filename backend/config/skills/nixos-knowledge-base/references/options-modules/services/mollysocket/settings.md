---
module: services.mollysocket.settings
option_count: 4
source: options.html
---

# services.mollysocket.settings

## services.mollysocket.settings.allowed_endpoints

List of UnifiedPush servers Type: list of string Default: [ "*" ] Example: [ "https://ntfy.sh" ] Declared by: <nixpkgs/nixos/modules/services/misc/mollysocket.nix>

## services.mollysocket.settings.allowed_uuids

UUIDs of Signal accounts that may use this server Type: list of string Default: [ "*" ] Example: [ "abcdef-12345-tuxyz-67890" ] Declared by: <nixpkgs/nixos/modules/services/misc/mollysocket.nix>

## services.mollysocket.settings.host

Listening address of the web server Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/misc/mollysocket.nix>

## services.mollysocket.settings.port

Listening port of the web server Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8020 Declared by: <nixpkgs/nixos/modules/services/misc/mollysocket.nix>
