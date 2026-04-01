---
module: networking.wireless
option_count: 12
source: options.html
---

# networking.wireless

## networking.wireless.enable

Whether to enable wpa_supplicant. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/wpa_supplicant.nix>

## networking.wireless.allowAuxiliaryImperativeNetworks

Whether to allow configuring networks “imperatively” (e.g. via wpa_supplicant_gui) and declaratively via networking.wireless.networks. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/wpa_supplicant.nix>

## networking.wireless.athUserRegulatoryDomain

If enabled, sets the ATH_USER_REGD kernel config switch to true to disable the enforcement of EEPROM regulatory restrictions for ath drivers. Requires at least Linux 5.8. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/hardware/network/ath-user-regd.nix>

## networking.wireless.dbusControlled

Whether to enable the DBus control interface. This is only needed when using NetworkManager or connman. Type: boolean Default: length config.networking.wireless.interfaces < 2 Declared by: <nixpkgs/nixos/modules/services/networking/wpa_supplicant.nix>

## networking.wireless.driver

Force a specific wpa_supplicant driver. Type: string Default: "nl80211,wext" Declared by: <nixpkgs/nixos/modules/services/networking/wpa_supplicant.nix>

## networking.wireless.extraConfig

Extra lines appended to the configuration file. See wpa_supplicant.conf(5) for available options. Type: string Default: "" Example: '' p2p_disabled=1 '' Declared by: <nixpkgs/nixos/modules/services/networking/wpa_supplicant.nix>

## networking.wireless.extraConfigFiles

Extra wpa_supplicant configuration files to load. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/wpa_supplicant.nix>

## networking.wireless.fallbackToWPA2

Whether to fall back to WPA2 authentication protocols if WPA3 failed. This allows old wireless cards (that lack recent features required by WPA3) to connect to mixed WPA2/WPA3 access points. To avoid possible downgrade attacks, disable this options. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/wpa_supplicant.nix>

## networking.wireless.interfaces

The interfaces wpa_supplicant will use. If empty, it will automatically use all wireless interfaces. Note A separate wpa_supplicant instance will be started for each interface. Type: list of string Default: [ ] Example: [ "wlan0" "wlan1" ] Declared by: <nixpkgs/nixos/modules/services/networking/wpa_supplicant.nix>

## networking.wireless.networks

The network definitions to automatically connect to when wpa_supplicant is running. If this parameter is left empty wpa_supplicant will use /etc/wpa_supplicant.conf as the configuration file. Type: attribute set of (submodule) Default: { } Example: { echelon = { # SSID with no spaces or special characters psk = "abcdefgh"; # (password will be written to /nix/store!) }; echelon = { # safe version of the above: read PSK from the pskRaw = "ext:psk_echelon"; # variable psk_echelon, defined in secretsFile, }; # this won't leak into /nix/store "echelon's AP" = { # SSID with spaces and/or special characters psk = "ijklmnop"; # (password will be written to /nix/store!) }; "free.wifi" = {}; # Public wireless network } Declared by: <nixpkgs/nixos/modules/services/networking/wpa_supplicant.nix>

## networking.wireless.scanOnLowSignal

Whether to periodically scan for (better) networks when the signal of the current one is low. This will make roaming between access points faster, but will consume more power. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/wpa_supplicant.nix>

## networking.wireless.secretsFile

File consisting of lines of the form varname=value to define variables for the wireless configuration. Secrets (PSKs, passwords, etc.) can be provided without adding them to the world-readable Nix store by defining them in the secrets file and referring to them in option networking.wireless.networks with the syntax ext:secretname. Example: # content of /run/secrets/wireless.conf psk_home=mypassword psk_other=6a381cea59c7a2d6b30736ba0e6f397f7564a044bcdb7a327a1d16a1ed91b327 pass_work=myworkpassword # wireless-related configuration networking.wireless.secretsFile = "/run/secrets/wireless.conf"; networking.wireless.networks = { home.pskRaw = "ext:psk_home"; other.pskRaw = "ext:psk_other"; work.auth = '' eap=PEAP identity="my-user@example.com" password=ext:pass_work ''; }; Type: null or absolute path Default: null Example: "/run/secrets/wireless.conf" Declared by: <nixpkgs/nixos/modules/services/networking/wpa_supplicant.nix>
