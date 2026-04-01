---
module: services.kea.dhcp-ddns
option_count: 4
source: options.html
---

# services.kea.dhcp-ddns

## services.kea.dhcp-ddns.enable

Whether to enable Kea DDNS server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/kea.nix>

## services.kea.dhcp-ddns.configFile

Kea DHCP-DDNS configuration as a path, see https://kea.readthedocs.io/en/kea-3.0.2/arm/ddns.html. Takes preference over settings. Most users should prefer using settings instead. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/kea.nix>

## services.kea.dhcp-ddns.extraArgs

List of additional arguments to pass to the daemon. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/kea.nix>

## services.kea.dhcp-ddns.settings

Kea DHCP-DDNS configuration as an attribute set, see https://kea.readthedocs.io/en/kea-3.0.2/arm/ddns.html. Type: JSON value Default: null Example: { dns-server-timeout = 100; forward-ddns = { ddns-domains = [ ]; }; ip-address = "127.0.0.1"; ncr-format = "JSON"; ncr-protocol = "UDP"; port = 53001; reverse-ddns = { ddns-domains = [ ]; }; tsig-keys = [ ]; } Declared by: <nixpkgs/nixos/modules/services/networking/kea.nix>
