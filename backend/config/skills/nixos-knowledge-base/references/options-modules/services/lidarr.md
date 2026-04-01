---
module: services.lidarr
option_count: 8
source: options.html
---

# services.lidarr

## services.lidarr.enable

Whether to enable Lidarr, a Usenet/BitTorrent music downloader. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/servarr/lidarr.nix>

## services.lidarr.package

The lidarr package to use. Type: package Default: pkgs.lidarr Declared by: <nixpkgs/nixos/modules/services/misc/servarr/lidarr.nix>

## services.lidarr.dataDir

The directory where Lidarr stores its data files. Type: string Default: "/var/lib/lidarr/.config/Lidarr" Declared by: <nixpkgs/nixos/modules/services/misc/servarr/lidarr.nix>

## services.lidarr.environmentFiles

Environment file to pass secret configuration values. Each line must follow the LIDARR__SECTION__KEY=value pattern. Please consult the documentation at the wiki. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/misc/servarr/lidarr.nix>

## services.lidarr.group

Group under which Lidarr runs. Type: string Default: "lidarr" Declared by: <nixpkgs/nixos/modules/services/misc/servarr/lidarr.nix>

## services.lidarr.openFirewall

Open ports in the firewall for Lidarr Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/servarr/lidarr.nix>

## services.lidarr.settings

Attribute set of arbitrary config options. Please consult the documentation at the wiki. WARNING: this configuration is stored in the world-readable Nix store! For secrets use services.lidarr.environmentFiles. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Example: { update.mechanism = "internal"; server = { urlbase = "localhost"; port = 8686; bindaddress = "*"; }; } Declared by: <nixpkgs/nixos/modules/services/misc/servarr/lidarr.nix>

## services.lidarr.user

User account under which Lidarr runs. Type: string Default: "lidarr" Declared by: <nixpkgs/nixos/modules/services/misc/servarr/lidarr.nix>
