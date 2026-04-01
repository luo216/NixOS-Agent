---
module: services.nginx.tailscaleAuth
option_count: 7
source: options.html
---

# services.nginx.tailscaleAuth

## services.nginx.tailscaleAuth.enable

Whether to enable tailscale.nginx-auth, to authenticate nginx users via tailscale. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/tailscale-auth.nix>

## services.nginx.tailscaleAuth.package

Alias of services.tailscaleAuth.package. Type: package Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/tailscale-auth.nix>

## services.nginx.tailscaleAuth.expectedTailnet

If you want to prevent node sharing from allowing users to access services across tailnets, declare your expected tailnets domain here. Type: null or string Default: "" Example: "tailnet012345.ts.net" Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/tailscale-auth.nix>

## services.nginx.tailscaleAuth.group

Alias of services.tailscaleAuth.group. Type: string Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/tailscale-auth.nix>

## services.nginx.tailscaleAuth.socketPath

Alias of services.tailscaleAuth.socketPath. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/tailscale-auth.nix>

## services.nginx.tailscaleAuth.user

Alias of services.tailscaleAuth.user. Type: string Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/tailscale-auth.nix>

## services.nginx.tailscaleAuth.virtualHosts

A list of nginx virtual hosts to put behind tailscale.nginx-auth Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/tailscale-auth.nix>
