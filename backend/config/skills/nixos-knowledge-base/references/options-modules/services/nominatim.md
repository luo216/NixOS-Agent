---
module: services.nominatim
option_count: 4
source: options.html
---

# services.nominatim

## services.nominatim.enable

Whether to enable nominatim. Also enables nginx virtual host management. Further nginx configuration can be done by adapting services.nginx.virtualHosts.<name>. See services.nginx.virtualHosts. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/search/nominatim.nix>

## services.nominatim.package

The nominatim-api package to use. Type: package Default: pkgs.nominatim-api Declared by: <nixpkgs/nixos/modules/services/search/nominatim.nix>

## services.nominatim.hostName

Hostname to use for the nginx vhost. Type: string Example: "nominatim.example.com" Declared by: <nixpkgs/nixos/modules/services/search/nominatim.nix>

## services.nominatim.settings

Nominatim configuration settings. For the list of available configuration options see https://nominatim.org/release-docs/latest/customize/Settings. Type: attribute set of string Default: { } Example: { NOMINATIM_REPLICATION_URL = "https://planet.openstreetmap.org/replication/minute"; NOMINATIM_REPLICATION_MAX_DIFF = "100"; } Declared by: <nixpkgs/nixos/modules/services/search/nominatim.nix>
