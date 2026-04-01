---
module: services.hostapd.radios.<name>.wifi4
option_count: 3
source: options.html
---

# services.hostapd.radios.<name>.wifi4

## services.hostapd.radios.<name>.wifi4.enable

Enables support for IEEE 802.11n (WiFi 4, HT). This is enabled by default, since the vase majority of devices are expected to support this. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.wifi4.capabilities

HT (High Throughput) capabilities given as a list of flags. Please refer to the hostapd documentation for allowed values and only set values supported by your physical adapter. The default contains common values supported by most adapters. Type: list of string Default: [ "HT40" "SHORT-GI-20" "SHORT-GI-40" ] Example: [ "LDPC" "HT40+" "HT40-" "GF" "SHORT-GI-20" "SHORT-GI-40" "TX-STBC" "RX-STBC1" ] Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.wifi4.require

Require stations (clients) to support WiFi 4 (HT) and disassociate them if they don’t. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>
