---
module: services.firezone.server.web
option_count: 7
source: options.html
---

# services.firezone.server.web

## services.firezone.server.web.enable

Whether to enable the Firezone web server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.web.package

The firezone-server-web package to use. Type: package Default: pkgs.firezone-server-web Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.web.address

The address to listen on Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.web.externalUrl

The external URL under which you will serve the web interface. You need to setup a reverse proxy for TLS termination, either with services.firezone.server.nginx.enable or manually. Type: string matching the pattern ^https://.+/$ Example: "https://firezone.example.com/" Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.web.port

The port under which the web interface will be served locally Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.web.settings

Environment variables for this component of the Firezone server. For a list of available variables, please refer to the upstream definitions. Some variables like OUTBOUND_EMAIL_ADAPTER_OPTS require json values for which you can use VAR = builtins.toJSON { /* ... */ }. This component will automatically inherit all variables defined via services.firezone.server.settings and services.firezone.server.settingsSecret, but which can be overwritten by this option. Type: open submodule of attribute set of (boolean or floating point number or signed integer or string or absolute path or package) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.web.trustedProxies

A list of trusted proxies Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>
