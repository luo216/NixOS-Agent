---
module: services.etebase-server
option_count: 8
source: options.html
---

# services.etebase-server

## services.etebase-server.enable

Whether to enable the Etebase server. Once enabled you need to create an admin user by invoking the shell command etebase-server createsuperuser with the user specified by the user option or a superuser. Then you can login and create accounts on your-etebase-server.com/admin Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/etebase-server.nix>

## services.etebase-server.package

The etebase-server package to use. Type: package Default: pkgs.etebase-server Declared by: <nixpkgs/nixos/modules/services/misc/etebase-server.nix>

## services.etebase-server.dataDir

Directory to store the Etebase server data. Type: string Default: "/var/lib/etebase-server" Declared by: <nixpkgs/nixos/modules/services/misc/etebase-server.nix>

## services.etebase-server.openFirewall

Whether to open ports in the firewall for the server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/etebase-server.nix>

## services.etebase-server.port

Port to listen on. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8001 Declared by: <nixpkgs/nixos/modules/services/misc/etebase-server.nix>

## services.etebase-server.settings

Configuration for etebase-server. Refer to https://github.com/etesync/server/blob/master/etebase-server.ini.example and https://github.com/etesync/server/wiki for details on supported values. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Example: { allowed_hosts = { allowed_host2 = "localhost"; }; global = { debug = true; media_root = "/path/to/media"; }; } Declared by: <nixpkgs/nixos/modules/services/misc/etebase-server.nix>

## services.etebase-server.unixSocket

The path to the socket to bind to. Type: null or string Default: null Example: "/run/etebase-server/etebase-server.sock" Declared by: <nixpkgs/nixos/modules/services/misc/etebase-server.nix>

## services.etebase-server.user

User under which Etebase server runs. Type: string Default: "etebase-server" Declared by: <nixpkgs/nixos/modules/services/misc/etebase-server.nix>
