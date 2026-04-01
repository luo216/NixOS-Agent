---
module: networking.supplicant.<name>
option_count: 4
source: options.html
---

# networking.supplicant.<name>

## networking.supplicant.<name>.bridge

Name of the bridge interface that wpa_supplicant should listen at. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/supplicant.nix>

## networking.supplicant.<name>.driver

Force a specific wpa_supplicant driver. Type: null or string Default: "nl80211,wext" Declared by: <nixpkgs/nixos/modules/services/networking/supplicant.nix>

## networking.supplicant.<name>.extraCmdArgs

Command line arguments to add when executing wpa_supplicant. Type: string Default: "" Example: "-e/run/wpa_supplicant/entropy.bin" Declared by: <nixpkgs/nixos/modules/services/networking/supplicant.nix>

## networking.supplicant.<name>.extraConf

Configuration options for wpa_supplicant.conf. Options defined here have precedence over options in configFile. NOTE: Do not write sensitive data into extraConf as it will be world-readable in the nix-store. For sensitive information use the configFile instead. Type: strings concatenated with “\n” Default: "" Example: '' ap_scan=1 device_name=My-NixOS-Device device_type=1-0050F204-1 driver_param=use_p2p_group_interface=1 disable_scan_offload=1 p2p_listen_reg_class=81 p2p_listen_channel=1 p2p_oper_reg_class=81 p2p_oper_channel=1 manufacturer=NixOS model_name=NixOS_Unstable model_number=2015 '' Declared by: <nixpkgs/nixos/modules/services/networking/supplicant.nix>
