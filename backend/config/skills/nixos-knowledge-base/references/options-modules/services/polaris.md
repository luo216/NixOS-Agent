---
module: services.polaris
option_count: 8
source: options.html
---

# services.polaris

## services.polaris.enable

Whether to enable Polaris Music Server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/polaris.nix>

## services.polaris.package

The polaris package to use. Type: package Default: pkgs.polaris Declared by: <nixpkgs/nixos/modules/services/misc/polaris.nix>

## services.polaris.extraGroups

Polaris’ auxiliary groups. Type: list of string Default: [ ] Example: ["media" "music"] Declared by: <nixpkgs/nixos/modules/services/misc/polaris.nix>

## services.polaris.group

Group under which Polaris is run. Type: string Default: "polaris" Declared by: <nixpkgs/nixos/modules/services/misc/polaris.nix>

## services.polaris.openFirewall

Open the configured port in the firewall. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/polaris.nix>

## services.polaris.port

The port which the Polaris REST api and web UI should listen to. Note: polaris is hardcoded to listen to the hostname “0.0.0.0”. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5050 Declared by: <nixpkgs/nixos/modules/services/misc/polaris.nix>

## services.polaris.settings

Contents for the TOML Polaris config, applied each start. Although poorly documented, an example may be found here: test-config.toml Type: TOML value Default: { } Example: { settings.reindex_every_n_seconds = 7*24*60*60; # weekly, default is 1800 settings.album_art_pattern = "(cover|front|folder)\.(jpeg|jpg|png|bmp|gif)"; mount_dirs = [ { name = "NAS"; source = "/mnt/nas/music"; } { name = "Local"; source = "/home/my_user/Music"; } ]; } Declared by: <nixpkgs/nixos/modules/services/misc/polaris.nix>

## services.polaris.user

User account under which Polaris runs. Type: string Default: "polaris" Declared by: <nixpkgs/nixos/modules/services/misc/polaris.nix>
