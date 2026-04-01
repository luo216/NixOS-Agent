---
module: services.headscale.settings.prefixes
option_count: 3
source: options.html
---

# services.headscale.settings.prefixes

## services.headscale.settings.prefixes.allocation

Strategy used for allocation of IPs to nodes, available options: sequential (default): assigns the next free IP from the previous given IP. random: assigns the next free IP from a pseudo-random IP generator (crypto/rand). Type: one of “sequential”, “random” Default: "sequential" Example: "random" Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>

## services.headscale.settings.prefixes.v4

Each prefix consists of either an IPv4 or IPv6 address, and the associated prefix length, delimited by a slash. It must be within IP ranges supported by the Tailscale client - i.e., subnets of 100.64.0.0/10 and fd7a:115c:a1e0::/48. Type: string Default: "100.64.0.0/10" Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>

## services.headscale.settings.prefixes.v6

Each prefix consists of either an IPv4 or IPv6 address, and the associated prefix length, delimited by a slash. It must be within IP ranges supported by the Tailscale client - i.e., subnets of 100.64.0.0/10 and fd7a:115c:a1e0::/48. Type: string Default: "fd7a:115c:a1e0::/48" Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>
