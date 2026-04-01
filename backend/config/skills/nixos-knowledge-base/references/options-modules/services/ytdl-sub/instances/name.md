---
module: services.ytdl-sub.instances.<name>
option_count: 5
source: options.html
---

# services.ytdl-sub.instances.<name>

## services.ytdl-sub.instances.<name>.enable

Whether to enable ytdl-sub instance. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/ytdl-sub.nix>

## services.ytdl-sub.instances.<name>.config

Configuration for ytdl-sub. See https://ytdl-sub.readthedocs.io/en/latest/config_reference/config_yaml.html for more information. Type: YAML 1.1 value Default: { } Example: { presets = { "YouTube Playlist" = { download = "{subscription_value}"; output_options = { file_name = "{channel}/{playlist_title}/{playlist_index_padded}_{title}.{ext}"; maintain_download_archive = true; output_directory = "YouTube"; }; }; }; } Declared by: <nixpkgs/nixos/modules/services/misc/ytdl-sub.nix>

## services.ytdl-sub.instances.<name>.readWritePaths

List of paths that ytdl-sub can write to. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/misc/ytdl-sub.nix>

## services.ytdl-sub.instances.<name>.schedule

How often to run ytdl-sub. See systemd.time(7) for the format. Type: null or string Default: null Example: "0/6:0" Declared by: <nixpkgs/nixos/modules/services/misc/ytdl-sub.nix>

## services.ytdl-sub.instances.<name>.subscriptions

Subscriptions for ytdl-sub. See https://ytdl-sub.readthedocs.io/en/latest/config_reference/subscription_yaml.html for more information. Type: YAML 1.1 value Default: { } Example: { "YouTube Playlist" = { "Some Playlist" = "https://www.youtube.com/playlist?list=..."; }; } Declared by: <nixpkgs/nixos/modules/services/misc/ytdl-sub.nix>
