---
module: services.quassel
option_count: 8
source: options.html
---

# services.quassel

## services.quassel.enable

Whether to enable the Quassel IRC client daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/quassel.nix>

## services.quassel.package

The quasselDaemon package to use. Type: package Default: pkgs.quasselDaemon Declared by: <nixpkgs/nixos/modules/services/networking/quassel.nix>

## services.quassel.certificateFile

Path to the certificate used for SSL connections with clients. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/quassel.nix>

## services.quassel.dataDir

The directory holding configuration files, the SQlite database and the SSL Cert. Type: string Default: "/home/${config.services.quassel.user}/.config/quassel-irc.org" Declared by: <nixpkgs/nixos/modules/services/networking/quassel.nix>

## services.quassel.interfaces

The interfaces the Quassel daemon will be listening to. If [ 127.0.0.1 ], only clients on the local host can connect to it; if [ 0.0.0.0 ], clients can access it from any network interface. Type: list of string Default: [ "127.0.0.1" ] Declared by: <nixpkgs/nixos/modules/services/networking/quassel.nix>

## services.quassel.portNumber

The port number the Quassel daemon will be listening to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 4242 Declared by: <nixpkgs/nixos/modules/services/networking/quassel.nix>

## services.quassel.requireSSL

Require SSL for connections from clients. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/quassel.nix>

## services.quassel.user

The existing user the Quassel daemon should run as. If left empty, a default “quassel” user will be created. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/quassel.nix>
