---
module: services.guacamole-server
option_count: 5
source: options.html
---

# services.guacamole-server

## services.guacamole-server.enable

Whether to enable Apache Guacamole Server (guacd). Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/guacamole-server.nix>

## services.guacamole-server.package

The guacamole-server package to use. Type: package Default: pkgs.guacamole-server Declared by: <nixpkgs/nixos/modules/services/web-apps/guacamole-server.nix>

## services.guacamole-server.extraEnvironment

Environment variables to pass to guacd. Type: attribute set of string Default: { } Example: { ENVIRONMENT = "production"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/guacamole-server.nix>

## services.guacamole-server.host

The host name or IP address the server should listen to. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/web-apps/guacamole-server.nix>

## services.guacamole-server.port

The port the guacd server should listen to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 4822 Declared by: <nixpkgs/nixos/modules/services/web-apps/guacamole-server.nix>
