---
module: services.matrix-appservice-irc.settings.ircService.mediaProxy
option_count: 4
source: options.html
---

# services.matrix-appservice-irc.settings.ircService.mediaProxy

## services.matrix-appservice-irc.settings.ircService.mediaProxy.bindPort

Port that the media proxy binds to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 11111 Declared by: <nixpkgs/nixos/modules/services/matrix/appservice-irc.nix>

## services.matrix-appservice-irc.settings.ircService.mediaProxy.publicUrl

URL under which the media proxy is publicly acccessible. Type: string Example: "https://matrix.example.com/media" Declared by: <nixpkgs/nixos/modules/services/matrix/appservice-irc.nix>

## services.matrix-appservice-irc.settings.ircService.mediaProxy.signingKeyPath

Path to the signing key file for authenticated media. Type: absolute path Default: "/var/lib/matrix-appservice-irc/media-signingkey.jwk" Declared by: <nixpkgs/nixos/modules/services/matrix/appservice-irc.nix>

## services.matrix-appservice-irc.settings.ircService.mediaProxy.ttlSeconds

Lifetime in seconds, that generated URLs stay valid. Set the lifetime to 0 to prevent URLs from becoming invalid. Type: unsigned integer, meaning >=0 Default: 3600 Example: 0 Declared by: <nixpkgs/nixos/modules/services/matrix/appservice-irc.nix>
