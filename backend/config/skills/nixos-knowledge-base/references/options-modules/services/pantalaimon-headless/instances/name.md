---
module: services.pantalaimon-headless.instances.<name>
option_count: 7
source: options.html
---

# services.pantalaimon-headless.instances.<name>

## services.pantalaimon-headless.instances.<name>.dataPath

The directory where pantalaimon should store its state such as the database file. Type: absolute path Default: "/var/lib/pantalaimon-‹name›" Declared by: <nixpkgs/nixos/modules/services/matrix/pantalaimon.nix>

## services.pantalaimon-headless.instances.<name>.extraSettings

Extra configuration options. See pantalaimon(5) for available options. Type: attribute set Default: { } Declared by: <nixpkgs/nixos/modules/services/matrix/pantalaimon.nix>

## services.pantalaimon-headless.instances.<name>.homeserver

The URI of the homeserver that the pantalaimon proxy should forward requests to, without the matrix API path but including the http(s) schema. Type: string Example: "https://matrix.org" Declared by: <nixpkgs/nixos/modules/services/matrix/pantalaimon.nix>

## services.pantalaimon-headless.instances.<name>.listenAddress

The address where the daemon will listen to client connections for this homeserver. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/matrix/pantalaimon.nix>

## services.pantalaimon-headless.instances.<name>.listenPort

The port where the daemon will listen to client connections for this homeserver. Note that the listen address/port combination needs to be lib.unique between different homeservers. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8009 Declared by: <nixpkgs/nixos/modules/services/matrix/pantalaimon.nix>

## services.pantalaimon-headless.instances.<name>.logLevel

Set the log level of the daemon. Type: one of “info”, “warning”, “error”, “debug” Default: "warning" Declared by: <nixpkgs/nixos/modules/services/matrix/pantalaimon.nix>

## services.pantalaimon-headless.instances.<name>.ssl

Whether or not SSL verification should be enabled for outgoing connections to the homeserver. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/matrix/pantalaimon.nix>
