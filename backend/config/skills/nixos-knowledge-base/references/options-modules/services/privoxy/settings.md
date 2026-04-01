---
module: services.privoxy.settings
option_count: 4
source: options.html
---

# services.privoxy.settings

## services.privoxy.settings.enable-edit-actions

Whether the web-based actions file editor may be used. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/privoxy.nix>

## services.privoxy.settings.actionsfile

List of paths to Privoxy action files. These paths may either be absolute or relative to the privoxy configuration directory. Type: list of string Default: [ "match-all.action" "default.action" ] Declared by: <nixpkgs/nixos/modules/services/networking/privoxy.nix>

## services.privoxy.settings.filterfile

List of paths to Privoxy filter files. These paths may either be absolute or relative to the privoxy configuration directory. Type: list of string Default: [ "default.filter" ] Declared by: <nixpkgs/nixos/modules/services/networking/privoxy.nix>

## services.privoxy.settings.listen-address

Pair of address:port the proxy server is listening to. Type: string or list of string Default: "127.0.0.1:8118" Declared by: <nixpkgs/nixos/modules/services/networking/privoxy.nix>
