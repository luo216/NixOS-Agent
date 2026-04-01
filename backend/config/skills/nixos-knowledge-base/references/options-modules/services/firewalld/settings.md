---
module: services.firewalld.settings
option_count: 13
source: options.html
---

# services.firewalld.settings

## services.firewalld.settings.CleanupModulesOnExit

Whether to unload all firewall-related kernel modules when firewalld stops. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/settings.nix>

## services.firewalld.settings.CleanupOnExit

Whether to clean up firewall rules when firewalld stops. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/settings.nix>

## services.firewalld.settings.DefaultZone

Default zone for connections. Type: non-empty string Default: "public" Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/settings.nix>

## services.firewalld.settings.FirewallBackend

The firewall backend implementation. This applies to all firewalld primitives. The only exception is direct and passthrough rules which always use the traditional iptables, ip6tables, and ebtables backends. Caution The iptables backend is deprecated. It will be removed in a future release. Type: one of “nftables”, “iptables” Default: "nftables" Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/settings.nix>

## services.firewalld.settings.FlushAllOnReload

Whether to flush all runtime rules on a reload. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/settings.nix>

## services.firewalld.settings.IndividualCalls

Whether to use individual -restore calls to apply changes to the firewall. The use of individual calls increases the time that is needed to apply changes and to start the daemon, but is good for debugging as error messages are more specific. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/settings.nix>

## services.firewalld.settings.LogDenied

Add logging rules right before reject and drop rules in the INPUT, FORWARD and OUTPUT chains for the default rules and also final reject and drop rules in zones for the configured link-layer packet type. Type: one of “all”, “unicast”, “broadcast”, “multicast”, “off” Default: "off" Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/settings.nix>

## services.firewalld.settings.NftablesCounters

Whether to add a counter to every nftables rule. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/settings.nix>

## services.firewalld.settings.NftablesFlowtable

This may improve forwarded traffic throughput by enabling nftables flowtable. It is a software fastpath and avoids calling nftables rule evaluation for data packets. Its value is a space separate list of interfaces. Type: strings concatenated with " " Default: "off" Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/settings.nix>

## services.firewalld.settings.NftablesTableOwner

If enabled, the generated nftables rule set will be owned exclusively by firewalld. This prevents other entities from mistakenly (or maliciously) modifying firewalld’s rule set. If you intend to modify firewalld’s rules, set this to false. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/settings.nix>

## services.firewalld.settings.RFC3964_IPv4

Whether to filter IPv6 traffic with 6to4 destination addresses that correspond to IPv4 addresses that should not be routed over the public internet. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/settings.nix>

## services.firewalld.settings.ReloadPolicy

The policy during reload. Type: one of “DROP”, “REJECT”, “ACCEPT” or strings concatenated with “,” Default: "INPUT:DROP,FORWARD:DROP,OUTPUT:DROP" Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/settings.nix>

## services.firewalld.settings.StrictForwardPorts

If enabled, the generated destination NAT (DNAT) rules will NOT accept traffic that was DNAT’d by other entities, e.g. docker. Firewalld will be strict and not allow published container ports until they’re explicitly allowed via firewalld. If set to false, then docker (and podman) integrates seamlessly with firewalld. Published container ports are implicitly allowed. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/settings.nix>
