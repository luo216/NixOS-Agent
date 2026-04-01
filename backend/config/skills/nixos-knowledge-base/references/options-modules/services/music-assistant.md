---
module: services.music-assistant
option_count: 4
source: options.html
---

# services.music-assistant

## services.music-assistant.enable

Whether to enable Music Assistant. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/audio/music-assistant.nix>

## services.music-assistant.package

The music-assistant package to use. Type: package Default: pkgs.music-assistant Declared by: <nixpkgs/nixos/modules/services/audio/music-assistant.nix>

## services.music-assistant.extraOptions

List of extra options to pass to the music-assistant executable. Type: list of string Default: [ "--config" "/var/lib/music-assistant" ] Example: [ "--log-level" "DEBUG" ] Declared by: <nixpkgs/nixos/modules/services/audio/music-assistant.nix>

## services.music-assistant.providers

List of provider names for which dependencies will be installed. Type: list of (one of “airplay”, “alexa”, “apple_music”, “audible”, “audiobookshelf”, “bluesound”, “builtin”, “builtin_player”, “chromecast”, “deezer”, “dlna”, “fanarttv”, “filesystem_local”, “filesystem_smb”, “fully_kiosk”, “gpodder”, “hass”, “hass_players”, “ibroadcast”, “itunes_podcasts”, “jellyfin”, “lastfm_scrobble”, “listenbrainz_scrobble”, “lrclib”, “musicbrainz”, “musiccast”, “nugs”, “opensubsonic”, “player_group”, “plex”, “podcastfeed”, “qobuz”, “radiobrowser”, “siriusxm”, “snapcast”, “sonos”, “sonos_s1”, “soundcloud”, “spotify”, “spotify_connect”, “squeezelite”, “subsonic_scrobble”, “template_player_provider”, “test”, “theaudiodb”, “tidal”, “tunein”, “ytmusic”) Default: [ ] Example: [ "opensubsonic" "snapcast" ] Declared by: <nixpkgs/nixos/modules/services/audio/music-assistant.nix>
