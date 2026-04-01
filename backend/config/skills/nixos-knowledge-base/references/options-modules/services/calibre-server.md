---
module: services.calibre-server
option_count: 9
source: options.html
---

# services.calibre-server

## services.calibre-server.enable

Whether to enable calibre-server (e-book software). Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/calibre-server.nix>

## services.calibre-server.package

The calibre package to use. Type: package Default: pkgs.calibre Declared by: <nixpkgs/nixos/modules/services/misc/calibre-server.nix>

## services.calibre-server.extraFlags

Extra flags to pass to the calibre-server command. See the calibre-server documentation for details. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/misc/calibre-server.nix>

## services.calibre-server.group

The group under which calibre-server runs. Type: string Default: "calibre-server" Declared by: <nixpkgs/nixos/modules/services/misc/calibre-server.nix>

## services.calibre-server.host

The interface on which to listen for connections. See the calibre-server documentation for details. Type: string Default: "0.0.0.0" Example: "::1" Declared by: <nixpkgs/nixos/modules/services/misc/calibre-server.nix>

## services.calibre-server.libraries

Make sure each library path is initialized before service startup. The directories of the libraries to serve. They must be readable for the user under which the server runs. See the calibredb documentation for details. Type: list of absolute path Default: [ "/var/lib/calibre-server" ] Declared by: <nixpkgs/nixos/modules/services/misc/calibre-server.nix>

## services.calibre-server.openFirewall

Open ports in the firewall for the Calibre Server web interface. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/calibre-server.nix>

## services.calibre-server.port

The port on which to listen for connections. See the calibre-server documentation for details. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/misc/calibre-server.nix>

## services.calibre-server.user

The user under which calibre-server runs. Type: string Default: "calibre-server" Declared by: <nixpkgs/nixos/modules/services/misc/calibre-server.nix>
