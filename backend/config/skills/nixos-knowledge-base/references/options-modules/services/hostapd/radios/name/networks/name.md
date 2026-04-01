---
module: services.hostapd.radios.<name>.networks.<name>
option_count: 14
source: options.html
---

# services.hostapd.radios.<name>.networks.<name>

## services.hostapd.radios.<name>.networks.<name>.apIsolate

Isolate traffic between stations (clients) and prevent them from communicating with each other. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.networks.<name>.bssid

Specifies the BSSID for this BSS. Usually determined automatically, but for now you have to manually specify them when using multiple BSS. Try assigning related addresses from the locally administered MAC address ranges, by reusing the hardware address but replacing the second nibble with 2, 6, A or E. (e.g. if real address is XX:XX:XX:XX:XX, try X2:XX:XX:XX:XX:XX, X6:XX:XX:XX:XX:XX, … for the second, third, … BSS) Type: null or string Default: null Example: "11:22:33:44:55:66" Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.networks.<name>.dynamicConfigScripts

All of these scripts will be executed in lexicographical order before hostapd is started, right after the bss segment was generated and may dynamically append bss options to the generated configuration file. The first argument will point to the configuration file that you may append to. The second and third argument will point to this BSS’s MAC allow and MAC deny file respectively. Type: attribute set of absolute path Default: { } Example: { exampleDynamicConfig = pkgs.writeShellScript "dynamic-config" '' HOSTAPD_CONFIG=$1 # These always exist, but may or may not be used depending on the actual configuration MAC_ALLOW_FILE=$2 MAC_DENY_FILE=$3 cat >> "$HOSTAPD_CONFIG" << EOF # Add some dynamically generated statements here EOF ''; } Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.networks.<name>.group

Members of this group can access the control socket for this interface. Type: string Default: "wheel" Example: "network" Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.networks.<name>.ignoreBroadcastSsid

Send empty SSID in beacons and ignore probe request frames that do not specify full SSID, i.e., require stations to know SSID. Note that this does not increase security, since your clients will then broadcast the SSID instead, which can increase congestion. "disabled": Advertise ssid normally. "empty": send empty (length=0) SSID in beacon and ignore probe request for broadcast SSID "clear": clear SSID (ASCII 0), but keep the original length (this may be required with some legacy clients that do not support empty SSID) and ignore probe requests for broadcast SSID. Only use this if empty does not work with your clients. Type: one of “disabled”, “empty”, “clear” Default: "disabled" Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.networks.<name>.logLevel

Levels (minimum value for logged events): 0 = verbose debugging 1 = debugging 2 = informational messages 3 = notification 4 = warning Type: integer between 0 and 4 (both inclusive) Default: 2 Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.networks.<name>.macAcl

Station MAC address -based authentication. The following modes are available: "deny": Allow unless listed in macDeny (default) "allow": Deny unless listed in macAllow "radius": Use external radius server, but check both macAllow and macDeny first Please note that this kind of access control requires a driver that uses hostapd to take care of management frame processing and as such, this can be used with driver=hostap or driver=nl80211, but not with driver=atheros. Type: one of “deny”, “allow”, “radius” Default: "deny" Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.networks.<name>.macAllow

Specifies the MAC addresses to allow if macAcl is set to "allow" or "radius". These values will be world-readable in the Nix store. Values will automatically be merged with macAllowFile if necessary. Type: list of string Default: [ ] Example: [ "11:22:33:44:55:66" ] Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.networks.<name>.macAllowFile

Specifies a file containing the MAC addresses to allow if macAcl is set to "allow" or "radius". The file should contain exactly one MAC address per line. Comments and empty lines are ignored, only lines starting with a valid MAC address will be considered (e.g. 11:22:33:44:55:66) and any content after the MAC address is ignored. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.networks.<name>.macDeny

Specifies the MAC addresses to deny if macAcl is set to "deny" or "radius". These values will be world-readable in the Nix store. Values will automatically be merged with macDenyFile if necessary. Type: list of string Default: [ ] Example: [ "11:22:33:44:55:66" ] Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.networks.<name>.macDenyFile

Specifies a file containing the MAC addresses to deny if macAcl is set to "deny" or "radius". The file should contain exactly one MAC address per line. Comments and empty lines are ignored, only lines starting with a valid MAC address will be considered (e.g. 11:22:33:44:55:66) and any content after the MAC address is ignored. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.networks.<name>.settings

Extra configuration options to put at the end of this BSS’s defintion in the hostapd.conf for the associated interface. To find out which options are global and which are per-bss you have to read hostapd’s source code, which is non-trivial and not documented otherwise. Lists will be converted to multiple definitions of the same key, and booleans to 0/1. Otherwise, the inputs are not modified or checked for correctness. Type: open submodule of attribute set of (atom (bool, int or string) or a list of them for duplicate keys) Default: { } Example: { multi_ap = true; } Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.networks.<name>.ssid

SSID to be used in IEEE 802.11 management frames. Type: string Example: "❄️ cool ❄️" Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.networks.<name>.utf8Ssid

Whether the SSID is to be interpreted using UTF-8 encoding. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>
