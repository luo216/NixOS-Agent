---
module: networking.jool
option_count: 3
source: options.html
---

# networking.jool

## networking.jool.enable

Whether to enable Jool, an Open Source implementation of IPv4/IPv6 translation on Linux. Jool can perform stateless IP/ICMP translation (SIIT) or stateful NAT64, analogous to the IPv4 NAPT. Refer to the upstream documentation for the supported modes of translation and how to configure them. Enabling this option will install the Jool kernel module and the command line tools for controlling it. Type: boolean Default: false Related packages: pkgs.linuxPackages.jool pkgs.jool-cli Declared by: <nixpkgs/nixos/modules/services/networking/jool.nix>

## networking.jool.nat64

Definitions of NAT64 instances of Jool. See the documentation for the available options. Also check out the tutorial for an introduction to NAT64 and how to troubleshoot the setup. The attribute name defines the name of the instance, with the main one being default: this can be accessed from the command line without specifying the name with -i. Note Instances created imperatively from the command line will not interfere with the NixOS instances, provided the respective pool4 addresses and port ranges are not overlapping. Warning Changes to an instance performed via jool -i <name> are applied correctly but will be lost after restarting the respective jool-nat64-<name>.service. Type: attribute set of (open submodule of (JSON value)) Default: { } Example: { default = { # custom NAT64 prefix global.pool6 = "2001:db8:64::/96"; # Port forwarding bib = [ { # SSH 192.0.2.16 → 2001:db8:a::1 "protocol" = "TCP"; "ipv4 address" = "192.0.2.16#22"; "ipv6 address" = "2001:db8:a::1#22"; } { # DNS (TCP) 192.0.2.16 → 2001:db8:a::2 "protocol" = "TCP"; "ipv4 address" = "192.0.2.16#53"; "ipv6 address" = "2001:db8:a::2#53"; } { # DNS (UDP) 192.0.2.16 → 2001:db8:a::2 "protocol" = "UDP"; "ipv4 address" = "192.0.2.16#53"; "ipv6 address" = "2001:db8:a::2#53"; } ]; pool4 = [ # Port ranges for dynamic translation { protocol = "TCP"; prefix = "192.0.2.16/32"; "port range" = "40001-65535"; } { protocol = "UDP"; prefix = "192.0.2.16/32"; "port range" = "40001-65535"; } { protocol = "ICMP"; prefix = "192.0.2.16/32"; "port range" = "40001-65535"; } # Ports for static BIB entries { protocol = "TCP"; prefix = "192.0.2.16/32"; "port range" = "22"; } { protocol = "UDP"; prefix = "192.0.2.16/32"; "port range" = "53"; } ]; }; } Declared by: <nixpkgs/nixos/modules/services/networking/jool.nix>

## networking.jool.siit

Definitions of SIIT instances of Jool. See the documentation for the available options. Also check out the tutorial for an introduction to SIIT and how to troubleshoot the setup. The attribute name defines the name of the instance, with the main one being default: this can be accessed from the command line without specifying the name with -i. Note Instances created imperatively from the command line will not interfere with the NixOS instances, provided the respective EAMT addresses and port ranges are not overlapping. Warning Changes to an instance performed via jool -i <name> are applied correctly but will be lost after restarting the respective jool-siit-<name>.service. Type: attribute set of (open submodule of (JSON value)) Default: { } Example: { default = { # Maps any IPv4 address x.y.z.t to 2001:db8::x.y.z.t and v.v. global.pool6 = "2001:db8::/96"; # Explicit address mappings eamt = [ # 2001:db8:1:: ←→ 192.0.2.0 { "ipv6 prefix" = "2001:db8:1::/128"; "ipv4 prefix" = "192.0.2.0"; } # 2001:db8:1::x ←→ 198.51.100.x { "ipv6 prefix" = "2001:db8:2::/120"; "ipv4 prefix" = "198.51.100.0/24"; } ]; }; } Declared by: <nixpkgs/nixos/modules/services/networking/jool.nix>
