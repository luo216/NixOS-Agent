---
module: services.tailscaleAuth
option_count: 5
source: options.html
---

# services.tailscaleAuth

## services.tailscaleAuth.enable

Whether to enable tailscale.nginx-auth, to authenticate users via tailscale. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/tailscale-auth.nix>

## services.tailscaleAuth.package

The tailscale-nginx-auth package to use. Type: package Default: pkgs.tailscale-nginx-auth Declared by: <nixpkgs/nixos/modules/services/networking/tailscale-auth.nix>

## services.tailscaleAuth.group

Group which runs tailscale-nginx-auth Type: string Default: "tailscale-nginx-auth" Declared by: <nixpkgs/nixos/modules/services/networking/tailscale-auth.nix>

## services.tailscaleAuth.socketPath

Path of the socket listening to authorization requests. Type: absolute path Default: "/run/tailscale-nginx-auth/tailscale-nginx-auth.sock" Declared by: <nixpkgs/nixos/modules/services/networking/tailscale-auth.nix>

## services.tailscaleAuth.user

User which runs tailscale-nginx-auth Type: string Default: "tailscale-nginx-auth" Declared by: <nixpkgs/nixos/modules/services/networking/tailscale-auth.nix>
