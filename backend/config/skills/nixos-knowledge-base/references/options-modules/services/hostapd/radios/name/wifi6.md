---
module: services.hostapd.radios.<name>.wifi6
option_count: 6
source: options.html
---

# services.hostapd.radios.<name>.wifi6

## services.hostapd.radios.<name>.wifi6.enable

Enables support for IEEE 802.11ax (WiFi 6, HE) Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.wifi6.multiUserBeamformer

HE multi user beamformee support Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.wifi6.operatingChannelWidth

Determines the operating channel width for HE. "20or40": 20 or 40 MHz operating channel width "80": 80 MHz channel width "160": 160 MHz channel width "80+80": 80+80 MHz channel width Type: one of “20or40”, “80”, “160”, “80+80” Default: "20or40" Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.wifi6.require

Require stations (clients) to support WiFi 6 (HE) and disassociate them if they don’t. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.wifi6.singleUserBeamformee

HE single user beamformee support Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.wifi6.singleUserBeamformer

HE single user beamformer support Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>
