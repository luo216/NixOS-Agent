---
module: services.synergy.server
option_count: 5
source: options.html
---

# services.synergy.server

## services.synergy.server.enable

Whether to enable the Synergy server (send keyboard and mouse events). Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/synergy.nix>

## services.synergy.server.address

Address on which to listen for clients. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/misc/synergy.nix>

## services.synergy.server.autoStart

Whether the Synergy server should be started automatically. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/misc/synergy.nix>

## services.synergy.server.configFile

The Synergy server configuration file. Type: absolute path Default: "/etc/synergy-server.conf" Declared by: <nixpkgs/nixos/modules/services/misc/synergy.nix>

## services.synergy.server.screenName

Use the given name instead of the hostname to identify this screen in the configuration. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/misc/synergy.nix>
