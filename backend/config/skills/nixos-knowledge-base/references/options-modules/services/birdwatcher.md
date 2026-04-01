---
module: services.birdwatcher
option_count: 4
source: options.html
---

# services.birdwatcher

## services.birdwatcher.enable

Whether to enable Birdwatcher. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/birdwatcher.nix>

## services.birdwatcher.package

The birdwatcher package to use. Type: package Default: pkgs.birdwatcher Declared by: <nixpkgs/nixos/modules/services/networking/birdwatcher.nix>

## services.birdwatcher.flags

Flags to append to the program call Type: list of string Default: [ ] Example: [ "-worker-pool-size 16" "-6" ] Declared by: <nixpkgs/nixos/modules/services/networking/birdwatcher.nix>

## services.birdwatcher.settings

birdwatcher configuration, for configuration options see the example on github Type: strings concatenated with “\n” Default: { } Example: [server] allow_from = [] allow_uncached = false modules_enabled = ["status", "protocols", "protocols_bgp", "protocols_short", "routes_protocol", "routes_peer", "routes_table", "routes_table_filtered", "routes_table_peer", "routes_filtered", "routes_prefixed", "routes_noexport", "routes_pipe_filtered_count", "routes_pipe_filtered" ] [status] reconfig_timestamp_source = "bird" reconfig_timestamp_match = "# created: (.*)" filter_fields = [] [bird] listen = "0.0.0.0:29184" config = "/etc/bird/bird.conf" birdc = "${pkgs.bird2}/bin/birdc" ttl = 5 # time to live (in minutes) for caching of cli output [parser] filter_fields = [] [cache] use_redis = false # if not using redis cache, activate housekeeping to save memory! [housekeeping] interval = 5 force_release_memory = true Declared by: <nixpkgs/nixos/modules/services/networking/birdwatcher.nix>
