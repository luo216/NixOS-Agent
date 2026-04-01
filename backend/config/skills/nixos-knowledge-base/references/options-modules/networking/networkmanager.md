---
module: networking.networkmanager
option_count: 12
source: options.html
---

# networking.networkmanager

## networking.networkmanager.enable

Whether to use NetworkManager to obtain an IP address and other configuration for all network interfaces that are not manually configured. If enabled, a group networkmanager will be created. Add all users that should have permission to change network settings to this group. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/networkmanager.nix>

## networking.networkmanager.package

The networkmanager package to use. Type: package Default: pkgs.networkmanager Declared by: <nixpkgs/nixos/modules/services/networking/networkmanager.nix>

## networking.networkmanager.appendNameservers

A list of name servers that should be appended to the ones configured in NetworkManager or received by DHCP. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/networkmanager.nix>

## networking.networkmanager.connectionConfig

Configuration for the [connection] section of NetworkManager.conf. Refer to https://developer.gnome.org/NetworkManager/stable/NetworkManager.conf.html#id-1.2.3.11 or NetworkManager.conf(5) for more information. Type: attribute set of (null or boolean or signed integer or string) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/networkmanager.nix>

## networking.networkmanager.dhcp

Which program (or internal library) should be used for DHCP. Type: one of “dhcpcd”, “internal” Default: "internal" Declared by: <nixpkgs/nixos/modules/services/networking/networkmanager.nix>

## networking.networkmanager.dispatcherScripts

A list of scripts which will be executed in response to network events. Type: list of (submodule) Default: [ ] Example: [ { source = pkgs.writeText "upHook" '' if [ "$2" != "up" ]; then logger "exit: event $2 != up" exit fi # coreutils and iproute are in PATH too logger "Device $DEVICE_IFACE coming up" ''; type = "basic"; } ] Declared by: <nixpkgs/nixos/modules/services/networking/networkmanager.nix>

## networking.networkmanager.dns

Set the DNS (resolv.conf) processing mode. A description of these modes can be found in the main section of https://developer.gnome.org/NetworkManager/stable/NetworkManager.conf.html or in NetworkManager.conf(5). Type: one of “default”, “dnsmasq”, “systemd-resolved”, “none” Default: "default" Declared by: <nixpkgs/nixos/modules/services/networking/networkmanager.nix>

## networking.networkmanager.insertNameservers

A list of name servers that should be inserted before the ones configured in NetworkManager or received by DHCP. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/networkmanager.nix>

## networking.networkmanager.logLevel

Set the default logging verbosity level. Type: one of “OFF”, “ERR”, “WARN”, “INFO”, “DEBUG”, “TRACE” Default: "WARN" Declared by: <nixpkgs/nixos/modules/services/networking/networkmanager.nix>

## networking.networkmanager.plugins

List of plugin packages to install. See https://search.nixos.org/packages?query=networkmanager- for available plugin packages. and https://networkmanager.dev/docs/vpn/ for an overview over builtin and external plugins and their support status. Type: list of NetworkManager plugin package Default: [ ] Example: with pkgs; [ networkmanager-fortisslvpn networkmanager-iodine networkmanager-l2tp networkmanager-openconnect networkmanager-openvpn networkmanager-sstp networkmanager-strongswan networkmanager-vpnc ] Declared by: <nixpkgs/nixos/modules/services/networking/networkmanager.nix>

## networking.networkmanager.settings

Configuration added to the generated NetworkManager.conf, note that you can overwrite settings with this. Refer to https://developer.gnome.org/NetworkManager/stable/NetworkManager.conf.html or NetworkManager.conf(5) for more information. Type: attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/networkmanager.nix>

## networking.networkmanager.unmanaged

List of interfaces that will not be managed by NetworkManager. Interface name can be specified here, but if you need more fidelity, refer to https://developer.gnome.org/NetworkManager/stable/NetworkManager.conf.html#device-spec or the “Device List Format” Appendix of NetworkManager.conf(5). Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/networkmanager.nix>
