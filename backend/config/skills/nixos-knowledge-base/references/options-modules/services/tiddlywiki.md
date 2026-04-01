---
module: services.tiddlywiki
option_count: 2
source: options.html
---

# services.tiddlywiki

## services.tiddlywiki.enable

Whether to enable TiddlyWiki nodejs server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/tiddlywiki.nix>

## services.tiddlywiki.listenOptions

Parameters passed to --listen command. Refer to https://tiddlywiki.com/#WebServer for details on supported values. Type: attribute set Default: { } Example: { credentials = "../credentials.csv"; port = 3456; readers = "(authenticated)"; } Declared by: <nixpkgs/nixos/modules/services/misc/tiddlywiki.nix>
