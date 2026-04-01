---
module: services.ombi
option_count: 7
source: options.html
---

# services.ombi

## services.ombi.enable

Whether to enable Ombi, a web application that automatically gives your shared Plex or Emby users the ability to request content by themselves! Optionally see https://docs.ombi.app/info/reverse-proxy on how to set up a reverse proxy . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/ombi.nix>

## services.ombi.package

The ombi package to use. Type: package Default: pkgs.ombi Declared by: <nixpkgs/nixos/modules/services/misc/ombi.nix>

## services.ombi.dataDir

The directory where Ombi stores its data files. Type: string Default: "/var/lib/ombi" Declared by: <nixpkgs/nixos/modules/services/misc/ombi.nix>

## services.ombi.group

Group under which Ombi runs. Type: string Default: "ombi" Declared by: <nixpkgs/nixos/modules/services/misc/ombi.nix>

## services.ombi.openFirewall

Open ports in the firewall for the Ombi web interface. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/ombi.nix>

## services.ombi.port

The port for the Ombi web interface. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5000 Declared by: <nixpkgs/nixos/modules/services/misc/ombi.nix>

## services.ombi.user

User account under which Ombi runs. Type: string Default: "ombi" Declared by: <nixpkgs/nixos/modules/services/misc/ombi.nix>
