---
module: networking.firewall
option_count: 26
source: options.html
---

# networking.firewall

## networking.firewall.enable

Whether to enable the firewall. This is a simple stateful firewall that blocks connection attempts to unauthorised TCP or UDP ports on this machine. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/firewall.nix>

## networking.firewall.package

The package to use for running the firewall service. Type: package Default: if config.networking.nftables.enable then "pkgs.nftables" else "pkgs.iptables" Example: pkgs.iptables-legacy Declared by: <nixpkgs/nixos/modules/services/networking/firewall.nix>

## networking.firewall.allowPing

Whether to respond to incoming ICMPv4 echo requests (“pings”). ICMPv6 pings are always allowed because the larger address space of IPv6 makes network scanning much less effective. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/firewall.nix>

## networking.firewall.allowedTCPPortRanges

A range of TCP ports on which incoming connections are accepted. Type: list of attribute set of 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: [ ] Example: [ { from = 8999; to = 9003; } ] Declared by: <nixpkgs/nixos/modules/services/networking/firewall.nix>

## networking.firewall.allowedTCPPorts

List of TCP ports on which incoming connections are accepted. Type: list of 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: [ ] Example: [ 22 80 ] Declared by: <nixpkgs/nixos/modules/services/networking/firewall.nix>

## networking.firewall.allowedUDPPortRanges

Range of open UDP ports. Type: list of attribute set of 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: [ ] Example: [ { from = 60000; to = 61000; } ] Declared by: <nixpkgs/nixos/modules/services/networking/firewall.nix>

## networking.firewall.allowedUDPPorts

List of open UDP ports. Type: list of 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: [ ] Example: [ 53 ] Declared by: <nixpkgs/nixos/modules/services/networking/firewall.nix>

## networking.firewall.autoLoadConntrackHelpers

Whether to auto-load connection-tracking helpers. See the description at networking.firewall.connectionTrackingModules (needs kernel 3.5+) Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/firewall.nix>

## networking.firewall.backend

Underlying implementation for the firewall service. Type: one of “iptables”, “nftables”, “firewalld” Default: if config.services.firewalld.enable then "firewalld" else if config.networking.nftables.enable then "nftables" else "iptables" Declared by: <nixpkgs/nixos/modules/services/networking/firewall.nix>

## networking.firewall.checkReversePath

Performs a reverse path filter test on a packet. If a reply to the packet would not be sent via the same interface that the packet arrived on, it is refused. If using asymmetric routing or other complicated routing, set this option to loose mode or disable it and setup your own counter-measures. This option can be either true (or “strict”), “loose” (only drop the packet if the source address is not reachable via any interface) or false. Type: boolean or one of “strict”, “loose” Default: true except if the iptables based firewall is in use and the kernel lacks rpfilter support Example: "loose" Declared by: <nixpkgs/nixos/modules/services/networking/firewall.nix>

## networking.firewall.connectionTrackingModules

List of connection-tracking helpers that are auto-loaded. The complete list of possible values is given in the example. As helpers can pose as a security risk, it is advised to set this to an empty list and disable the setting networking.firewall.autoLoadConntrackHelpers unless you know what you are doing. Connection tracking is disabled by default. Loading of helpers is recommended to be done through the CT target. More info: https://home.regit.org/netfilter-en/secure-use-of-helpers/ Type: list of string Default: [ ] Example: [ "ftp" "irc" "sane" "sip" "tftp" "amanda" "h323" "netbios_sn" "pptp" "snmp" ] Declared by: <nixpkgs/nixos/modules/services/networking/firewall.nix>

## networking.firewall.extraCommands

Additional shell commands executed as part of the firewall initialisation script. These are executed just before the final “reject” firewall rule is added, so they can be used to allow packets that would otherwise be refused. This option only works with the iptables based firewall. Type: strings concatenated with “\n” Default: "" Example: "iptables -A INPUT -p icmp -j ACCEPT" Declared by: <nixpkgs/nixos/modules/services/networking/firewall-iptables.nix>

## networking.firewall.extraForwardRules

Additional nftables rules to be appended to the forward-allow chain. This option only works with the nftables based firewall. Type: strings concatenated with “\n” Default: "" Example: "iifname wg0 accept" Declared by: <nixpkgs/nixos/modules/services/networking/firewall-nftables.nix>

## networking.firewall.extraInputRules

Additional nftables rules to be appended to the input-allow chain. This option only works with the nftables based firewall. Type: strings concatenated with “\n” Default: "" Example: "ip6 saddr { fc00::/7, fe80::/10 } tcp dport 24800 accept" Declared by: <nixpkgs/nixos/modules/services/networking/firewall-nftables.nix>

## networking.firewall.extraPackages

Additional packages to be included in the environment of the system as well as the path of networking.firewall.extraCommands. Type: list of package Default: [ ] Example: [ pkgs.ipset ] Declared by: <nixpkgs/nixos/modules/services/networking/firewall.nix>

## networking.firewall.extraReversePathFilterRules

Additional nftables rules to be appended to the rpfilter-allow chain. This option only works with the nftables based firewall. Type: strings concatenated with “\n” Default: "" Example: "fib daddr . mark . iif type local accept" Declared by: <nixpkgs/nixos/modules/services/networking/firewall-nftables.nix>

## networking.firewall.extraStopCommands

Additional shell commands executed as part of the firewall shutdown script. These are executed just after the removal of the NixOS input rule, or if the service enters a failed state. This option only works with the iptables based firewall. Type: strings concatenated with “\n” Default: "" Example: "iptables -P INPUT ACCEPT" Declared by: <nixpkgs/nixos/modules/services/networking/firewall-iptables.nix>

## networking.firewall.filterForward

Enable filtering in IP forwarding. This option only works with the nftables based firewall. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/firewall.nix>

## networking.firewall.interfaces

Interface-specific open ports. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/firewall.nix>

## networking.firewall.logRefusedConnections

Whether to log rejected or dropped incoming connections. Note: The logs are found in the kernel logs, i.e. dmesg or journalctl -k. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/firewall.nix>

## networking.firewall.logRefusedPackets

Whether to log all rejected or dropped incoming packets. This tends to give a lot of log messages, so it’s mostly useful for debugging. Note: The logs are found in the kernel logs, i.e. dmesg or journalctl -k. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/firewall.nix>

## networking.firewall.logRefusedUnicastsOnly

If networking.firewall.logRefusedPackets and this option are enabled, then only log packets specifically directed at this machine, i.e., not broadcasts or multicasts. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/firewall.nix>

## networking.firewall.logReversePathDrops

Logs dropped packets failing the reverse path filter test if the option networking.firewall.checkReversePath is enabled. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/firewall.nix>

## networking.firewall.pingLimit

If pings are allowed, this allows setting rate limits on them. For the iptables based firewall, it should be set like “–limit 1/minute --limit-burst 5”. For the nftables based firewall, it should be set like “2/second” or “1/minute burst 5 packets”. Type: null or strings concatenated with " " Default: null Example: "--limit 1/minute --limit-burst 5" Declared by: <nixpkgs/nixos/modules/services/networking/firewall.nix>

## networking.firewall.rejectPackets

If set, refused packets are rejected rather than dropped (ignored). This means that an ICMP “port unreachable” error message is sent back to the client (or a TCP RST packet in case of an existing connection). Rejecting packets makes port scanning somewhat easier. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/firewall.nix>

## networking.firewall.trustedInterfaces

Traffic coming in from these interfaces will be accepted unconditionally. Traffic from the loopback (lo) interface will always be accepted. Type: list of string Default: [ ] Example: [ "enp0s2" ] Declared by: <nixpkgs/nixos/modules/services/networking/firewall.nix>
