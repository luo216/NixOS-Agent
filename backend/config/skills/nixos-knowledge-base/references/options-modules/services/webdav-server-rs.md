---
module: services.webdav-server-rs
option_count: 6
source: options.html
---

# services.webdav-server-rs

## services.webdav-server-rs.enable

Whether to enable WebDAV server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/webdav-server-rs.nix>

## services.webdav-server-rs.configFile

Path to config file. If this option is set, it will override any configuration done in services.webdav-server-rs.settings. Type: absolute path Default: "Config file generated from services.webdav-server-rs.settings" Example: "/etc/webdav-server.toml" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/webdav-server-rs.nix>

## services.webdav-server-rs.debug

Enable debug mode. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/network-filesystems/webdav-server-rs.nix>

## services.webdav-server-rs.group

Group to run under when setuid is not enabled. Type: string Default: "webdav" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/webdav-server-rs.nix>

## services.webdav-server-rs.settings

Attrset that is converted and passed as config file. Available options can be found at here. Type: TOML value Default: { } Example: { server.listen = [ "0.0.0.0:4918" "[::]:4918" ]; accounts = { auth-type = "htpasswd.default"; acct-type = "unix"; }; htpasswd.default = { htpasswd = "/etc/htpasswd"; }; location = [ { route = [ "/public/*path" ]; directory = "/srv/public"; handler = "filesystem"; methods = [ "webdav-ro" ]; autoindex = true; auth = "false"; } { route = [ "/user/:user/*path" ]; directory = "~"; handler = "filesystem"; methods = [ "webdav-rw" ]; autoindex = true; auth = "true"; setuid = true; } ]; } Declared by: <nixpkgs/nixos/modules/services/network-filesystems/webdav-server-rs.nix>

## services.webdav-server-rs.user

User to run under when setuid is not enabled. Type: string Default: "webdav" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/webdav-server-rs.nix>
