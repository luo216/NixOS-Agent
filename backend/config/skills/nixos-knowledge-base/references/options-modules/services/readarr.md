---
module: services.readarr
option_count: 8
source: options.html
---

# services.readarr

## services.readarr.enable

Whether to enable Readarr, a Usenet/BitTorrent ebook downloader. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/servarr/readarr.nix>

## services.readarr.package

The readarr package to use. Type: package Default: pkgs.readarr Declared by: <nixpkgs/nixos/modules/services/misc/servarr/readarr.nix>

## services.readarr.dataDir

The directory where Readarr stores its data files. Type: string Default: "/var/lib/readarr/" Declared by: <nixpkgs/nixos/modules/services/misc/servarr/readarr.nix>

## services.readarr.environmentFiles

Environment file to pass secret configuration values. Each line must follow the READARR__SECTION__KEY=value pattern. Please consult the documentation at the wiki. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/misc/servarr/readarr.nix>

## services.readarr.group

Group under which Readarr runs. Type: string Default: "readarr" Declared by: <nixpkgs/nixos/modules/services/misc/servarr/readarr.nix>

## services.readarr.openFirewall

Open ports in the firewall for Readarr Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/servarr/readarr.nix>

## services.readarr.settings

Attribute set of arbitrary config options. Please consult the documentation at the wiki. WARNING: this configuration is stored in the world-readable Nix store! For secrets use services.readarr.environmentFiles. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Example: { update.mechanism = "internal"; server = { urlbase = "localhost"; port = 8787; bindaddress = "*"; }; } Declared by: <nixpkgs/nixos/modules/services/misc/servarr/readarr.nix>

## services.readarr.user

User account under which Readarr runs. Type: string Default: "readarr" Declared by: <nixpkgs/nixos/modules/services/misc/servarr/readarr.nix>
