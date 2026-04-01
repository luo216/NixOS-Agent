---
module: services.invidious-router
option_count: 5
source: options.html
---

# services.invidious-router

## services.invidious-router.enable

Whether to enable the invidious-router service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/invidious-router.nix>

## services.invidious-router.package

The invidious-router package to use. Type: package Default: pkgs.invidious-router Declared by: <nixpkgs/nixos/modules/services/misc/invidious-router.nix>

## services.invidious-router.address

Address on which invidious-router should listen on. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/misc/invidious-router.nix>

## services.invidious-router.port

Port to bind to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8050 Declared by: <nixpkgs/nixos/modules/services/misc/invidious-router.nix>

## services.invidious-router.settings

Configuration for invidious-router. Check https://gitlab.com/gaincoder/invidious-router#configuration for configuration options. Type: open submodule of (YAML 1.1 value) Default: { api = { allowed_regions = [ "AT" "DE" "CH" ]; enabled = true; filter_regions = true; url = "https://api.invidious.io/instances.json"; }; app = { enable_youtube_fallback = false; listen = "127.0.0.1:8050"; reload_instance_list_interval = "60s"; }; healthcheck = { allowed_status_codes = [ 200 ]; filter_by_response_time = { enabled = true; qty_of_top_results = 3; }; interval = "10s"; minimum_ratio = 0.2; path = "/"; remove_no_ratio = true; text_not_present = "YouTube is currently trying to block Invidious instances"; timeout = "1s"; }; } Declared by: <nixpkgs/nixos/modules/services/misc/invidious-router.nix>
