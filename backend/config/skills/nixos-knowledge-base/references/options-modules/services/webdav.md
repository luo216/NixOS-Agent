---
module: services.webdav
option_count: 7
source: options.html
---

# services.webdav

## services.webdav.enable

Whether to enable WebDAV server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/webdav.nix>

## services.webdav.package

The webdav package to use. Type: package Default: pkgs.webdav Declared by: <nixpkgs/nixos/modules/services/network-filesystems/webdav.nix>

## services.webdav.configFile

Path to config file. If this option is set, it will override any configuration done in options.services.webdav.settings. Type: absolute path Default: "Config file generated from services.webdav.settings" Example: "/etc/webdav/config.yaml" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/webdav.nix>

## services.webdav.environmentFile

Environment file as defined in systemd.exec(5). Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/network-filesystems/webdav.nix>

## services.webdav.group

Group under which WebDAV runs. Type: string Default: "webdav" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/webdav.nix>

## services.webdav.settings

Attrset that is converted and passed as config file. Available options can be found at here. This program supports reading username and password configuration from environment variables, so it’s strongly recommended to store username and password in a separate EnvironmentFile. This prevents adding secrets to the world-readable Nix store. Type: YAML 1.1 value Default: { } Example: { address = "0.0.0.0"; port = 8080; directory = "/srv/public"; permissions = "R"; users = [ { username = "{env}ENV_USERNAME"; password = "{env}ENV_PASSWORD"; } ]; } Declared by: <nixpkgs/nixos/modules/services/network-filesystems/webdav.nix>

## services.webdav.user

User account under which WebDAV runs. Type: string Default: "webdav" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/webdav.nix>
