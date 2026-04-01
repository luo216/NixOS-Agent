---
module: services.vwifi.module
option_count: 3
source: options.html
---

# services.vwifi.module

## services.vwifi.module.enable

Whether to enable mac80211_hwsim module. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/vwifi.nix>

## services.vwifi.module.macPrefix

The prefix for MAC addresses to use, without the trailing ‘:’. If one radio is created, you can specify the whole MAC address here. The default is defined in vwifi/src/config.h. Type: string matching the pattern ^(([0-9A-Fa-f]{2}:){0,5}[0-9A-Fa-f]{2})$ Default: "74:F8:F6" Declared by: <nixpkgs/nixos/modules/services/networking/vwifi.nix>

## services.vwifi.module.numRadios

The number of virtual radio interfaces to create. Type: signed integer Default: 1 Declared by: <nixpkgs/nixos/modules/services/networking/vwifi.nix>
