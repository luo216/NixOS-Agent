---
module: services.whisparr
option_count: 8
source: options.html
---

# services.whisparr

## services.whisparr.enable

Whether to enable Whisparr. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/servarr/whisparr.nix>

## services.whisparr.package

The whisparr package to use. Type: package Default: pkgs.whisparr Declared by: <nixpkgs/nixos/modules/services/misc/servarr/whisparr.nix>

## services.whisparr.dataDir

The directory where Whisparr stores its data files. Type: absolute path Default: "/var/lib/whisparr/.config/Whisparr" Declared by: <nixpkgs/nixos/modules/services/misc/servarr/whisparr.nix>

## services.whisparr.environmentFiles

Environment file to pass secret configuration values. Each line must follow the WHISPARR__SECTION__KEY=value pattern. Please consult the documentation at the wiki. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/misc/servarr/whisparr.nix>

## services.whisparr.group

Group under which Whisparr runs. Type: string Default: "whisparr" Declared by: <nixpkgs/nixos/modules/services/misc/servarr/whisparr.nix>

## services.whisparr.openFirewall

Open ports in the firewall for the Whisparr web interface. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/servarr/whisparr.nix>

## services.whisparr.settings

Attribute set of arbitrary config options. Please consult the documentation at the wiki. WARNING: this configuration is stored in the world-readable Nix store! For secrets use services.whisparr.environmentFiles. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Example: { update.mechanism = "internal"; server = { urlbase = "localhost"; port = 6969; bindaddress = "*"; }; } Declared by: <nixpkgs/nixos/modules/services/misc/servarr/whisparr.nix>

## services.whisparr.user

User account under which Whisparr runs. Type: string Default: "whisparr" Declared by: <nixpkgs/nixos/modules/services/misc/servarr/whisparr.nix>
