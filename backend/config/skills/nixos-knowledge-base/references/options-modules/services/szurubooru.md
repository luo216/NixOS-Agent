---
module: services.szurubooru
option_count: 5
source: options.html
---

# services.szurubooru

## services.szurubooru.enable

Whether to enable Szurubooru, an image board engine dedicated for small and medium communities. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/szurubooru.nix>

## services.szurubooru.dataDir

The path to the data directory in which Szurubooru will store its data. Type: absolute path Default: "/var/lib/szurubooru" Example: "/var/lib/szuru" Declared by: <nixpkgs/nixos/modules/services/web-apps/szurubooru.nix>

## services.szurubooru.group

Group under which Szurubooru runs. Type: string Default: "szurubooru" Declared by: <nixpkgs/nixos/modules/services/web-apps/szurubooru.nix>

## services.szurubooru.openFirewall

Whether to open the firewall for the port in services.szurubooru.server.port. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/szurubooru.nix>

## services.szurubooru.user

User account under which Szurubooru runs. Type: string Default: "szurubooru" Declared by: <nixpkgs/nixos/modules/services/web-apps/szurubooru.nix>
