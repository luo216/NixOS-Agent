---
module: services.bazarr
option_count: 7
source: options.html
---

# services.bazarr

## services.bazarr.enable

Whether to enable bazarr, a subtitle manager for Sonarr and Radarr. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/bazarr.nix>

## services.bazarr.package

The bazarr package to use. Type: package Default: pkgs.bazarr Declared by: <nixpkgs/nixos/modules/services/misc/bazarr.nix>

## services.bazarr.dataDir

The directory where Bazarr stores its data files. Type: string Default: "/var/lib/bazarr" Declared by: <nixpkgs/nixos/modules/services/misc/bazarr.nix>

## services.bazarr.group

Group under which bazarr runs. Type: string Default: "bazarr" Declared by: <nixpkgs/nixos/modules/services/misc/bazarr.nix>

## services.bazarr.listenPort

Port on which the bazarr web interface should listen Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 6767 Declared by: <nixpkgs/nixos/modules/services/misc/bazarr.nix>

## services.bazarr.openFirewall

Open ports in the firewall for the bazarr web interface. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/bazarr.nix>

## services.bazarr.user

User account under which bazarr runs. Type: string Default: "bazarr" Declared by: <nixpkgs/nixos/modules/services/misc/bazarr.nix>
