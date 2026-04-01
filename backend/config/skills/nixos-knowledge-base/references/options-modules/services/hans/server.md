---
module: services.hans.server
option_count: 5
source: options.html
---

# services.hans.server

## services.hans.server.enable

enable hans server Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/hans.nix>

## services.hans.server.extraConfig

Additional command line parameters Type: string Default: "" Example: "-v" Declared by: <nixpkgs/nixos/modules/services/networking/hans.nix>

## services.hans.server.ip

The assigned ip range Type: string Default: "" Example: "198.51.100.0" Declared by: <nixpkgs/nixos/modules/services/networking/hans.nix>

## services.hans.server.passwordFile

File that contains password Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/hans.nix>

## services.hans.server.respondToSystemPings

Force hans respond to ordinary pings Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/hans.nix>
