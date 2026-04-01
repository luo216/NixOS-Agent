---
module: services.fluidd
option_count: 4
source: options.html
---

# services.fluidd

## services.fluidd.enable

Whether to enable Fluidd, a Klipper web interface for managing your 3d printer. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/fluidd.nix>

## services.fluidd.package

The fluidd package to use. Type: package Default: pkgs.fluidd Declared by: <nixpkgs/nixos/modules/services/web-apps/fluidd.nix>

## services.fluidd.hostName

Hostname to serve fluidd on Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/fluidd.nix>

## services.fluidd.nginx

Extra configuration for the nginx virtual host of fluidd. Type: submodule Default: { } Example: { serverAliases = [ "fluidd.${config.networking.domain}" ]; } Declared by: <nixpkgs/nixos/modules/services/web-apps/fluidd.nix>
