---
module: services.hostapd.radios.<name>.networks.<name>.authentication
option_count: 9
source: options.html
---

# services.hostapd.radios.<name>.networks.<name>.authentication

## services.hostapd.radios.<name>.networks.<name>.authentication.enableRecommendedPairwiseCiphers

Additionally enable the recommended set of pairwise ciphers. This enables newer secure ciphers, additionally to those defined in pairwiseCiphers. You will have to test whether your hardware supports these by trial-and-error, because even if iw list indicates hardware support, your driver might not expose it. Beware hostapd will most likely not return a useful error message in case this is enabled despite the driver or hardware not supporting the newer ciphers. Look out for messages like Failed to set beacon parameters. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.networks.<name>.authentication.mode

Selects the authentication mode for this AP. "none": Don’t configure any authentication. This will disable wpa alltogether and create an open AP. Use settings together with this option if you want to configure the authentication manually. Any password options will still be effective, if set. "wpa2-sha1": Not recommended. WPA2-Personal using HMAC-SHA1. Passwords are set using wpaPassword or preferably by wpaPasswordFile or wpaPskFile. "wpa2-sha256": WPA2-Personal using HMAC-SHA256 (IEEE 802.11i/RSN). Passwords are set using wpaPassword or preferably by wpaPasswordFile or wpaPskFile. "wpa3-sae-transition": Use WPA3-Personal (SAE) if possible, otherwise fallback to WPA2-SHA256. Only use if necessary and switch to the newer WPA3-SAE when possible. You will have to specify both wpaPassword and saePasswords (or one of their alternatives). "wpa3-sae": Use WPA3-Personal (SAE). This is currently the recommended way to setup a secured WiFi AP (as of March 2023) and therefore the default. Passwords are set using either saePasswords or saePasswordsFile. Type: one of “none”, “wpa2-sha1”, “wpa2-sha256”, “wpa3-sae-transition”, “wpa3-sae” Default: "wpa3-sae" Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.networks.<name>.authentication.pairwiseCiphers

Set of accepted cipher suites (encryption algorithms) for pairwise keys (unicast packets). By default this allows just CCMP, which is the only commonly supported secure option. Use enableRecommendedPairwiseCiphers to also enable newer recommended ciphers. Please refer to the hostapd documentation for allowed values. Generally, only CCMP or GCMP modes should be considered safe options. Most devices support CCMP while GCMP and GCMP-256 is often only available with devices supporting WiFi 5 (IEEE 802.11ac) or higher. CCMP-256 support is rare. Type: list of string Default: [ "CCMP" ] Example: [ "GCMP" "GCMP-256" ] Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.networks.<name>.authentication.saeAddToMacAllow

If set, all sae password entries that have a non-wildcard MAC associated to them will additionally be used to populate the MAC allow list. This is additional to any entries set via macAllow or macAllowFile. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.networks.<name>.authentication.saePasswords

Sets allowed passwords for WPA3-SAE. The last matching (based on peer MAC address and identifier) entry is used to select which password to use. An empty string has the special meaning of removing all previously added entries. Warning: These entries will get put into a world-readable file in the Nix store! Using saePasswordFile instead is recommended. Not used when mode is "wpa2-sha1" or "wpa2-sha256". Type: list of (submodule) Default: [ ] Example: [ # Any client may use these passwords { password = "Wi-Figure it out"; } { passwordFile = "/run/secrets/my-password-file"; mac = "ff:ff:ff:ff:ff:ff"; } # Only the client with MAC-address 11:22:33:44:55:66 can use this password { password = "sekret pazzword"; mac = "11:22:33:44:55:66"; } ] Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.networks.<name>.authentication.saePasswordsFile

Sets the password for WPA3-SAE. Follows the same rules as saePasswords, but reads the entries from the given file to prevent them from being put into the Nix store. One entry per line, empty lines and lines beginning with # will be ignored. Each line must match the following format, although the order of optional parameters doesn’t matter: <password>[|mac=<peer mac>][|vlanid=<VLAN ID>][|pk=<m:ECPrivateKey-base64>][|id=<identifier>] Not used when mode is "wpa2-sha1" or "wpa2-sha256". Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.networks.<name>.authentication.wpaPassword

Sets the password for WPA-PSK that will be converted to the pre-shared key. The password length must be in the range [8, 63] characters. While some devices may allow arbitrary characters (such as UTF-8) to be used, but the standard specifies that each character in the passphrase must be an ASCII character in the range [0x20, 0x7e] (IEEE Std. 802.11i-2004, Annex H.4.1). Use emojis at your own risk. Not used when mode is "wpa3-sae". Warning: This password will get put into a world-readable file in the Nix store! Using wpaPasswordFile or wpaPskFile instead is recommended. Type: null or string Default: null Example: "a flakey password" Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.networks.<name>.authentication.wpaPasswordFile

Sets the password for WPA-PSK. Follows the same rules as wpaPassword, but reads the password from the given file to prevent the password from being put into the Nix store. Not used when mode is "wpa3-sae". Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.networks.<name>.authentication.wpaPskFile

Sets the password(s) for WPA-PSK. Similar to wpaPasswordFile, but additionally allows specifying multiple passwords, and some other options. Each line, except for empty lines and lines starting with #, must contain a MAC address and either a 64-hex-digit PSK or a password separated with a space. The password must follow the same rules as outlined in wpaPassword. The special MAC address 00:00:00:00:00:00 can be used to configure PSKs that any client can use. An optional key identifier can be added by prefixing the line with keyid=<keyid_string> An optional VLAN ID can be specified by prefixing the line with vlanid=<VLAN ID>. An optional WPS tag can be added by prefixing the line with wps=<0/1> (default: 0). Any matching entry with that tag will be used when generating a PSK for a WPS Enrollee instead of generating a new random per-Enrollee PSK. Not used when mode is "wpa3-sae". Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>
