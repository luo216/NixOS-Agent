---
module: services.sonarr
option_count: 8
source: options.html
---

# services.sonarr

## services.sonarr.enable

Whether to enable Sonarr. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/servarr/sonarr.nix>

## services.sonarr.package

The sonarr package to use. Type: package Default: pkgs.sonarr Declared by: <nixpkgs/nixos/modules/services/misc/servarr/sonarr.nix>

## services.sonarr.dataDir

The directory where Sonarr stores its data files. Type: string Default: "/var/lib/sonarr/.config/NzbDrone" Declared by: <nixpkgs/nixos/modules/services/misc/servarr/sonarr.nix>

## services.sonarr.environmentFiles

Environment file to pass secret configuration values. Each line must follow the SONARR__SECTION__KEY=value pattern. Please consult the documentation at the wiki. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/misc/servarr/sonarr.nix>

## services.sonarr.group

Group under which Sonaar runs. Type: string Default: "sonarr" Declared by: <nixpkgs/nixos/modules/services/misc/servarr/sonarr.nix>

## services.sonarr.openFirewall

Open ports in the firewall for the Sonarr web interface Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/servarr/sonarr.nix>

## services.sonarr.settings

Attribute set of arbitrary config options. Please consult the documentation at the wiki. WARNING: this configuration is stored in the world-readable Nix store! For secrets use services.sonarr.environmentFiles. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Example: { update.mechanism = "internal"; server = { urlbase = "localhost"; port = 8989; bindaddress = "*"; }; } Declared by: <nixpkgs/nixos/modules/services/misc/servarr/sonarr.nix>

## services.sonarr.user

User account under which Sonaar runs. Type: string Default: "sonarr" Declared by: <nixpkgs/nixos/modules/services/misc/servarr/sonarr.nix>
