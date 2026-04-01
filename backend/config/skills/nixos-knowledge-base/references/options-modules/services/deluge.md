---
module: services.deluge
option_count: 11
source: options.html
---

# services.deluge

## services.deluge.enable

Whether to enable Deluge daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/torrent/deluge.nix>

## services.deluge.package

The deluge-2_x package to use. Type: package Default: pkgs.deluge-2_x Declared by: <nixpkgs/nixos/modules/services/torrent/deluge.nix>

## services.deluge.authFile

The file managing the authentication for deluge, the format of this file is straightforward, each line contains a username:password:level tuple in plaintext. It only has an effect when services.deluge.declarative is set to true. See https://dev.deluge-torrent.org/wiki/UserGuide/Authentication for more information. Type: absolute path Example: "/run/keys/deluge-auth" Declared by: <nixpkgs/nixos/modules/services/torrent/deluge.nix>

## services.deluge.config

Deluge core configuration for the core.conf file. Only has an effect when services.deluge.declarative is set to true. String values must be quoted, integer and boolean values must not. See https://git.deluge-torrent.org/deluge/tree/deluge/core/preferencesmanager.py#n41 for the available options. Type: attribute set Default: { } Example: { download_location = "/srv/torrents/"; max_upload_speed = "1000.0"; share_ratio_limit = "2.0"; allow_remote = true; daemon_port = 58846; listen_ports = [ 6881 6889 ]; } Declared by: <nixpkgs/nixos/modules/services/torrent/deluge.nix>

## services.deluge.dataDir

The directory where deluge will create files. Type: absolute path Default: "/var/lib/deluge" Declared by: <nixpkgs/nixos/modules/services/torrent/deluge.nix>

## services.deluge.declarative

Whether to use a declarative deluge configuration. Only if set to true, the options services.deluge.config, services.deluge.openFirewall and services.deluge.authFile will be applied. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/torrent/deluge.nix>

## services.deluge.extraPackages

Extra packages available at runtime to enable Deluge’s plugins. For example, extraction utilities are required for the built-in “Extractor” plugin. This always contains unzip, gnutar, xz and bzip2. Type: list of package Default: [ ] Declared by: <nixpkgs/nixos/modules/services/torrent/deluge.nix>

## services.deluge.group

Group under which deluge runs. Type: string Default: "deluge" Declared by: <nixpkgs/nixos/modules/services/torrent/deluge.nix>

## services.deluge.openFilesLimit

Number of files to allow deluged to open. Type: signed integer or string Default: 4096 Declared by: <nixpkgs/nixos/modules/services/torrent/deluge.nix>

## services.deluge.openFirewall

Whether to open the firewall for the ports in services.deluge.config.listen_ports. It only takes effet if services.deluge.declarative is set to true. It does NOT apply to the daemon port nor the web UI port. To access those ports securely check the documentation https://dev.deluge-torrent.org/wiki/UserGuide/ThinClient#CreateSSHTunnel or use a VPN or configure certificates for deluge. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/torrent/deluge.nix>

## services.deluge.user

User account under which deluge runs. Type: string Default: "deluge" Declared by: <nixpkgs/nixos/modules/services/torrent/deluge.nix>
