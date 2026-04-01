---
module: services.mopidy
option_count: 5
source: options.html
---

# services.mopidy

## services.mopidy.enable

Whether to enable Mopidy, a music player daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/audio/mopidy.nix>

## services.mopidy.dataDir

The directory where Mopidy stores its state. Type: string Default: "/var/lib/mopidy" Declared by: <nixpkgs/nixos/modules/services/audio/mopidy.nix>

## services.mopidy.extensionPackages

Mopidy extensions that should be loaded by the service. Type: list of package Default: [ ] Example: [ pkgs.mopidy-spotify ] Declared by: <nixpkgs/nixos/modules/services/audio/mopidy.nix>

## services.mopidy.extraConfigFiles

Extra config file read by Mopidy when the service starts. Later files in the list overrides earlier configuration. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/audio/mopidy.nix>

## services.mopidy.settings

The configuration that Mopidy should use. See the upstream documentation https://docs.mopidy.com/stable/config/ for details. Type: attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Example: { mpd = { enabled = true; hostname = "::"; }; } Declared by: <nixpkgs/nixos/modules/services/audio/mopidy.nix>
