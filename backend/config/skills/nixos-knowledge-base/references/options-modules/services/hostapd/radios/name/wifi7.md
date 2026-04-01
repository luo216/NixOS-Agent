---
module: services.hostapd.radios.<name>.wifi7
option_count: 5
source: options.html
---

# services.hostapd.radios.<name>.wifi7

## services.hostapd.radios.<name>.wifi7.enable

Enables support for IEEE 802.11be (WiFi 7, EHT). This is currently experimental and requires you to manually enable CONFIG_IEEE80211BE when building hostapd. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.wifi7.multiUserBeamformer

EHT multi user beamformee support Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.wifi7.operatingChannelWidth

Determines the operating channel width for EHT. "20or40": 20 or 40 MHz operating channel width "80": 80 MHz channel width "160": 160 MHz channel width "80+80": 80+80 MHz channel width Type: one of “20or40”, “80”, “160”, “80+80” Default: "20or40" Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.wifi7.singleUserBeamformee

EHT single user beamformee support Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.wifi7.singleUserBeamformer

EHT single user beamformer support Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>
