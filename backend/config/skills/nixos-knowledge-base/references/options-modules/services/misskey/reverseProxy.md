---
module: services.misskey.reverseProxy
option_count: 4
source: options.html
---

# services.misskey.reverseProxy

## services.misskey.reverseProxy.enable

Whether to enable a HTTP reverse proxy for Misskey. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>

## services.misskey.reverseProxy.host

The fully qualified domain name to bind to. Sets services.misskey.settings.url. This is required when using services.misskey.reverseProxy.enable = true. Type: null or string Default: null Example: "misskey.example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>

## services.misskey.reverseProxy.ssl

Whether to enable SSL for the reverse proxy. Sets services.misskey.settings.url. This is required when using services.misskey.reverseProxy.enable = true. Type: null or boolean Default: null Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>

## services.misskey.reverseProxy.webserver

The webserver to use as the reverse proxy. Type: attribute-tagged union Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>
