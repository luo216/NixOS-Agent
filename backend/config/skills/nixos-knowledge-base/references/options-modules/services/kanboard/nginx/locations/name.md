---
module: services.kanboard.nginx.locations.<name>
option_count: 15
source: options.html
---

# services.kanboard.nginx.locations.<name>

## services.kanboard.nginx.locations.<name>.alias

Alias directory for requests. Type: null or absolute path Default: null Example: "/your/alias/directory" Declared by: <nixpkgs/nixos/modules/services/web-apps/kanboard.nix>

## services.kanboard.nginx.locations.<name>.basicAuth

Basic Auth protection for a vhost. WARNING: This is implemented to store the password in plain text in the Nix store. Type: attribute set of string Default: { } Example: { user = "password"; }; Declared by: <nixpkgs/nixos/modules/services/web-apps/kanboard.nix>

## services.kanboard.nginx.locations.<name>.basicAuthFile

Basic Auth password file for a vhost. Can be created by running nix-shell --packages apacheHttpd --run 'htpasswd -B -c FILENAME USERNAME'. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/kanboard.nix>

## services.kanboard.nginx.locations.<name>.extraConfig

These lines go to the end of the location verbatim. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/web-apps/kanboard.nix>

## services.kanboard.nginx.locations.<name>.fastcgiParams

FastCGI parameters to override. Unlike in the Nginx configuration file, overriding only some default parameters won’t unset the default values for other parameters. Type: attribute set of (string or absolute path) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/kanboard.nix>

## services.kanboard.nginx.locations.<name>.index

Adds index directive. Type: null or string Default: null Example: "index.php index.html" Declared by: <nixpkgs/nixos/modules/services/web-apps/kanboard.nix>

## services.kanboard.nginx.locations.<name>.priority

Order of this location block in relation to the others in the vhost. The semantics are the same as with lib.mkOrder. Smaller values have a greater priority. Type: signed integer Default: 1000 Declared by: <nixpkgs/nixos/modules/services/web-apps/kanboard.nix>

## services.kanboard.nginx.locations.<name>.proxyPass

Adds proxy_pass directive and sets recommended proxy headers if recommendedProxySettings is enabled. Type: null or string Default: null Example: "http://www.example.org/" Declared by: <nixpkgs/nixos/modules/services/web-apps/kanboard.nix>

## services.kanboard.nginx.locations.<name>.proxyWebsockets

Whether to support proxying websocket connections with HTTP/1.1. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/kanboard.nix>

## services.kanboard.nginx.locations.<name>.recommendedProxySettings

Enable recommended proxy settings. Type: boolean Default: config.services.nginx.recommendedProxySettings Declared by: <nixpkgs/nixos/modules/services/web-apps/kanboard.nix>

## services.kanboard.nginx.locations.<name>.recommendedUwsgiSettings

Enable recommended uwsgi settings. Type: boolean Default: config.services.nginx.recommendedUwsgiSettings Declared by: <nixpkgs/nixos/modules/services/web-apps/kanboard.nix>

## services.kanboard.nginx.locations.<name>.return

Adds a return directive, for e.g. redirections. Type: null or string or signed integer Default: null Example: "301 http://example.com$request_uri" Declared by: <nixpkgs/nixos/modules/services/web-apps/kanboard.nix>

## services.kanboard.nginx.locations.<name>.root

Root directory for requests. Type: null or absolute path Default: null Example: "/your/root/directory" Declared by: <nixpkgs/nixos/modules/services/web-apps/kanboard.nix>

## services.kanboard.nginx.locations.<name>.tryFiles

Adds try_files directive. Type: null or string Default: null Example: "$uri =404" Declared by: <nixpkgs/nixos/modules/services/web-apps/kanboard.nix>

## services.kanboard.nginx.locations.<name>.uwsgiPass

Adds uwsgi_pass directive and sets recommended proxy headers if recommendedUwsgiSettings is enabled. Type: null or string Default: null Example: "unix:/run/example/example.sock" Declared by: <nixpkgs/nixos/modules/services/web-apps/kanboard.nix>
