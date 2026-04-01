---
module: services.jellyseerr
option_count: 5
source: options.html
---

# services.jellyseerr

## services.jellyseerr.enable

Whether to enable Jellyseerr, a requests manager for Jellyfin. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/jellyseerr.nix>

## services.jellyseerr.package

The jellyseerr package to use. Type: package Default: pkgs.jellyseerr Declared by: <nixpkgs/nixos/modules/services/misc/jellyseerr.nix>

## services.jellyseerr.configDir

Config data directory Type: absolute path Default: "/var/lib/jellyseerr/config" Declared by: <nixpkgs/nixos/modules/services/misc/jellyseerr.nix>

## services.jellyseerr.openFirewall

Open port in the firewall for the Jellyseerr web interface. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/jellyseerr.nix>

## services.jellyseerr.port

The port which the Jellyseerr web UI should listen to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5055 Declared by: <nixpkgs/nixos/modules/services/misc/jellyseerr.nix>
