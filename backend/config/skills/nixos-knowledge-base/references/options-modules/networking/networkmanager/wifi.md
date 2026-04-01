---
module: networking.networkmanager.wifi
option_count: 4
source: options.html
---

# networking.networkmanager.wifi

## networking.networkmanager.wifi.backend

Specify the Wi-Fi backend used for the device. Currently supported are wpa_supplicant or iwd (experimental). Type: one of “wpa_supplicant”, “iwd” Default: "wpa_supplicant" Declared by: <nixpkgs/nixos/modules/services/networking/networkmanager.nix>

## networking.networkmanager.wifi.macAddress

Set the MAC address of the interface. "XX:XX:XX:XX:XX:XX": MAC address of the interface "permanent": Use the permanent MAC address of the device "preserve": Don’t change the MAC address of the device upon activation "random": Generate a randomized value upon each connect "stable": Generate a stable, hashed MAC address "stable-ssid": Generate a stable MAC addressed based on Wi-Fi network Type: string or one of “permanent”, “preserve”, “random”, “stable”, “stable-ssid” Default: "preserve" Example: "00:11:22:33:44:55" Declared by: <nixpkgs/nixos/modules/services/networking/networkmanager.nix>

## networking.networkmanager.wifi.powersave

Whether to enable Wi-Fi power saving. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/networking/networkmanager.nix>

## networking.networkmanager.wifi.scanRandMacAddress

Whether to enable MAC address randomization of a Wi-Fi device during scanning. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/networkmanager.nix>
