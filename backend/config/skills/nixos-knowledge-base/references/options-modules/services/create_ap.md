---
module: services.create_ap
option_count: 2
source: options.html
---

# services.create_ap

## services.create_ap.enable

Whether to enable setting up wifi hotspots using create_ap. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/create_ap.nix>

## services.create_ap.settings

Configuration for create_ap. See upstream example configuration for supported values. Type: attribute set of (signed integer or boolean or string) Default: { } Example: { INTERNET_IFACE = "eth0"; PASSPHRASE = "12345678"; SSID = "My Wifi Hotspot"; WIFI_IFACE = "wlan0"; } Declared by: <nixpkgs/nixos/modules/services/networking/create_ap.nix>
