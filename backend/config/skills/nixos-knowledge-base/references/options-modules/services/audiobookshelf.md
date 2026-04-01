---
module: services.audiobookshelf
option_count: 8
source: options.html
---

# services.audiobookshelf

## services.audiobookshelf.enable

Whether to enable Audiobookshelf, self-hosted audiobook and podcast server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/audiobookshelf.nix>

## services.audiobookshelf.package

The audiobookshelf package to use. Type: package Default: pkgs.audiobookshelf Declared by: <nixpkgs/nixos/modules/services/web-apps/audiobookshelf.nix>

## services.audiobookshelf.dataDir

Path to Audiobookshelf config and metadata inside of /var/lib. Type: string Default: "audiobookshelf" Declared by: <nixpkgs/nixos/modules/services/web-apps/audiobookshelf.nix>

## services.audiobookshelf.group

Group under which Audiobookshelf runs. Type: string Default: "audiobookshelf" Declared by: <nixpkgs/nixos/modules/services/web-apps/audiobookshelf.nix>

## services.audiobookshelf.host

The host Audiobookshelf binds to. Type: string Default: "127.0.0.1" Example: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/web-apps/audiobookshelf.nix>

## services.audiobookshelf.openFirewall

Open ports in the firewall for the Audiobookshelf web interface. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/audiobookshelf.nix>

## services.audiobookshelf.port

The TCP port Audiobookshelf will listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8000 Declared by: <nixpkgs/nixos/modules/services/web-apps/audiobookshelf.nix>

## services.audiobookshelf.user

User account under which Audiobookshelf runs. Type: string Default: "audiobookshelf" Declared by: <nixpkgs/nixos/modules/services/web-apps/audiobookshelf.nix>
