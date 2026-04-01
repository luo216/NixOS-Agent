---
module: networking.nftables
option_count: 10
source: options.html
---

# networking.nftables

## networking.nftables.enable

Whether to enable nftables and use nftables based firewall if enabled. nftables is a Linux-based packet filtering framework intended to replace frameworks like iptables. Note that if you have Docker enabled you will not be able to use nftables without intervention. Docker uses iptables internally to setup NAT for containers. This module disables the ip_tables kernel module, however Docker automatically loads the module. Please see https://github.com/NixOS/nixpkgs/issues/24318#issuecomment-289216273 for more information. There are other programs that use iptables internally too, such as libvirt. For information on how the two firewalls interact, see https://wiki.nftables.org/wiki-nftables/index.php/Troubleshooting#Question_4._How_do_nftables_and_iptables_interact_when_used_on_the_same_system.3F. Some network configurations may prevent VMs from having network access, see https://wiki.nixos.org/wiki/Networking#Virtualization. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/nftables.nix>

## networking.nftables.checkRuleset

Run nft check on the ruleset to spot syntax errors during build. Because this is executed in a sandbox, the check might fail if it requires access to any environmental factors or paths outside the Nix store. To circumvent this, the ruleset file can be edited using the preCheckRuleset option to work in the sandbox environment. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/nftables.nix>

## networking.nftables.checkRulesetRedirects

Set of paths that should be intercepted and rewritten while checking the ruleset using pkgs.buildPackages.libredirect. Type: attribute set of absolute path Default: { "/etc/hosts" = config.environment.etc.hosts.source; "/etc/protocols" = config.environment.etc.protocols.source; "/etc/services" = config.environment.etc.services.source; } Declared by: <nixpkgs/nixos/modules/services/networking/nftables.nix>

## networking.nftables.extraDeletions

Extra deletion commands to be run on every firewall start, reload and after stopping the firewall. Type: strings concatenated with “\n” Default: "" Example: '' # this makes deleting a non-existing table a no-op instead of an error table inet some-table; delete table inet some-table; '' Declared by: <nixpkgs/nixos/modules/services/networking/nftables.nix>

## networking.nftables.flattenRulesetFile

Use builtins.readFile rather than include to handle networking.nftables.rulesetFile. It is useful when you want to apply networking.nftables.preCheckRuleset to networking.nftables.rulesetFile. Note It is expected that networking.nftables.rulesetFile can be accessed from the build sandbox. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/nftables.nix>

## networking.nftables.flushRuleset

Whether to enable flushing the entire ruleset on each reload. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/nftables.nix>

## networking.nftables.preCheckRuleset

This script gets run before the ruleset is checked. It can be used to create additional files needed for the ruleset check to work, or modify the ruleset for cases the build environment cannot cover. Type: strings concatenated with “\n” Default: "" Example: sed 's/skgid meadow/skgid nogroup/g' -i ruleset.conf Declared by: <nixpkgs/nixos/modules/services/networking/nftables.nix>

## networking.nftables.ruleset

The ruleset to be used with nftables. Should be in a format that can be loaded using “/bin/nft -f”. The ruleset is updated atomically. Note that if the tables should be cleaned first, either: networking.nftables.flushRuleset = true; needs to be set (flushes all tables) networking.nftables.extraDeletions needs to be set or networking.nftables.tables can be used, which will clean up the table automatically Type: strings concatenated with “\n” Default: "" Example: '' # Check out https://wiki.nftables.org/ for better documentation. # Table for both IPv4 and IPv6. table inet filter { # Block all incoming connections traffic except SSH and "ping". chain input { type filter hook input priority 0; # accept any localhost traffic iifname lo accept # accept traffic originated from us ct state {established, related} accept # ICMP # routers may also want: mld-listener-query, nd-router-solicit ip6 nexthdr icmpv6 icmpv6 type { destination-unreachable, packet-too-big, time-exceeded, parameter-problem, nd-router-advert, nd-neighbor-solicit, nd-neighbor-advert } accept ip protocol icmp icmp type { destination-unreachable, router-advertisement, time-exceeded, parameter-problem } accept # allow "ping" ip6 nexthdr icmpv6 icmpv6 type echo-request accept ip protocol icmp icmp type echo-request accept # accept SSH connections (required for a server) tcp dport 22 accept # count and drop any other traffic counter drop } # Allow all outgoing connections. chain output { type filter hook output priority 0; accept } chain forward { type filter hook forward priority 0; accept } } '' Declared by: <nixpkgs/nixos/modules/services/networking/nftables.nix>

## networking.nftables.rulesetFile

The ruleset file to be used with nftables. Should be in a format that can be loaded using “nft -f”. The ruleset is updated atomically. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/nftables.nix>

## networking.nftables.tables

Tables to be added to ruleset. Tables will be added together with delete statements to clean up the table before every update. Type: attribute set of (submodule) Default: { } Example: { filter = { content = '' # Check out https://wiki.nftables.org/ for better documentation. # Table for both IPv4 and IPv6. # Block all incoming connections traffic except SSH and "ping". chain input { type filter hook input priority 0; # accept any localhost traffic iifname lo accept # accept traffic originated from us ct state {established, related} accept # ICMP # routers may also want: mld-listener-query, nd-router-solicit ip6 nexthdr icmpv6 icmpv6 type { destination-unreachable, packet-too-big, time-exceeded, parameter-problem, nd-router-advert, nd-neighbor-solicit, nd-neighbor-advert } accept ip protocol icmp icmp type { destination-unreachable, router-advertisement, time-exceeded, parameter-problem } accept # allow "ping" ip6 nexthdr icmpv6 icmpv6 type echo-request accept ip protocol icmp icmp type echo-request accept # accept SSH connections (required for a server) tcp dport 22 accept # count and drop any other traffic counter drop } # Allow all outgoing connections. chain output { type filter hook output priority 0; accept } chain forward { type filter hook forward priority 0; accept } ''; family = "inet"; }; } Declared by: <nixpkgs/nixos/modules/services/networking/nftables.nix>
