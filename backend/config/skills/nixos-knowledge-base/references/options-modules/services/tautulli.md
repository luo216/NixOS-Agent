---
module: services.tautulli
option_count: 8
source: options.html
---

# services.tautulli

## services.tautulli.enable

Whether to enable Tautulli Plex Monitor. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/tautulli.nix>

## services.tautulli.package

The tautulli package to use. Type: package Default: pkgs.tautulli Declared by: <nixpkgs/nixos/modules/services/misc/tautulli.nix>

## services.tautulli.configFile

The location of Tautulli’s config file. Type: string Default: "/var/lib/plexpy/config.ini" Declared by: <nixpkgs/nixos/modules/services/misc/tautulli.nix>

## services.tautulli.dataDir

The directory where Tautulli stores its data files. Type: string Default: "/var/lib/plexpy" Declared by: <nixpkgs/nixos/modules/services/misc/tautulli.nix>

## services.tautulli.group

Group under which Tautulli runs. Type: string Default: "nogroup" Declared by: <nixpkgs/nixos/modules/services/misc/tautulli.nix>

## services.tautulli.openFirewall

Open ports in the firewall for Tautulli. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/tautulli.nix>

## services.tautulli.port

TCP port where Tautulli listens. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8181 Declared by: <nixpkgs/nixos/modules/services/misc/tautulli.nix>

## services.tautulli.user

User account under which Tautulli runs. Type: string Default: "plexpy" Declared by: <nixpkgs/nixos/modules/services/misc/tautulli.nix>
