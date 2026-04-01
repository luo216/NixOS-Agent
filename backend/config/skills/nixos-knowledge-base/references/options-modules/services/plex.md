---
module: services.plex
option_count: 9
source: options.html
---

# services.plex

## services.plex.enable

Whether to enable Plex Media Server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/plex.nix>

## services.plex.package

The plex package to use. Plex subscribers may wish to use their own package here, pointing to subscriber-only server versions. Type: package Default: pkgs.plex Declared by: <nixpkgs/nixos/modules/services/misc/plex.nix>

## services.plex.accelerationDevices

A list of device paths to hardware acceleration devices that Plex should have access to. This is useful when transcoding media files. The special value "*" will allow all devices. Type: list of string Default: [ "*" ] Example: [ "/dev/dri/renderD128" ] Declared by: <nixpkgs/nixos/modules/services/misc/plex.nix>

## services.plex.dataDir

The directory where Plex stores its data files. Type: string Default: "/var/lib/plex" Declared by: <nixpkgs/nixos/modules/services/misc/plex.nix>

## services.plex.extraPlugins

A list of paths to extra plugin bundles to install in Plex’s plugin directory. Every time the systemd unit for Plex starts up, all of the symlinks in Plex’s plugin directory will be cleared and this module will symlink all of the paths specified here to that directory. Type: list of absolute path Default: [ ] Example: [ (builtins.path { name = "Audnexus.bundle"; path = pkgs.fetchFromGitHub { owner = "djdembeck"; repo = "Audnexus.bundle"; rev = "v0.2.8"; sha256 = "sha256-IWOSz3vYL7zhdHan468xNc6C/eQ2C2BukQlaJNLXh7E="; }; }) ] Declared by: <nixpkgs/nixos/modules/services/misc/plex.nix>

## services.plex.extraScanners

A list of paths to extra scanners to install in Plex’s scanners directory. Every time the systemd unit for Plex starts up, all of the symlinks in Plex’s scanners directory will be cleared and this module will symlink all of the paths specified here to that directory. Type: list of absolute path Default: [ ] Example: [ (fetchFromGitHub { owner = "ZeroQI"; repo = "Absolute-Series-Scanner"; rev = "773a39f502a1204b0b0255903cee4ed02c46fde0"; sha256 = "4l+vpiDdC8L/EeJowUgYyB3JPNTZ1sauN8liFAcK+PY="; }) ] Declared by: <nixpkgs/nixos/modules/services/misc/plex.nix>

## services.plex.group

Group under which Plex runs. Type: string Default: "plex" Declared by: <nixpkgs/nixos/modules/services/misc/plex.nix>

## services.plex.openFirewall

Open ports in the firewall for the media server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/plex.nix>

## services.plex.user

User account under which Plex runs. Type: string Default: "plex" Declared by: <nixpkgs/nixos/modules/services/misc/plex.nix>
