---
module: services.matrix-appservice-irc
option_count: 7
source: options.html
---

# services.matrix-appservice-irc

## services.matrix-appservice-irc.enable

Whether to enable the Matrix/IRC bridge. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/matrix/appservice-irc.nix>

## services.matrix-appservice-irc.localpart

The user_id localpart to assign to the appservice Type: string Default: "appservice-irc" Declared by: <nixpkgs/nixos/modules/services/matrix/appservice-irc.nix>

## services.matrix-appservice-irc.needBindingCap

Whether the daemon needs to bind to ports below 1024 (e.g. for the ident service) Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/matrix/appservice-irc.nix>

## services.matrix-appservice-irc.passwordEncryptionKeyLength

Length of the key to encrypt IRC passwords with Type: unsigned integer, meaning >=0 Default: 4096 Example: 8192 Declared by: <nixpkgs/nixos/modules/services/matrix/appservice-irc.nix>

## services.matrix-appservice-irc.port

The port to listen on Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8009 Declared by: <nixpkgs/nixos/modules/services/matrix/appservice-irc.nix>

## services.matrix-appservice-irc.registrationUrl

The URL where the application service is listening for homeserver requests, from the Matrix homeserver perspective. Type: string Example: "http://localhost:8009" Declared by: <nixpkgs/nixos/modules/services/matrix/appservice-irc.nix>

## services.matrix-appservice-irc.settings

Configuration for the appservice, see https://github.com/matrix-org/matrix-appservice-irc/blob/4.0.0/config.sample.yaml for supported values Type: open submodule of (JSON value) Default: { } Declared by: <nixpkgs/nixos/modules/services/matrix/appservice-irc.nix>
