---
module: services.anki-sync-server
option_count: 7
source: options.html
---

# services.anki-sync-server

## services.anki-sync-server.enable

Whether to enable anki-sync-server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/anki-sync-server.nix>

## services.anki-sync-server.package

The anki-sync-server package to use. Type: package Default: pkgs.anki-sync-server Declared by: <nixpkgs/nixos/modules/services/misc/anki-sync-server.nix>

## services.anki-sync-server.address

IP address anki-sync-server listens to. Note host names are not resolved. Type: string Default: "::1" Declared by: <nixpkgs/nixos/modules/services/misc/anki-sync-server.nix>

## services.anki-sync-server.baseDirectory

Base directory where user(s) synchronized data will be stored. Type: string Default: "%S/%N" Declared by: <nixpkgs/nixos/modules/services/misc/anki-sync-server.nix>

## services.anki-sync-server.openFirewall

Whether to open the firewall for the specified port. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/anki-sync-server.nix>

## services.anki-sync-server.port

Port number anki-sync-server listens to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 27701 Declared by: <nixpkgs/nixos/modules/services/misc/anki-sync-server.nix>

## services.anki-sync-server.users

List of user-password pairs to provide to the sync server. Type: list of (submodule) Declared by: <nixpkgs/nixos/modules/services/misc/anki-sync-server.nix>
