---
module: networking.wireless.networks.<name>
option_count: 9
source: options.html
---

# networking.wireless.networks.<name>

## networking.wireless.networks.<name>.auth

Use this option to configure advanced authentication methods like EAP. See wpa_supplicant.conf(5) for example configurations. Warning Be aware that this will be written to the Nix store in plaintext! Use an external reference like ext:secretname for secrets. Note Mutually exclusive with psk and pskRaw. Type: null or string Default: null Example: '' eap=PEAP identity="user@example.com" password=ext:example_password '' Declared by: <nixpkgs/nixos/modules/services/networking/wpa_supplicant.nix>

## networking.wireless.networks.<name>.authProtocols

The list of authentication protocols accepted by this network. This corresponds to the key_mgmt option in wpa_supplicant. Type: list of (one of “WPA-PSK”, “WPA-EAP”, “IEEE8021X”, “NONE”, “WPA-NONE”, “FT-PSK”, “FT-EAP”, “FT-EAP-SHA384”, “WPA-PSK-SHA256”, “WPA-EAP-SHA256”, “SAE”, “FT-SAE”, “WPA-EAP-SUITE-B”, “WPA-EAP-SUITE-B-192”, “OSEN”, “FILS-SHA256”, “FILS-SHA384”, “FT-FILS-SHA256”, “FT-FILS-SHA384”, “OWE”, “DPP”) Default: [ "WPA-PSK" "WPA-EAP" "SAE" "FT-PSK" "FT-EAP" "FT-SAE" ] Declared by: <nixpkgs/nixos/modules/services/networking/wpa_supplicant.nix>

## networking.wireless.networks.<name>.bssid

If set, this network block is used only when associating with the AP using the configured BSSID. Type: null or string Default: null Example: "02:00:00:00:00:01" Declared by: <nixpkgs/nixos/modules/services/networking/wpa_supplicant.nix>

## networking.wireless.networks.<name>.extraConfig

Extra configuration lines appended to the network block. See wpa_supplicant.conf(5) for available options. Type: string Default: "" Example: '' bssid_blacklist=02:11:22:33:44:55 02:22:aa:44:55:66 '' Declared by: <nixpkgs/nixos/modules/services/networking/wpa_supplicant.nix>

## networking.wireless.networks.<name>.hidden

Set this to true if the SSID of the network is hidden. Type: boolean Default: false Example: { echelon = { hidden = true; psk = "abcdefgh"; }; } Declared by: <nixpkgs/nixos/modules/services/networking/wpa_supplicant.nix>

## networking.wireless.networks.<name>.priority

By default, all networks will get same priority group (0). If some of the networks are more desirable, this field can be used to change the order in which wpa_supplicant goes through the networks when selecting a BSS. The priority groups will be iterated in decreasing priority (i.e., the larger the priority value, the sooner the network is matched against the scan results). Within each priority group, networks will be selected based on security policy, signal strength, etc. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/wpa_supplicant.nix>

## networking.wireless.networks.<name>.psk

The network’s pre-shared key in plaintext defaulting to being a network without any authentication. Warning Be aware that this will be written to the Nix store in plaintext! Use pskRaw with an external reference to keep it safe. Note Mutually exclusive with pskRaw. Type: null or string matching the pattern [[:print:]]{8,63} Default: null Declared by: <nixpkgs/nixos/modules/services/networking/wpa_supplicant.nix>

## networking.wireless.networks.<name>.pskRaw

Either the raw pre-shared key in hexadecimal format or the name of the secret (as defined inside networking.wireless.secretsFile and prefixed with ext:) containing the network pre-shared key. Warning Be aware that this will be written to the Nix store in plaintext! Always use an external reference. Note The external secret can be either the plaintext passphrase or the raw pre-shared key. Note Mutually exclusive with psk and auth. Type: null or string matching the pattern ([[:xdigit:]]{64})|(ext:[^=]+) Default: null Example: "ext:name_of_the_secret_here" Declared by: <nixpkgs/nixos/modules/services/networking/wpa_supplicant.nix>

## networking.wireless.networks.<name>.ssid

You could use this field to override the network’s ssid. This can be useful to, for example, specify two networks that share the same SSID but not the same password. Specifying the BSSID of the network can make two entries of the same SSID show up as different ones in wpa_cli. Type: string Default: "‹name›" Declared by: <nixpkgs/nixos/modules/services/networking/wpa_supplicant.nix>
