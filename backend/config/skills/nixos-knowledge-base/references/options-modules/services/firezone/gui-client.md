---
module: services.firezone.gui-client
option_count: 5
source: options.html
---

# services.firezone.gui-client

## services.firezone.gui-client.enable

Whether to enable the firezone gui client. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/firezone/gui-client.nix>

## services.firezone.gui-client.package

The firezone-gui-client package to use. Type: package Default: pkgs.firezone-gui-client Declared by: <nixpkgs/nixos/modules/services/networking/firezone/gui-client.nix>

## services.firezone.gui-client.allowedUsers

All listed users will become part of the firezone-client group so they can control the tunnel service. This is a convenience option. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/firezone/gui-client.nix>

## services.firezone.gui-client.logLevel

The log level for the firezone application. See RUST_LOG for the format. Type: string Default: "info" Declared by: <nixpkgs/nixos/modules/services/networking/firezone/gui-client.nix>

## services.firezone.gui-client.name

The name of this client as shown in firezone Type: string Declared by: <nixpkgs/nixos/modules/services/networking/firezone/gui-client.nix>
