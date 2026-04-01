---
module: services.mainsail
option_count: 4
source: options.html
---

# services.mainsail

## services.mainsail.enable

Whether to enable a modern and responsive user interface for Klipper. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/mainsail.nix>

## services.mainsail.package

The mainsail package to use. Type: package Default: pkgs.mainsail Declared by: <nixpkgs/nixos/modules/services/web-apps/mainsail.nix>

## services.mainsail.hostName

Hostname to serve mainsail on Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/mainsail.nix>

## services.mainsail.nginx

Extra configuration for the nginx virtual host of mainsail. Type: submodule Default: { } Example: { serverAliases = [ "mainsail.${config.networking.domain}" ]; } Declared by: <nixpkgs/nixos/modules/services/web-apps/mainsail.nix>
