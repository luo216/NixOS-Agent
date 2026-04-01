---
module: services.prowlarr
option_count: 6
source: options.html
---

# services.prowlarr

## services.prowlarr.enable

Whether to enable Prowlarr, an indexer manager/proxy for Torrent trackers and Usenet indexers. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/servarr/prowlarr.nix>

## services.prowlarr.package

The prowlarr package to use. Type: package Default: pkgs.prowlarr Declared by: <nixpkgs/nixos/modules/services/misc/servarr/prowlarr.nix>

## services.prowlarr.dataDir

The directory where Prowlarr stores its data files. Note: A bind mount will be used to mount the directory at the expected location if a different value than /var/lib/prowlarr is used. Type: string Default: "/var/lib/prowlarr" Declared by: <nixpkgs/nixos/modules/services/misc/servarr/prowlarr.nix>

## services.prowlarr.environmentFiles

Environment file to pass secret configuration values. Each line must follow the PROWLARR__SECTION__KEY=value pattern. Please consult the documentation at the wiki. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/misc/servarr/prowlarr.nix>

## services.prowlarr.openFirewall

Open ports in the firewall for the Prowlarr web interface. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/servarr/prowlarr.nix>

## services.prowlarr.settings

Attribute set of arbitrary config options. Please consult the documentation at the wiki. WARNING: this configuration is stored in the world-readable Nix store! For secrets use services.prowlarr.environmentFiles. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Example: { update.mechanism = "internal"; server = { urlbase = "localhost"; port = 9696; bindaddress = "*"; }; } Declared by: <nixpkgs/nixos/modules/services/misc/servarr/prowlarr.nix>
