---
module: services.stash.settings
option_count: 31
source: options.html
---

# services.stash.settings

## services.stash.settings.blobs_path

Path to blobs Type: absolute path Default: "/var/lib/stash/blobs" Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.settings.blobs_storage

Where to store blobs Type: one of “FILESYSTEM”, “DATABASE” Default: "FILESYSTEM" Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.settings.cache

Path to cache Type: absolute path Default: "/var/lib/stash/cache" Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.settings.calculate_md5

Whether to calculate MD5 checksums for scene video files Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.settings.create_image_clip_from_videos

Create Image Clips from Video extensions when Videos are disabled in Library Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.settings.dangerous_allow_public_without_auth

Learn more at https://docs.stashapp.cc/networking/authentication-required-when-accessing-stash-from-the-internet/ Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.settings.database

Path to the SQLite database Type: absolute path Default: "/var/lib/stash/go.sqlite" Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.settings.gallery_cover_regex

Regex used to identify images as gallery covers Type: string Default: "(poster|cover|folder|board)\\.[^.]+$" Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.settings.generated

Path to generated files Type: absolute path Default: "/var/lib/stash/generated" Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.settings.host

The ip address that Stash should bind to. Type: string Default: "localhost" Example: "::1" Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.settings.no_proxy

A list of domains for which the proxy must not be used Type: string Default: "localhost,127.0.0.1,192.168.0.0/16,10.0.0.0/8,172.16.0.0/12" Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.settings.nobrowser

If we should not auto-open a browser window on startup Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.settings.notifications_enabled

If we should send notifications to the desktop Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.settings.parallel_tasks

Number of parallel tasks to start during scan/generate Type: signed integer Default: 1 Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.settings.plugins_path

Path to scrapers Type: absolute path Default: "/var/lib/stash/plugins" Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.settings.port

The port that Stash should listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9999 Example: 1234 Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.settings.preview_audio

Include audio stream in previews Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.settings.preview_exclude_end

Duration of start of video to exclude when generating previews Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.settings.preview_exclude_start

Duration of end of video to exclude when generating previews Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.settings.preview_segment_duration

Preview segment duration, in seconds Type: floating point number Default: 0.75 Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.settings.preview_segments

Number of segments in a preview file Type: signed integer Default: 12 Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.settings.scrapers_path

Path to scrapers Type: absolute path Default: "/var/lib/stash/scrapers" Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.settings.security_tripwire_accessed_from_public_internet

Learn more at https://docs.stashapp.cc/networking/authentication-required-when-accessing-stash-from-the-internet/ Type: null or string Default: "" Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.settings.sequential_scanning

Modifies behaviour of the scanning functionality to generate support files (previews/sprites/phash) at the same time as fingerprinting/screenshotting Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.settings.show_one_time_moved_notification

Whether a small notification to inform the user that Stash will no longer show a terminal window, and instead will be available in the tray Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.settings.sound_on_preview

Enable sound on mouseover previews Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.settings.stash

Add directories containing your adult videos and images. Stash will use these directories to find videos and/or images during scanning. Type: list of (submodule) Example: { stash = [ { Path = "/media/drive/videos"; ExcludeImage = true; } ]; } Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.settings.stash_boxes

Stash-box facilitates automated tagging of scenes and performers based on fingerprints and filenames Type: list of (submodule) Default: [ ] Example: { stash_boxes = [ { name = "StashDB"; endpoint = "https://stashdb.org/graphql"; apikey = "aaaaaaaaaaaa.bbbbbbbbbbbbbbbbbbbbbbbb.cccccccccccccc"; } ]; } Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.settings.theme_color

Sets the theme-color property in the UI Type: string Default: "#202b33" Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.settings.video_file_naming_algorithm

Hash algorithm to use for generated file naming Type: one of “OSHASH”, “MD5” Default: "OSHASH" Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.settings.write_image_thumbnails

Write image thumbnails to disk when generating on the fly Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>
