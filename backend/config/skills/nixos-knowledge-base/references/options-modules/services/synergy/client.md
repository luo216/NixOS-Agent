---
module: services.synergy.client
option_count: 4
source: options.html
---

# services.synergy.client

## services.synergy.client.enable

Whether to enable the Synergy client (receive keyboard and mouse events from a Synergy server). Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/synergy.nix>

## services.synergy.client.autoStart

Whether the Synergy client should be started automatically. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/misc/synergy.nix>

## services.synergy.client.screenName

Use the given name instead of the hostname to identify ourselves to the server. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/misc/synergy.nix>

## services.synergy.client.serverAddress

The server address is of the form: [hostname][:port]. The hostname must be the address or hostname of the server. The port overrides the default port, 24800. Type: string Declared by: <nixpkgs/nixos/modules/services/misc/synergy.nix>
