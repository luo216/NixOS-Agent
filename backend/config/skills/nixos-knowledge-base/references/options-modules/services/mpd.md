---
module: services.mpd
option_count: 11
source: options.html
---

# services.mpd

## services.mpd.enable

Whether to enable MPD, the music player daemon. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/audio/mpd.nix>

## services.mpd.credentials

Credentials and permissions for accessing the mpd server. Type: list of (submodule) Default: [ ] Example: [ { passwordFile = "/var/lib/secrets/mpd_readonly_password"; permissions = [ "read" ]; } { passwordFile = "/var/lib/secrets/mpd_admin_password"; permissions = [ "read" "add" "control" "admin" ]; } ] Declared by: <nixpkgs/nixos/modules/services/audio/mpd.nix>

## services.mpd.dataDir

The directory where MPD stores its state, tag cache, playlists etc. If left as the default value this directory will automatically be created before the MPD server starts, otherwise the sysadmin is responsible for ensuring the directory exists with appropriate ownership and permissions. Type: absolute path Default: "/var/lib/mpd" Declared by: <nixpkgs/nixos/modules/services/audio/mpd.nix>

## services.mpd.dbFile

The path to MPD’s database. If set to null the parameter is omitted from the configuration. Type: null or string Default: "${dataDir}/tag_cache" Declared by: <nixpkgs/nixos/modules/services/audio/mpd.nix>

## services.mpd.extraConfig

Extra directives added to to the end of MPD’s configuration file, mpd.conf. Basic configuration like file location and uid/gid is added automatically to the beginning of the file. For available options see mpd.conf(5). Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/audio/mpd.nix>

## services.mpd.fluidsynth

If set, add fluidsynth soundfont and configure the plugin. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/audio/mpd.nix>

## services.mpd.group

Group account under which MPD runs. Type: string Default: "mpd" Declared by: <nixpkgs/nixos/modules/services/audio/mpd.nix>

## services.mpd.musicDirectory

The directory or NFS/SMB network share where MPD reads music from. If left as the default value this directory will automatically be created before the MPD server starts, otherwise the sysadmin is responsible for ensuring the directory exists with appropriate ownership and permissions. Type: absolute path or string matching the pattern (http|https|nfs|smb)://.+ Default: "${dataDir}/music" Declared by: <nixpkgs/nixos/modules/services/audio/mpd.nix>

## services.mpd.playlistDirectory

The directory where MPD stores playlists. If left as the default value this directory will automatically be created before the MPD server starts, otherwise the sysadmin is responsible for ensuring the directory exists with appropriate ownership and permissions. Type: absolute path Default: "${dataDir}/playlists" Declared by: <nixpkgs/nixos/modules/services/audio/mpd.nix>

## services.mpd.startWhenNeeded

If set, mpd is socket-activated; that is, instead of having it permanently running as a daemon, systemd will start it on the first incoming connection. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/audio/mpd.nix>

## services.mpd.user

User account under which MPD runs. Type: string Default: "mpd" Declared by: <nixpkgs/nixos/modules/services/audio/mpd.nix>
