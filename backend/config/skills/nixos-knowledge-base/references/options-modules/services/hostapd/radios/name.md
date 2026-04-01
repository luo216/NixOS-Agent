---
module: services.hostapd.radios.<name>
option_count: 8
source: options.html
---

# services.hostapd.radios.<name>

## services.hostapd.radios.<name>.band

Specifies the frequency band to use, possible values are 2g for 2.4 GHz, 5g for 5 GHz, 6g for 6 GHz and 60g for 60 GHz. Type: one of “2g”, “5g”, “6g”, “60g” Default: "2g" Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.channel

The channel to operate on. Use 0 to enable ACS (Automatic Channel Selection). Beware that not every device supports ACS in which case hostapd will fail to start. Type: unsigned integer, meaning >=0 Default: 0 Example: 11 Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.countryCode

Country code (ISO/IEC 3166-1). Used to set regulatory domain. Set as needed to indicate country in which device is operating. This can limit available channels and transmit power. These two octets are used as the first two octets of the Country String (dot11CountryString). Setting this will force you to also enable IEEE 802.11d and IEEE 802.11h. IEEE 802.11d: This advertises the countryCode and the set of allowed channels and transmit power levels based on the regulatory limits. IEEE802.11h: This enables radar detection and DFS (Dynamic Frequency Selection) support if available. DFS support is required on outdoor 5 GHz channels in most countries of the world. Type: null or string Default: null Example: "US" Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.driver

The driver hostapd will use. nl80211 is used with all Linux mac80211 drivers. none is used if building a standalone RADIUS server that does not control any wireless/wired driver. Most applications will probably use the default. Type: string Default: "nl80211" Example: "none" Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.dynamicConfigScripts

All of these scripts will be executed in lexicographical order before hostapd is started, right after the global segment was generated and may dynamically append global options the generated configuration file. The first argument will point to the configuration file that you may append to. Type: attribute set of absolute path Default: { } Example: { exampleDynamicConfig = pkgs.writeShellScript "dynamic-config" '' HOSTAPD_CONFIG=$1 cat >> "$HOSTAPD_CONFIG" << EOF # Add some dynamically generated statements here, # for example based on the physical adapter in use EOF ''; } Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.networks

This defines a BSS, colloquially known as a WiFi network. You have to specify at least one. Type: attribute set of (submodule) Default: { } Example: { wlp2s0 = { ssid = "Primary advertised network"; authentication.saePasswords = [{ passwordFile = "/run/secrets/my-password"; }]; }; wlp2s0-1 = { ssid = "Secondary advertised network (Open)"; authentication.mode = "none"; }; } Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.noScan

Disables scan for overlapping BSSs in HT40+/- mode. Caution: turning this on will likely violate regulatory requirements! Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.settings

Extra configuration options to put at the end of global initialization, before defining BSSs. To find out which options are global and which are per-bss you have to read hostapd’s source code, which is non-trivial and not documented otherwise. Lists will be converted to multiple definitions of the same key, and booleans to 0/1. Otherwise, the inputs are not modified or checked for correctness. Type: open submodule of attribute set of (atom (bool, int or string) or a list of them for duplicate keys) Default: { } Example: { acs_exclude_dfs = true; } Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>
