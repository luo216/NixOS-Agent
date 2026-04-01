---
module: networking.interfaces.<name>
option_count: 9
source: options.html
---

# networking.interfaces.<name>

## networking.interfaces.<name>.macAddress

MAC address of the interface. Leave empty to use the default. Type: null or string Default: null Example: "00:11:22:33:44:55" Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.interfaces.<name>.mtu

MTU size for packets leaving the interface. Leave empty to use the default. Type: null or signed integer Default: null Example: 9000 Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.interfaces.<name>.name

Name of the interface. Type: string Example: "eth0" Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.interfaces.<name>.proxyARP

Turn on proxy_arp for this device. This is mainly useful for creating pseudo-bridges between a real interface and a virtual network such as VPN or a virtual machine for interfaces that don’t support real bridging (most wlan interfaces). As ARP proxying acts slightly above the link-layer, below-ip traffic isn’t bridged, so things like DHCP won’t work. The advantage above using NAT lies in the fact that no IP addresses are shared, so all hosts are reachable/routeable. WARNING: turns on ip-routing, so if you have multiple interfaces, you should think of the consequence and setup firewall rules to limit this. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.interfaces.<name>.tempAddress

When IPv6 is enabled with SLAAC, this option controls the use of temporary address (aka privacy extensions) on this interface. This is used to reduce tracking. See also the global option networking.tempAddresses, which applies to all interfaces where this is not set. Possible values are: "default" to generate IPv6 temporary addresses and use these as source addresses in routing; "disabled" to completely disable IPv6 temporary addresses; "enabled" to generate IPv6 temporary addresses but still use EUI-64 addresses as source addresses; Type: one of “default”, “disabled”, “enabled” Default: config.networking.tempAddresses Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.interfaces.<name>.useDHCP

Whether this interface should be configured with DHCP. Overrides the default set by networking.useDHCP. If null (the default), DHCP is enabled if the interface has no IPv4 addresses configured with networking.interfaces.<name>.ipv4.addresses, and disabled otherwise. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.interfaces.<name>.virtual

Whether this interface is virtual and should be created by tunctl. This is mainly useful for creating bridges between a host and a virtual network such as VPN or a virtual machine. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.interfaces.<name>.virtualOwner

In case of a virtual device, the user who owns it. Type: string Default: "root" Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.interfaces.<name>.virtualType

The type of interface to create. The default is TUN for an interface name starting with “tun”, otherwise TAP. Type: one of “tun”, “tap” Default: if hasPrefix "tun" name then "tun" else "tap" Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>
