---
module: services.navidrome
option_count: 7
source: options.html
---

# services.navidrome

## services.navidrome.enable

Whether to enable Navidrome music server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/audio/navidrome.nix>

## services.navidrome.package

The navidrome package to use. Type: package Default: pkgs.navidrome Declared by: <nixpkgs/nixos/modules/services/audio/navidrome.nix>

## services.navidrome.environmentFile

Environment file, used to set any secret ND_* environment variables. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/audio/navidrome.nix>

## services.navidrome.group

Group under which Navidrome runs. Type: string Default: "navidrome" Declared by: <nixpkgs/nixos/modules/services/audio/navidrome.nix>

## services.navidrome.openFirewall

Whether to open the TCP port in the firewall Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/audio/navidrome.nix>

## services.navidrome.settings

Configuration for Navidrome, see https://www.navidrome.org/docs/usage/configuration-options/ for supported values. Type: open submodule of (JSON value) Default: { } Example: { MusicFolder = "/mnt/music"; } Declared by: <nixpkgs/nixos/modules/services/audio/navidrome.nix>

## services.navidrome.user

User under which Navidrome runs. Type: string Default: "navidrome" Declared by: <nixpkgs/nixos/modules/services/audio/navidrome.nix>
