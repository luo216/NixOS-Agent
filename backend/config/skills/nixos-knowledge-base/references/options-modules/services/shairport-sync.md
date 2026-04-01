---
module: services.shairport-sync
option_count: 7
source: options.html
---

# services.shairport-sync

## services.shairport-sync.enable

Enable the shairport-sync daemon. Running with a local system-wide or remote pulseaudio server is recommended. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/shairport-sync.nix>

## services.shairport-sync.package

The shairport-sync package to use. Type: package Default: pkgs.shairport-sync Declared by: <nixpkgs/nixos/modules/services/networking/shairport-sync.nix>

## services.shairport-sync.arguments

Arguments to pass to the daemon. Defaults to a local pulseaudio server. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/shairport-sync.nix>

## services.shairport-sync.group

Group account name under which to run shairport-sync. The account will be created. Type: string Default: "shairport" Declared by: <nixpkgs/nixos/modules/services/networking/shairport-sync.nix>

## services.shairport-sync.openFirewall

Whether to automatically open ports in the firewall. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/shairport-sync.nix>

## services.shairport-sync.settings

Configuration options for Shairport-Sync. See the example shairport-sync.conf for possible options. Type: attribute set of (libconfig value) Default: { diagnostics = { log_verbosity = 1; }; general = { output_backend = "pa"; }; } Example: { general = { name = "NixOS Shairport"; output_backend = "pw"; }; metadata = { cover_art_cache_directory = "/tmp/shairport-sync/.cache/coverart"; enabled = "yes"; include_cover_art = "yes"; pipe_name = "/tmp/shairport-sync-metadata"; pipe_timeout = 5000; }; mqtt = { enabled = "yes"; hostname = "mqtt.server.domain.example"; port = 1883; publish_cover = "yes"; publish_parsed = "yes"; }; } Declared by: <nixpkgs/nixos/modules/services/networking/shairport-sync.nix>

## services.shairport-sync.user

User account name under which to run shairport-sync. The account will be created. Type: string Default: "shairport" Declared by: <nixpkgs/nixos/modules/services/networking/shairport-sync.nix>
