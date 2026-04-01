---
module: services.ttyd
option_count: 21
source: options.html
---

# services.ttyd

## services.ttyd.enable

Whether to enable ttyd daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-servers/ttyd.nix>

## services.ttyd.enableIPv6

Whether or not to enable IPv6 support. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-servers/ttyd.nix>

## services.ttyd.enableSSL

Whether or not to enable SSL (https) support. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-servers/ttyd.nix>

## services.ttyd.caFile

SSL CA file path for client certificate verification. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-servers/ttyd.nix>

## services.ttyd.certFile

SSL certificate file path. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-servers/ttyd.nix>

## services.ttyd.checkOrigin

Whether to allow a websocket connection from a different origin. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-servers/ttyd.nix>

## services.ttyd.clientOptions

Attribute set of client options for xtermjs. https://xtermjs.org/docs/api/terminal/interfaces/iterminaloptions/ Type: attribute set of string Default: { } Example: { fontSize = "16"; fontFamily = "Fira Code"; } Declared by: <nixpkgs/nixos/modules/services/web-servers/ttyd.nix>

## services.ttyd.entrypoint

Which command ttyd runs. Type: list of string Default: [ "${pkgs.shadow}/bin/login" ] Example: [ (lib.getExe pkgs.htop) ] Declared by: <nixpkgs/nixos/modules/services/web-servers/ttyd.nix>

## services.ttyd.indexFile

Custom index.html path Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-servers/ttyd.nix>

## services.ttyd.interface

Network interface to bind. Type: null or string Default: null Example: "eth0" Declared by: <nixpkgs/nixos/modules/services/web-servers/ttyd.nix>

## services.ttyd.keyFile

SSL key file path. For insecurely putting the keyFile in the globally readable store use pkgs.writeText "ttydKeyFile" "SSLKEY". Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-servers/ttyd.nix>

## services.ttyd.logLevel

Set log level. Type: signed integer Default: 7 Declared by: <nixpkgs/nixos/modules/services/web-servers/ttyd.nix>

## services.ttyd.maxClients

Maximum clients to support (0, no limit) Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/services/web-servers/ttyd.nix>

## services.ttyd.passwordFile

File containing the password to use for basic http authentication. For insecurely putting the password in the globally readable store use pkgs.writeText "ttydpw" "MyPassword". Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-servers/ttyd.nix>

## services.ttyd.port

Port to listen on (use 0 for random port) Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 7681 Declared by: <nixpkgs/nixos/modules/services/web-servers/ttyd.nix>

## services.ttyd.signal

Signal to send to the command on session close. Type: 8 bit unsigned integer; between 0 and 255 (both inclusive) Default: 1 Declared by: <nixpkgs/nixos/modules/services/web-servers/ttyd.nix>

## services.ttyd.socket

UNIX domain socket path to bind. Type: null or absolute path Default: null Example: "/var/run/ttyd.sock" Declared by: <nixpkgs/nixos/modules/services/web-servers/ttyd.nix>

## services.ttyd.terminalType

Terminal type to report. Type: string Default: "xterm-256color" Declared by: <nixpkgs/nixos/modules/services/web-servers/ttyd.nix>

## services.ttyd.user

Which unix user ttyd should run as. Type: string Default: "root" Declared by: <nixpkgs/nixos/modules/services/web-servers/ttyd.nix>

## services.ttyd.username

Username for basic http authentication. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-servers/ttyd.nix>

## services.ttyd.writeable

Allow clients to write to the TTY. Type: null or boolean Default: null Example: true Declared by: <nixpkgs/nixos/modules/services/web-servers/ttyd.nix>
