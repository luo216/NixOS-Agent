---
module: services.eternal-terminal
option_count: 5
source: options.html
---

# services.eternal-terminal

## services.eternal-terminal.enable

Whether to enable Eternal Terminal server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/eternal-terminal.nix>

## services.eternal-terminal.logSize

The maximum log size. Type: signed integer Default: 20971520 Declared by: <nixpkgs/nixos/modules/services/networking/eternal-terminal.nix>

## services.eternal-terminal.port

The port the server should listen on. Will use the server’s default (2022) if not specified. Make sure to open this port in the firewall if necessary. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 2022 Declared by: <nixpkgs/nixos/modules/services/networking/eternal-terminal.nix>

## services.eternal-terminal.silent

If enabled, disables all logging. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/eternal-terminal.nix>

## services.eternal-terminal.verbosity

The verbosity level (0-9). Type: one of 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 Default: 0 Declared by: <nixpkgs/nixos/modules/services/networking/eternal-terminal.nix>
