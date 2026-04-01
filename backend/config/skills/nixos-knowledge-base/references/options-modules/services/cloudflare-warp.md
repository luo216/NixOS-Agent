---
module: services.cloudflare-warp
option_count: 5
source: options.html
---

# services.cloudflare-warp

## services.cloudflare-warp.enable

Whether to enable Cloudflare Zero Trust client daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/cloudflare-warp.nix>

## services.cloudflare-warp.package

The cloudflare-warp package to use. Type: package Default: pkgs.cloudflare-warp Declared by: <nixpkgs/nixos/modules/services/networking/cloudflare-warp.nix>

## services.cloudflare-warp.openFirewall

Whether to enable opening UDP ports in the firewall. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/networking/cloudflare-warp.nix>

## services.cloudflare-warp.rootDir

Working directory for the warp-svc daemon. Type: string Default: "/var/lib/cloudflare-warp" Declared by: <nixpkgs/nixos/modules/services/networking/cloudflare-warp.nix>

## services.cloudflare-warp.udpPort

The UDP port to open in the firewall. Warp uses port 2408 by default, but fallback ports can be used if that conflicts with another service. See the firewall documentation for the pre-configured available fallback ports. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 2408 Declared by: <nixpkgs/nixos/modules/services/networking/cloudflare-warp.nix>
