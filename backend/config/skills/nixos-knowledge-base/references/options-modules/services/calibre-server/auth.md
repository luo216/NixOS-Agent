---
module: services.calibre-server.auth
option_count: 3
source: options.html
---

# services.calibre-server.auth

## services.calibre-server.auth.enable

Password based authentication to access the server. See the calibre-server documentation for details. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/calibre-server.nix>

## services.calibre-server.auth.mode

Choose the type of authentication used. Set the HTTP authentication mode used by the server. See the calibre-server documentation for details. Type: one of “auto”, “basic”, “digest” Default: "auto" Declared by: <nixpkgs/nixos/modules/services/misc/calibre-server.nix>

## services.calibre-server.auth.userDb

Choose users database file to use for authentication. Make sure users database file is initialized before service startup. See the calibre-server documentation for details. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/misc/calibre-server.nix>
