---
module: networking.nat
option_count: 12
source: options.html
---

# networking.nat

## networking.nat.enable

Whether to enable Network Address Translation (NAT). A properly configured firewall or a trusted L2 on all network interfaces is required to prevent unauthorized access to the internal network. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/nat.nix>

## networking.nat.enableIPv6

Whether to enable IPv6 NAT. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/nat.nix>

## networking.nat.dmzHost

The local IP address to which all traffic that does not match any forwarding rule is forwarded. Type: null or string Default: null Example: "10.0.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/nat.nix>

## networking.nat.externalIP

The public IP address to which packets from the local network are to be rewritten. If this is left empty, the IP address associated with the external interface will be used. Only connections made to this IP address will be forwarded to the internal network when using forwardPorts. Type: null or string Default: null Example: "203.0.113.123" Declared by: <nixpkgs/nixos/modules/services/networking/nat.nix>

## networking.nat.externalIPv6

The public IPv6 address to which packets from the local network are to be rewritten. If this is left empty, the IP address associated with the external interface will be used. Only connections made to this IP address will be forwarded to the internal network when using forwardPorts. Type: null or string Default: null Example: "2001:dc0:2001:11::175" Declared by: <nixpkgs/nixos/modules/services/networking/nat.nix>

## networking.nat.externalInterface

The name of the external network interface. Type: null or string Default: null Example: "eth1" Declared by: <nixpkgs/nixos/modules/services/networking/nat.nix>

## networking.nat.extraCommands

Additional shell commands executed as part of the nat initialisation script. This option is incompatible with the nftables based nat module. Type: strings concatenated with “\n” Default: "" Example: "iptables -A INPUT -p icmp -j ACCEPT" Declared by: <nixpkgs/nixos/modules/services/networking/nat-iptables.nix>

## networking.nat.extraStopCommands

Additional shell commands executed as part of the nat teardown script. This option is incompatible with the nftables based nat module. Type: strings concatenated with “\n” Default: "" Example: "iptables -D INPUT -p icmp -j ACCEPT || true" Declared by: <nixpkgs/nixos/modules/services/networking/nat-iptables.nix>

## networking.nat.forwardPorts

List of forwarded ports from the external interface to internal destinations by using DNAT. Destination can be IPv6 if IPv6 NAT is enabled. Type: list of (submodule) Default: [ ] Example: [ { destination = "10.0.0.1:80"; proto = "tcp"; sourcePort = 8080; } { destination = "[fc00::2]:80"; proto = "tcp"; sourcePort = 8080; } ] Declared by: <nixpkgs/nixos/modules/services/networking/nat.nix>

## networking.nat.internalIPs

The IP address ranges for which to perform NAT. Packets coming from these addresses (on any interface) and destined for the external interface will be rewritten. Type: list of string Default: [ ] Example: [ "192.168.1.0/24" ] Declared by: <nixpkgs/nixos/modules/services/networking/nat.nix>

## networking.nat.internalIPv6s

The IPv6 address ranges for which to perform NAT. Packets coming from these addresses (on any interface) and destined for the external interface will be rewritten. Type: list of string Default: [ ] Example: [ "fc00::/64" ] Declared by: <nixpkgs/nixos/modules/services/networking/nat.nix>

## networking.nat.internalInterfaces

The interfaces for which to perform NAT. Packets coming from these interface and destined for the external interface will be rewritten. Type: list of string Default: [ ] Example: [ "eth0" ] Declared by: <nixpkgs/nixos/modules/services/networking/nat.nix>
