---
module: services.jellyfin
option_count: 9
source: options.html
---

# services.jellyfin

## services.jellyfin.enable

Whether to enable Jellyfin Media Server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/jellyfin.nix>

## services.jellyfin.package

The jellyfin package to use. Type: package Default: pkgs.jellyfin Declared by: <nixpkgs/nixos/modules/services/misc/jellyfin.nix>

## services.jellyfin.cacheDir

Directory containing the jellyfin server cache, passed with --cachedir see #cache-directory Type: absolute path Default: "/var/cache/jellyfin" Declared by: <nixpkgs/nixos/modules/services/misc/jellyfin.nix>

## services.jellyfin.configDir

Directory containing the server configuration files, passed with --configdir see configuration-directory Type: absolute path Default: "\${cfg.dataDir}/config" Declared by: <nixpkgs/nixos/modules/services/misc/jellyfin.nix>

## services.jellyfin.dataDir

Base data directory, passed with --datadir see #data-directory Type: absolute path Default: "/var/lib/jellyfin" Declared by: <nixpkgs/nixos/modules/services/misc/jellyfin.nix>

## services.jellyfin.group

Group under which jellyfin runs. Type: string Default: "jellyfin" Declared by: <nixpkgs/nixos/modules/services/misc/jellyfin.nix>

## services.jellyfin.logDir

Directory where the Jellyfin logs will be stored, passed with --logdir see #log-directory Type: absolute path Default: "\${cfg.dataDir}/log" Declared by: <nixpkgs/nixos/modules/services/misc/jellyfin.nix>

## services.jellyfin.openFirewall

Open the default ports in the firewall for the media server. The HTTP/HTTPS ports can be changed in the Web UI, so this option should only be used if they are unchanged, see Port Bindings. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/jellyfin.nix>

## services.jellyfin.user

User account under which Jellyfin runs. Type: string Default: "jellyfin" Declared by: <nixpkgs/nixos/modules/services/misc/jellyfin.nix>
