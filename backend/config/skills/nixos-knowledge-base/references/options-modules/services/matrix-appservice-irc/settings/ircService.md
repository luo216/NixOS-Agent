---
module: services.matrix-appservice-irc.settings.ircService
option_count: 2
source: options.html
---

# services.matrix-appservice-irc.settings.ircService

## services.matrix-appservice-irc.settings.ircService.passwordEncryptionKeyPath

Location of the key with which IRC passwords are encrypted for storage. Will be generated on first run if not present. Type: string Default: "/var/lib/matrix-appservice-irc/passkey.pem" Declared by: <nixpkgs/nixos/modules/services/matrix/appservice-irc.nix>

## services.matrix-appservice-irc.settings.ircService.servers

IRC servers to connect to Type: open submodule of (JSON value) Declared by: <nixpkgs/nixos/modules/services/matrix/appservice-irc.nix>
