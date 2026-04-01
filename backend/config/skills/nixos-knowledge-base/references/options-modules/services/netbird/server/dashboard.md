---
module: services.netbird.server.dashboard
option_count: 7
source: options.html
---

# services.netbird.server.dashboard

## services.netbird.server.dashboard.enable

Whether to enable the static netbird dashboard frontend. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/netbird/dashboard.nix>

## services.netbird.server.dashboard.enableNginx

Whether to enable Nginx reverse-proxy to serve the dashboard. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/netbird/dashboard.nix>

## services.netbird.server.dashboard.package

The netbird-dashboard package to use. Type: package Default: pkgs.netbird-dashboard Declared by: <nixpkgs/nixos/modules/services/networking/netbird/dashboard.nix>

## services.netbird.server.dashboard.domain

The domain under which the dashboard runs. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/networking/netbird/dashboard.nix>

## services.netbird.server.dashboard.finalDrv

The derivation containing the final templated dashboard. Type: package (read only) Declared by: <nixpkgs/nixos/modules/services/networking/netbird/dashboard.nix>

## services.netbird.server.dashboard.managementServer

The address of the management server, used for the API endpoints. Type: string Declared by: <nixpkgs/nixos/modules/services/networking/netbird/dashboard.nix>

## services.netbird.server.dashboard.settings

An attribute set that will be used to substitute variables when building the dashboard. Any values set here will be templated into the frontend and be public for anyone that can reach your website. The exact values sadly aren’t documented anywhere. A starting point when searching for valid values is this script The only mandatory value is ‘AUTH_AUTHORITY’ as we cannot set a default value here. Type: open submodule of attribute set of (string or boolean) Default: '' { AUTH_AUDIENCE = "netbird"; AUTH_CLIENT_ID = "netbird"; AUTH_SUPPORTED_SCOPES = "openid profile email"; NETBIRD_TOKEN_SOURCE = "idToken"; USE_AUTH0 = false; } '' Declared by: <nixpkgs/nixos/modules/services/networking/netbird/dashboard.nix>
