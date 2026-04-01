---
module: services.openvscode-server
option_count: 18
source: options.html
---

# services.openvscode-server

## services.openvscode-server.enable

Whether to enable openvscode-server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/openvscode-server.nix>

## services.openvscode-server.package

The openvscode-server package to use. Type: package Default: pkgs.openvscode-server Declared by: <nixpkgs/nixos/modules/services/web-apps/openvscode-server.nix>

## services.openvscode-server.connectionToken

A secret that must be included with all requests. Type: null or string Default: null Example: "secret-token" Declared by: <nixpkgs/nixos/modules/services/web-apps/openvscode-server.nix>

## services.openvscode-server.connectionTokenFile

Path to a file that contains the connection token. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/openvscode-server.nix>

## services.openvscode-server.extensionsDir

Set the root path for extensions. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/openvscode-server.nix>

## services.openvscode-server.extraArguments

Additional arguments to pass to openvscode-server. Type: list of string Default: [ ] Example: [ "--log=info" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/openvscode-server.nix>

## services.openvscode-server.extraEnvironment

Additional environment variables to pass to openvscode-server. Type: attribute set of string Default: { } Example: { PKG_CONFIG_PATH = "/run/current-system/sw/lib/pkgconfig"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/openvscode-server.nix>

## services.openvscode-server.extraGroups

An array of additional groups for the openvscode-server user. Type: list of string Default: [ ] Example: [ "docker" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/openvscode-server.nix>

## services.openvscode-server.extraPackages

Additional packages to add to the openvscode-server PATH. Type: list of package Default: [ ] Example: [ pkgs.go ] Declared by: <nixpkgs/nixos/modules/services/web-apps/openvscode-server.nix>

## services.openvscode-server.group

The group to run openvscode-server under. By default, a group named openvscode-server will be created. Type: string Default: "openvscode-server" Example: "yourGroup" Declared by: <nixpkgs/nixos/modules/services/web-apps/openvscode-server.nix>

## services.openvscode-server.host

The host name or IP address the server should listen to. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/openvscode-server.nix>

## services.openvscode-server.port

The port the server should listen to. If 0 is passed a random free port is picked. If a range in the format num-num is passed, a free port from the range (end inclusive) is selected. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Declared by: <nixpkgs/nixos/modules/services/web-apps/openvscode-server.nix>

## services.openvscode-server.serverDataDir

Specifies the directory that server data is kept in. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/openvscode-server.nix>

## services.openvscode-server.socketPath

The path to a socket file for the server to listen to. Type: null or string Default: null Example: "/run/openvscode/socket" Declared by: <nixpkgs/nixos/modules/services/web-apps/openvscode-server.nix>

## services.openvscode-server.telemetryLevel

Sets the initial telemetry level. Valid levels are: ‘off’, ‘crash’, ‘error’ and ‘all’. Type: null or one of “off”, “crash”, “error”, “all” Default: null Example: "crash" Declared by: <nixpkgs/nixos/modules/services/web-apps/openvscode-server.nix>

## services.openvscode-server.user

The user to run openvscode-server as. By default, a user named openvscode-server will be created. Type: string Default: "openvscode-server" Example: "yourUser" Declared by: <nixpkgs/nixos/modules/services/web-apps/openvscode-server.nix>

## services.openvscode-server.userDataDir

Specifies the directory that user data is kept in. Can be used to open multiple distinct instances of Code. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/openvscode-server.nix>

## services.openvscode-server.withoutConnectionToken

Run without a connection token. Only use this if the connection is secured by other means. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/openvscode-server.nix>
