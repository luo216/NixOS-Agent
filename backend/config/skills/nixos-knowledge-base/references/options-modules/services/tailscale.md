---
module: services.tailscale
option_count: 14
source: options.html
---

# services.tailscale

## services.tailscale.enable

Whether to enable Tailscale client daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/tailscale.nix>

## services.tailscale.package

The tailscale package to use. Type: package Default: pkgs.tailscale Declared by: <nixpkgs/nixos/modules/services/networking/tailscale.nix>

## services.tailscale.authKeyFile

A file containing the auth key. Tailscale will be automatically started if provided. Services that bind to Tailscale IPs should order using systemd.services.<name>.after tailscaled-autoconnect.service. Type: null or absolute path Default: null Example: "/run/secrets/tailscale_key" Declared by: <nixpkgs/nixos/modules/services/networking/tailscale.nix>

## services.tailscale.authKeyParameters

Extra parameters to pass after the auth key. See https://tailscale.com/kb/1215/oauth-clients#registering-new-nodes-using-oauth-credentials Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/tailscale.nix>

## services.tailscale.disableTaildrop

Whether to disable the Taildrop feature for sending files between nodes. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/tailscale.nix>

## services.tailscale.disableUpstreamLogging

Whether to disable Tailscaled from sending debug logging upstream. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/tailscale.nix>

## services.tailscale.extraDaemonFlags

Extra flags to pass to tailscaled. Type: list of string Default: [ ] Example: [ "--no-logs-no-support" ] Declared by: <nixpkgs/nixos/modules/services/networking/tailscale.nix>

## services.tailscale.extraSetFlags

Extra flags to pass to tailscale set. Type: list of string Default: [ ] Example: [ "--advertise-exit-node" ] Declared by: <nixpkgs/nixos/modules/services/networking/tailscale.nix>

## services.tailscale.extraUpFlags

Extra flags to pass to tailscale up. Only applied if services.tailscale.authKeyFile is specified. Type: list of string Default: [ ] Example: [ "--ssh" ] Declared by: <nixpkgs/nixos/modules/services/networking/tailscale.nix>

## services.tailscale.interfaceName

The interface name for tunnel traffic. Use “userspace-networking” (beta) to not use TUN. Type: string Default: "tailscale0" Declared by: <nixpkgs/nixos/modules/services/networking/tailscale.nix>

## services.tailscale.openFirewall

Whether to open the firewall for the specified port. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/tailscale.nix>

## services.tailscale.permitCertUid

Username or user ID of the user allowed to to fetch Tailscale TLS certificates for the node. Type: null or non-empty string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/tailscale.nix>

## services.tailscale.port

The port to listen on for tunnel traffic (0=autoselect). Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 41641 Declared by: <nixpkgs/nixos/modules/services/networking/tailscale.nix>

## services.tailscale.useRoutingFeatures

Enables settings required for Tailscale’s routing features like subnet routers and exit nodes. To use these these features, you will still need to call sudo tailscale up with the relevant flags like --advertise-exit-node and --exit-node. When set to client or both, reverse path filtering will be set to loose instead of strict. When set to server or both, IP forwarding will be enabled. Type: one of “none”, “client”, “server”, “both” Default: "none" Example: "server" Declared by: <nixpkgs/nixos/modules/services/networking/tailscale.nix>
