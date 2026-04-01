---
module: services.atuin
option_count: 8
source: options.html
---

# services.atuin

## services.atuin.enable

Whether to enable Atuin server for shell history sync. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/atuin.nix>

## services.atuin.package

The atuin package to use. Type: package Default: pkgs.atuin Declared by: <nixpkgs/nixos/modules/services/misc/atuin.nix>

## services.atuin.host

The host address the atuin server should listen on. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/misc/atuin.nix>

## services.atuin.maxHistoryLength

The max length of each history item the atuin server should store. Type: signed integer Default: 8192 Declared by: <nixpkgs/nixos/modules/services/misc/atuin.nix>

## services.atuin.openFirewall

Open ports in the firewall for the atuin server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/atuin.nix>

## services.atuin.openRegistration

Allow new user registrations with the atuin server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/atuin.nix>

## services.atuin.path

A path to prepend to all the routes of the server. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/misc/atuin.nix>

## services.atuin.port

The port the atuin server should listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8888 Declared by: <nixpkgs/nixos/modules/services/misc/atuin.nix>
