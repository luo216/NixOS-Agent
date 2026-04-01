---
module: services.minidlna.settings
option_count: 11
source: options.html
---

# services.minidlna.settings

## services.minidlna.settings.enable_subtitles

Enable subtitle support on unknown clients. Type: one of “yes”, “no” Default: "yes" Declared by: <nixpkgs/nixos/modules/services/networking/minidlna.nix>

## services.minidlna.settings.enable_tivo

Support for streaming .jpg and .mp3 files to a TiVo supporting HMO. Type: one of “yes”, “no” Default: "no" Declared by: <nixpkgs/nixos/modules/services/networking/minidlna.nix>

## services.minidlna.settings.db_dir

Specify the directory to store database and album art cache. Type: absolute path Default: "/var/cache/minidlna" Example: "/tmp/minidlna" Declared by: <nixpkgs/nixos/modules/services/networking/minidlna.nix>

## services.minidlna.settings.friendly_name

Name that the server presents to clients. Type: string Default: config.networking.hostName Example: "rpi3" Declared by: <nixpkgs/nixos/modules/services/networking/minidlna.nix>

## services.minidlna.settings.inotify

Whether to enable inotify monitoring to automatically discover new files. Type: one of “yes”, “no” Default: "no" Declared by: <nixpkgs/nixos/modules/services/networking/minidlna.nix>

## services.minidlna.settings.log_level

Defines the type of messages that should be logged and down to which level of importance. Type: string Default: "warn" Example: "general,artwork,database,inotify,scanner,metadata,http,ssdp,tivo=warn" Declared by: <nixpkgs/nixos/modules/services/networking/minidlna.nix>

## services.minidlna.settings.media_dir

Directories to be scanned for media files. The A, V, P, prefixes restrict a directory to audio, video or image files. The directories must be accessible to the minidlna user account. Type: list of string Default: [ ] Example: [ "/data/media" "V,/home/alice/video" ] Declared by: <nixpkgs/nixos/modules/services/networking/minidlna.nix>

## services.minidlna.settings.notify_interval

The interval between announces (in seconds). Instead of waiting for announces, you should set openFirewall option to use SSDP discovery. Lower values (e.g. 30 seconds) should be used if your network is blocking the SSDP multicast. Some relevant information can be found here. Type: signed integer Default: 90000 Declared by: <nixpkgs/nixos/modules/services/networking/minidlna.nix>

## services.minidlna.settings.port

Port number for HTTP traffic (descriptions, SOAP, media transfer). Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8200 Declared by: <nixpkgs/nixos/modules/services/networking/minidlna.nix>

## services.minidlna.settings.root_container

Use a different container as the root of the directory tree presented to clients. Type: string Default: "B" Example: "." Declared by: <nixpkgs/nixos/modules/services/networking/minidlna.nix>

## services.minidlna.settings.wide_links

Set this to yes to allow symlinks that point outside user-defined media_dir. Type: one of “yes”, “no” Default: "no" Declared by: <nixpkgs/nixos/modules/services/networking/minidlna.nix>
