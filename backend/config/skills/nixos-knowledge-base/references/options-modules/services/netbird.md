---
module: services.netbird
option_count: 5
source: options.html
---

# services.netbird

## services.netbird.enable

Enables backward-compatible NetBird client service. This is strictly equivalent to: services.netbird.clients.default = { port = 51820; name = "netbird"; interface = "wt0"; hardened = false; }; Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/netbird.nix>

## services.netbird.package

The netbird package to use. Type: package Default: pkgs.netbird Declared by: <nixpkgs/nixos/modules/services/networking/netbird.nix>

## services.netbird.clients

Attribute set of NetBird client daemons, by default each one will: be manageable using dedicated tooling: netbird-<name> script, NetBird - netbird-<name> graphical interface when appropriate (see ui.enable), run as a netbird-<name>.service, listen for incoming remote connections on the port 51820 (openFirewall by default), manage the netbird-<name> wireguard interface, use the /var/lib/netbird-<name>/config.json configuration file, override /var/lib/netbird-<name>/config.json with values from /etc/netbird-<name>/config.d/*.json, (hardened) be locally manageable by netbird-<name> system group, With following caveats: multiple daemons will interfere with each other’s DNS resolution of netbird.cloud, but should remain fully operational otherwise. Setting up custom (non-conflicting) DNS zone is currently possible only when self-hosting. Type: attribute set of (submodule) Default: { } Example: { services.netbird.clients.wt0.port = 51820; services.netbird.clients.personal.port = 51821; services.netbird.clients.work1.port = 51822; } Declared by: <nixpkgs/nixos/modules/services/networking/netbird.nix>

## services.netbird.tunnels

Alias of services.netbird.clients. Type: attribute set of (submodule) Declared by: <nixpkgs/nixos/modules/services/networking/netbird.nix>

## services.netbird.useRoutingFeatures

Enables settings required for NetBird’s routing features: Network Resources, Network Routes & Exit Nodes. When set to client or both, reverse path filtering will be set to loose instead of strict. When set to server or both, IP forwarding will be enabled. Type: one of “none”, “client”, “server”, “both” Default: "none" Example: "server" Declared by: <nixpkgs/nixos/modules/services/networking/netbird.nix>
