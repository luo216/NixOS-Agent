---
module: services.misskey.reverseProxy.webserver
option_count: 2
source: options.html
---

# services.misskey.reverseProxy.webserver

## services.misskey.reverseProxy.webserver.caddy

Extra configuration for the caddy virtual host of Misskey. Set to { } to use the default configuration. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>

## services.misskey.reverseProxy.webserver.nginx

Extra configuration for the nginx virtual host of Misskey. Set to { } to use the default configuration. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>
