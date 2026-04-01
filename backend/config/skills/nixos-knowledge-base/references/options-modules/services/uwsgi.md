---
module: services.uwsgi
option_count: 7
source: options.html
---

# services.uwsgi

## services.uwsgi.enable

Enable uWSGI Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-servers/uwsgi.nix>

## services.uwsgi.capabilities

Grant capabilities to the uWSGI instance. See the capabilities(7) for available values. Note uWSGI runs as an unprivileged user (even as Emperor) with the minimal capabilities required. This option can be used to add fine-grained permissions without running the service as root. When in Emperor mode, any capability to be inherited by a vassal must be specified again in the vassal configuration using cap. See the uWSGI docs for more information. Type: list of string Default: [ ] Example: [ "CAP_NET_BIND_SERVICE" # bind on ports <1024 "CAP_NET_RAW" # open raw sockets ] Declared by: <nixpkgs/nixos/modules/services/web-servers/uwsgi.nix>

## services.uwsgi.group

Group account under which uWSGI runs. Type: string Default: "uwsgi" Declared by: <nixpkgs/nixos/modules/services/web-servers/uwsgi.nix>

## services.uwsgi.instance

uWSGI configuration. It awaits an attribute type inside which can be either normal or emperor. For normal mode you can specify pythonPackages as a function from libraries set into a list of libraries. pythonpath will be set accordingly. For emperor mode, you should use vassals attribute which should be either a set of names and configurations or a path to a directory. Other attributes will be used in configuration file as-is. Notice that you can redefine plugins setting here. Type: Json value or lambda Default: { type = "normal"; } Example: { type = "emperor"; vassals = { moin = { type = "normal"; pythonPackages = self: with self; [ moinmoin ]; socket = "${config.services.uwsgi.runDir}/uwsgi.sock"; }; }; } Declared by: <nixpkgs/nixos/modules/services/web-servers/uwsgi.nix>

## services.uwsgi.plugins

Plugins used with uWSGI Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-servers/uwsgi.nix>

## services.uwsgi.runDir

Where uWSGI communication sockets can live Type: absolute path Default: "/run/uwsgi" Declared by: <nixpkgs/nixos/modules/services/web-servers/uwsgi.nix>

## services.uwsgi.user

User account under which uWSGI runs. Type: string Default: "uwsgi" Declared by: <nixpkgs/nixos/modules/services/web-servers/uwsgi.nix>
