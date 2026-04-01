---
module: services.hostapd.radios.<name>.wifi5
option_count: 4
source: options.html
---

# services.hostapd.radios.<name>.wifi5

## services.hostapd.radios.<name>.wifi5.enable

Enables support for IEEE 802.11ac (WiFi 5, VHT) Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.wifi5.capabilities

VHT (Very High Throughput) capabilities given as a list of flags. Please refer to the hostapd documentation for allowed values and only set values supported by your physical adapter. Type: list of string Default: [ ] Example: [ "SHORT-GI-80" "TX-STBC-2BY1" "RX-STBC-1" "RX-ANTENNA-PATTERN" "TX-ANTENNA-PATTERN" ] Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.wifi5.operatingChannelWidth

Determines the operating channel width for VHT. "20or40": 20 or 40 MHz operating channel width "80": 80 MHz channel width "160": 160 MHz channel width "80+80": 80+80 MHz channel width Type: one of “20or40”, “80”, “160”, “80+80” Default: "20or40" Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.wifi5.require

Require stations (clients) to support WiFi 5 (VHT) and disassociate them if they don’t. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>
