---
module: networking.dhcpcd
option_count: 10
source: options.html
---

# networking.dhcpcd

## networking.dhcpcd.enable

Whether to enable dhcpcd for device configuration. This is mainly to explicitly disable dhcpcd (for example when using networkd). Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/dhcpcd.nix>

## networking.dhcpcd.IPv6rs

Force enable or disable solicitation and receipt of IPv6 Router Advertisements. This is required, for example, when using a static unique local IPv6 address (ULA) and global IPv6 address auto-configuration with SLAAC. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/networking/dhcpcd.nix>

## networking.dhcpcd.allowInterfaces

Enable the DHCP client for any interface whose name matches any of the shell glob patterns in this list. Any interface not explicitly matched by this pattern will be denied. This pattern only applies when non-null. Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/dhcpcd.nix>

## networking.dhcpcd.allowSetuid

Whether to relax the security sandbox to allow running setuid binaries (e.g. sudo) in the dhcpcd hooks. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/dhcpcd.nix>

## networking.dhcpcd.denyInterfaces

Disable the DHCP client for any interface whose name matches any of the shell glob patterns in this list. The purpose of this option is to blacklist virtual interfaces such as those created by Xen, libvirt, LXC, etc. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/dhcpcd.nix>

## networking.dhcpcd.extraConfig

Literal string to append to the config file generated for dhcpcd. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/dhcpcd.nix>

## networking.dhcpcd.persistent

Whether to leave interfaces configured on dhcpcd daemon shutdown. Set to true if you have your root or store mounted over the network or this machine accepts SSH connections through DHCP interfaces and clients should be notified when it shuts down. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/dhcpcd.nix>

## networking.dhcpcd.runHook

Shell code that will be run after all other hooks. See man dhcpcd-run-hooks for details on what is possible. Note To use sudo or similar tools in your script you may have to set: networking.dhcpcd.allowSetuid = true; In addition, as most of the filesystem is inaccessible to dhcpcd by default, you may want to define some exceptions, e.g. systemd.services.dhcpcd.serviceConfig.ReadOnlyPaths = [ "/run/user/1000/bus" # to send desktop notifications ]; Type: strings concatenated with “\n” Default: "" Example: "if [[ $reason =~ BOUND ]]; then echo $interface: Routers are $new_routers - were $old_routers; fi" Declared by: <nixpkgs/nixos/modules/services/networking/dhcpcd.nix>

## networking.dhcpcd.setHostname

Whether to set the machine hostname based on the information received from the DHCP server. Note The hostname will be changed only if the current one is the empty string, localhost or nixos. Polkit (security.polkit.enable) is also required. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/dhcpcd.nix>

## networking.dhcpcd.wait

This option specifies when the dhcpcd service will fork to background. If set to “background”, dhcpcd will fork to background immediately. If set to “ipv4” or “ipv6”, dhcpcd will wait for the corresponding IP address to be assigned. If set to “any”, dhcpcd will wait for any type (IPv4 or IPv6) to be assigned. If set to “both”, dhcpcd will wait for both an IPv4 and an IPv6 address before forking. The option “if-carrier-up” is equivalent to “any” if either ethernet is plugged or WiFi is powered, and to “background” otherwise. Type: one of “background”, “any”, “ipv4”, “ipv6”, “both”, “if-carrier-up” Default: "any" Declared by: <nixpkgs/nixos/modules/services/networking/dhcpcd.nix>
