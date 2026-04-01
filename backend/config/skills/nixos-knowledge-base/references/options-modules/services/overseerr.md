---
module: services.overseerr
option_count: 4
source: options.html
---

# services.overseerr

## services.overseerr.enable

Whether to enable Overseerr, a request management and media discovery tool for the Plex ecosystem. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/overseerr.nix>

## services.overseerr.package

The overseerr package to use. Type: package Default: pkgs.overseerr Declared by: <nixpkgs/nixos/modules/services/misc/overseerr.nix>

## services.overseerr.openFirewall

Open a port in the firewall for the Overseerr web interface. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/overseerr.nix>

## services.overseerr.port

The port which the Overseerr web UI should listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5055 Declared by: <nixpkgs/nixos/modules/services/misc/overseerr.nix>
