---
module: services.transmission.settings
option_count: 17
source: options.html
---

# services.transmission.settings

## services.transmission.settings.download-dir

Directory where to download torrents. Type: absolute path Default: "${config.services.transmission.home}/Downloads" Declared by: <nixpkgs/nixos/modules/services/torrent/transmission.nix>

## services.transmission.settings.incomplete-dir

When enabled with services.transmission.home services.transmission.settings.incomplete-dir-enabled, new torrents will download the files to this directory. When complete, the files will be moved to download-dir services.transmission.settings.download-dir. Type: absolute path Default: "${config.services.transmission.home}/.incomplete" Declared by: <nixpkgs/nixos/modules/services/torrent/transmission.nix>

## services.transmission.settings.incomplete-dir-enabled

Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/torrent/transmission.nix>

## services.transmission.settings.message-level

Set verbosity of transmission messages. Type: integer between 0 and 6 (both inclusive) Default: 2 Declared by: <nixpkgs/nixos/modules/services/torrent/transmission.nix>

## services.transmission.settings.peer-port

The peer port to listen for incoming connections. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 51413 Declared by: <nixpkgs/nixos/modules/services/torrent/transmission.nix>

## services.transmission.settings.peer-port-random-high

The maximum peer port to listen to for incoming connections when services.transmission.settings.peer-port-random-on-start is enabled. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 65535 Declared by: <nixpkgs/nixos/modules/services/torrent/transmission.nix>

## services.transmission.settings.peer-port-random-low

The minimal peer port to listen to for incoming connections when services.transmission.settings.peer-port-random-on-start is enabled. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 65535 Declared by: <nixpkgs/nixos/modules/services/torrent/transmission.nix>

## services.transmission.settings.peer-port-random-on-start

Randomize the peer port. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/torrent/transmission.nix>

## services.transmission.settings.rpc-bind-address

Where to listen for RPC connections. Use 0.0.0.0 to listen on all interfaces. Type: string Default: "127.0.0.1" Example: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/torrent/transmission.nix>

## services.transmission.settings.rpc-port

The RPC port to listen to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9091 Declared by: <nixpkgs/nixos/modules/services/torrent/transmission.nix>

## services.transmission.settings.script-torrent-done-enabled

Whether to run services.transmission.settings.script-torrent-done-filename at torrent completion. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/torrent/transmission.nix>

## services.transmission.settings.script-torrent-done-filename

Executable to be run at torrent completion. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/torrent/transmission.nix>

## services.transmission.settings.trash-original-torrent-files

Whether to delete torrents added from the services.transmission.settings.watch-dir. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/torrent/transmission.nix>

## services.transmission.settings.umask

Sets transmission’s file mode creation mask. See the umask(2) manpage for more information. Users who want their saved torrents to be world-writable may want to set this value to 0/"000". Type: signed integer or string Default: "022" Declared by: <nixpkgs/nixos/modules/services/torrent/transmission.nix>

## services.transmission.settings.utp-enabled

Whether to enable Micro Transport Protocol (µTP). Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/torrent/transmission.nix>

## services.transmission.settings.watch-dir

Watch a directory for torrent files and add them to transmission. Type: absolute path Default: "${config.services.transmission.home}/watchdir" Declared by: <nixpkgs/nixos/modules/services/torrent/transmission.nix>

## services.transmission.settings.watch-dir-enabled

Whether to enable the services.transmission.settings.watch-dir. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/torrent/transmission.nix>
