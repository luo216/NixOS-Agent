---
module: services.transmission
option_count: 14
source: options.html
---

# services.transmission

## services.transmission.enable

Whether to enable the headless Transmission BitTorrent daemon. Transmission daemon can be controlled via the RPC interface using transmission-remote, the WebUI (http://127.0.0.1:9091/ by default), or other clients like stig or tremc. Torrents are downloaded to services.transmission.home/Downloads by default and are accessible to users in the “transmission” group. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/torrent/transmission.nix>

## services.transmission.package

The transmission package to use. Type: package Default: '' if lib.versionAtLeast config.system.stateVersion "25.11" then pkgs.transmission_4 else «error message» '' Example: pkgs.transmission_4 Declared by: <nixpkgs/nixos/modules/services/torrent/transmission.nix>

## services.transmission.credentialsFile

Path to a JSON file to be merged with the settings. Useful to merge a file which is better kept out of the Nix store to set secret config parameters like rpc-password. Type: absolute path Default: "/dev/null" Example: "/var/lib/secrets/transmission/settings.json" Declared by: <nixpkgs/nixos/modules/services/torrent/transmission.nix>

## services.transmission.downloadDirPermissions

If not null, is used as the permissions set by system.activationScripts.transmission-daemon on the directories services.transmission.settings.download-dir, services.transmission.settings.incomplete-dir. and services.transmission.settings.watch-dir. Note that you may also want to change services.transmission.settings.umask. Keep in mind, that if the default user is used, the home directory is locked behind a 750 permission, which affects all subdirectories as well. There are 3 ways to get around this: (Recommended) add the users that should have access to the group set by services.transmission.group Change services.transmission.settings.download-dir to be under a directory that has the right permissions Change systemd.services.transmission.serviceConfig.StateDirectoryMode to the same value as this option Type: null or string Default: null Example: "770" Declared by: <nixpkgs/nixos/modules/services/torrent/transmission.nix>

## services.transmission.extraFlags

Extra flags passed to the transmission command in the service definition. Type: list of string Default: [ ] Example: [ "--log-debug" ] Declared by: <nixpkgs/nixos/modules/services/torrent/transmission.nix>

## services.transmission.group

Group account under which Transmission runs. Type: string Default: "transmission" Declared by: <nixpkgs/nixos/modules/services/torrent/transmission.nix>

## services.transmission.home

The directory where Transmission will create .config/transmission-daemon. as well as Downloads/ unless services.transmission.settings.download-dir is changed, and .incomplete/ unless services.transmission.settings.incomplete-dir is changed. Type: absolute path Default: "/var/lib/transmission" Declared by: <nixpkgs/nixos/modules/services/torrent/transmission.nix>

## services.transmission.openFirewall

Alias of services.transmission.openPeerPorts. Type: boolean Declared by: <nixpkgs/nixos/modules/services/torrent/transmission.nix>

## services.transmission.openPeerPorts

Whether to enable opening of the peer port(s) in the firewall. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/torrent/transmission.nix>

## services.transmission.openRPCPort

Whether to enable opening of the RPC port in the firewall. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/torrent/transmission.nix>

## services.transmission.performanceNetParameters

Whether to enable tweaking of kernel parameters to open many more connections at the same time. Note that you may also want to increase peer-limit-global. And be aware that these settings are quite aggressive and might not suite your regular desktop use. For instance, SSH sessions may time out more easily. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/torrent/transmission.nix>

## services.transmission.settings

Settings whose options overwrite fields in .config/transmission-daemon/settings.json (each time the service starts). See Transmission’s Wiki for documentation of settings not explicitly covered by this module. Type: open submodule of (JSON value) Default: { } Declared by: <nixpkgs/nixos/modules/services/torrent/transmission.nix>

## services.transmission.user

User account under which Transmission runs. Type: string Default: "transmission" Declared by: <nixpkgs/nixos/modules/services/torrent/transmission.nix>

## services.transmission.webHome

If not null, sets the value of the TRANSMISSION_WEB_HOME environment variable used by the service. Useful for overriding the web interface files, without overriding the transmission package and thus requiring rebuilding it locally. Use this if you want to use an alternative web interface, such as pkgs.flood-for-transmission. Type: null or absolute path Default: null Example: "pkgs.flood-for-transmission" Declared by: <nixpkgs/nixos/modules/services/torrent/transmission.nix>
