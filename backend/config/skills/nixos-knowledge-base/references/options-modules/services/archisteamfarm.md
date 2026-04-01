---
module: services.archisteamfarm
option_count: 8
source: options.html
---

# services.archisteamfarm

## services.archisteamfarm.enable

If enabled, starts the ArchisSteamFarm service. For configuring the SteamGuard token you will need to use the web-ui, which is enabled by default over on 127.0.0.1:1242. You cannot configure ASF in any way outside of nix, since all the config files get wiped on restart and replaced with the programnatically set ones by nix. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/games/archisteamfarm.nix>

## services.archisteamfarm.package

The archisteamfarm package to use. ::: {.warning} Should always be the latest version, for security reasons, since this module uses very new features and to not get out of sync with the Steam API. ::: Type: package Default: pkgs.archisteamfarm Declared by: <nixpkgs/nixos/modules/services/games/archisteamfarm.nix>

## services.archisteamfarm.bots

Bots name and configuration. Type: attribute set of (submodule) Default: { } Example: { exampleBot = { passwordFile = "/var/lib/archisteamfarm/secrets/password"; settings = { SteamParentalCode = "1234"; }; username = "alice"; }; } Declared by: <nixpkgs/nixos/modules/services/games/archisteamfarm.nix>

## services.archisteamfarm.dataDir

The ASF home directory used to store all data. If left as the default value this directory will automatically be created before the ASF server starts, otherwise the sysadmin is responsible for ensuring the directory exists with appropriate ownership and permissions. Type: absolute path Default: "/var/lib/archisteamfarm" Declared by: <nixpkgs/nixos/modules/services/games/archisteamfarm.nix>

## services.archisteamfarm.ipcPasswordFile

Path to a file containing the password. The file must be readable by the archisteamfarm user/group. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/games/archisteamfarm.nix>

## services.archisteamfarm.ipcSettings

Settings to write to IPC.config. All options can be found here. Type: JSON value Default: { } Example: { Kestrel = { Endpoints = { HTTP = { Url = "http://*:1242"; }; }; }; } Declared by: <nixpkgs/nixos/modules/services/games/archisteamfarm.nix>

## services.archisteamfarm.settings

The ASF.json file, all the options are documented here. Do note that AutoRestart and UpdateChannel is always to false respectively 0 because NixOS takes care of updating everything. Headless is also always set to true because there is no way to provide inputs via a systemd service. You should try to keep ASF up to date since upstream does not provide support for anything but the latest version and you’re exposing yourself to all kinds of issues - as is outlined here. Type: JSON value Default: { } Example: { Statistics = false; } Declared by: <nixpkgs/nixos/modules/services/games/archisteamfarm.nix>

## services.archisteamfarm.web-ui

The Web-UI hosted on 127.0.0.1:1242. Type: submodule Default: { enable = true; } Example: { enable = false; } Declared by: <nixpkgs/nixos/modules/services/games/archisteamfarm.nix>
