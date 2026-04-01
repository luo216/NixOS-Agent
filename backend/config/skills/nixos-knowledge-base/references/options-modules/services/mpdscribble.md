---
module: services.mpdscribble
option_count: 8
source: options.html
---

# services.mpdscribble

## services.mpdscribble.enable

Whether to enable mpdscribble, an MPD client which submits info about tracks being played to Last.fm (formerly AudioScrobbler). Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/audio/mpdscribble.nix>

## services.mpdscribble.endpoints

Endpoints to scrobble to. If the endpoint is one of “jamendo”, “last.fm”, “libre.fm”, “listenbrainz” the url is set automatically. Type: attribute set of (submodule) Default: { } Example: { "last.fm" = { passwordFile = "/run/secrets/lastfm_password"; username = "foo"; }; } Declared by: <nixpkgs/nixos/modules/services/audio/mpdscribble.nix>

## services.mpdscribble.host

Host for the mpdscribble daemon to search for a mpd daemon on. Type: string Default: if config.services.mpd.network.listenAddress != "any" then config.services.mpd.network.listenAddress else "localhost" Declared by: <nixpkgs/nixos/modules/services/audio/mpdscribble.nix>

## services.mpdscribble.journalInterval

How often should mpdscribble save the journal file? [seconds] Type: signed integer Default: 600 Example: 60 Declared by: <nixpkgs/nixos/modules/services/audio/mpdscribble.nix>

## services.mpdscribble.passwordFile

File containing the password for the mpd daemon. If there is a local mpd configured using services.mpd.credentials the default is automatically set to a matching passwordFile of the local mpd. Type: null or string Default: The first password file with read access configured for MPD when using a local instance, otherwise null. Declared by: <nixpkgs/nixos/modules/services/audio/mpdscribble.nix>

## services.mpdscribble.port

Port for the mpdscribble daemon to search for a mpd daemon on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: config.services.mpd.network.port Declared by: <nixpkgs/nixos/modules/services/audio/mpdscribble.nix>

## services.mpdscribble.proxy

HTTP proxy URL. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/audio/mpdscribble.nix>

## services.mpdscribble.verbose

Log level for the mpdscribble daemon. Type: signed integer Default: 1 Declared by: <nixpkgs/nixos/modules/services/audio/mpdscribble.nix>
