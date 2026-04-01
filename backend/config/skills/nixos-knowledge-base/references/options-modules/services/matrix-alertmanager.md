---
module: services.matrix-alertmanager
option_count: 9
source: options.html
---

# services.matrix-alertmanager

## services.matrix-alertmanager.enable

Whether to enable matrix-alertmanager. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/matrix/matrix-alertmanager.nix>

## services.matrix-alertmanager.package

The matrix-alertmanager package to use. Type: package Default: pkgs.matrix-alertmanager Declared by: <nixpkgs/nixos/modules/services/matrix/matrix-alertmanager.nix>

## services.matrix-alertmanager.homeserverUrl

URL of the Matrix homeserver to use. Type: string Example: "https://matrix.example.com" Declared by: <nixpkgs/nixos/modules/services/matrix/matrix-alertmanager.nix>

## services.matrix-alertmanager.matrixRooms

Combination of Alertmanager receiver(s) and rooms for the bot to join. Each Alertmanager receiver can be mapped to post to a matrix room. Note, you must use a room ID and not a room alias/name. Room IDs start with a “!”. Type: list of (submodule) Example: [ { receivers = [ "receiver1" "receiver2" ]; roomId = "!roomid@example.com"; } { receivers = [ "receiver3" ]; roomId = "!differentroomid@example.com"; } ] Declared by: <nixpkgs/nixos/modules/services/matrix/matrix-alertmanager.nix>

## services.matrix-alertmanager.matrixUser

Matrix user to use for the bot. Type: string Example: "@alertmanageruser:example.com" Declared by: <nixpkgs/nixos/modules/services/matrix/matrix-alertmanager.nix>

## services.matrix-alertmanager.mention

Makes the bot mention @room when posting an alert Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/matrix/matrix-alertmanager.nix>

## services.matrix-alertmanager.port

Port that matrix-alertmanager listens on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Declared by: <nixpkgs/nixos/modules/services/matrix/matrix-alertmanager.nix>

## services.matrix-alertmanager.secretFile

File that contains a secret for the Alertmanager webhook. Type: absolute path not in the Nix store Declared by: <nixpkgs/nixos/modules/services/matrix/matrix-alertmanager.nix>

## services.matrix-alertmanager.tokenFile

File that contains a valid Matrix token for the Matrix user. Type: absolute path not in the Nix store Declared by: <nixpkgs/nixos/modules/services/matrix/matrix-alertmanager.nix>
