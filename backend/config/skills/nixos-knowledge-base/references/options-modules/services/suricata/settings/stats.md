---
module: services.suricata.settings.stats
option_count: 5
source: options.html
---

# services.suricata.settings.stats

## services.suricata.settings.stats.enable

Whether to enable suricata global stats. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.settings.stats.decoder-events

Add decode events to stats Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.settings.stats.decoder-events-prefix

Decoder event prefix in stats. Has been ‘decoder’ before, but that leads to missing events in the eve.stats records. Type: string Default: "decoder.event" Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.settings.stats.interval

The interval field (in seconds) controls the interval at which stats are updated in the log. Type: string Default: "8" Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.settings.stats.stream-events

Add stream events as stats. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>
