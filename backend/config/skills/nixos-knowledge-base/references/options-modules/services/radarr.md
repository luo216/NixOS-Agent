---
module: services.radarr
option_count: 8
source: options.html
---

# services.radarr

## services.radarr.enable

Whether to enable Radarr, a UsetNet/BitTorrent movie downloader. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/servarr/radarr.nix>

## services.radarr.package

The radarr package to use. Type: package Default: pkgs.radarr Declared by: <nixpkgs/nixos/modules/services/misc/servarr/radarr.nix>

## services.radarr.dataDir

The directory where Radarr stores its data files. Type: string Default: "/var/lib/radarr/.config/Radarr" Declared by: <nixpkgs/nixos/modules/services/misc/servarr/radarr.nix>

## services.radarr.environmentFiles

Environment file to pass secret configuration values. Each line must follow the RADARR__SECTION__KEY=value pattern. Please consult the documentation at the wiki. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/misc/servarr/radarr.nix>

## services.radarr.group

Group under which Radarr runs. Type: string Default: "radarr" Declared by: <nixpkgs/nixos/modules/services/misc/servarr/radarr.nix>

## services.radarr.openFirewall

Open ports in the firewall for the Radarr web interface. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/servarr/radarr.nix>

## services.radarr.settings

Attribute set of arbitrary config options. Please consult the documentation at the wiki. WARNING: this configuration is stored in the world-readable Nix store! For secrets use services.radarr.environmentFiles. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Example: { update.mechanism = "internal"; server = { urlbase = "localhost"; port = 7878; bindaddress = "*"; }; } Declared by: <nixpkgs/nixos/modules/services/misc/servarr/radarr.nix>

## services.radarr.user

User account under which Radarr runs. Type: string Default: "radarr" Declared by: <nixpkgs/nixos/modules/services/misc/servarr/radarr.nix>
