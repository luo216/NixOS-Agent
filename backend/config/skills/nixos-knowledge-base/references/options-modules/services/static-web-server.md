---
module: services.static-web-server
option_count: 4
source: options.html
---

# services.static-web-server

## services.static-web-server.enable

Whether to enable Static Web Server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-servers/static-web-server.nix>

## services.static-web-server.configuration

Configuration for Static Web Server. See https://static-web-server.net/configuration/config-file/. NOTE: Don’t set “host”, “port”, or “root” here. They will be ignored. Use the top-level “listen” and “root” options instead. Type: TOML value Default: { } Example: { general = { directory-listing = true; log-level = "error"; }; } Declared by: <nixpkgs/nixos/modules/services/web-servers/static-web-server.nix>

## services.static-web-server.listen

The systemd.socket(5) “ListenStream” used in static-web-server.socket. This is equivalent to SWS’s “host” and “port” options. See here for specific syntax: https://www.freedesktop.org/software/systemd/man/systemd.socket.html#ListenStream= Type: string Default: "[::]:8787" Declared by: <nixpkgs/nixos/modules/services/web-servers/static-web-server.nix>

## services.static-web-server.root

The location of files for SWS to serve. Equivalent to SWS’s “root” config value. NOTE: This folder must exist before starting SWS. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/web-servers/static-web-server.nix>
