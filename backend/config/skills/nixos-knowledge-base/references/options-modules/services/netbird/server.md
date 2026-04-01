---
module: services.netbird.server
option_count: 3
source: options.html
---

# services.netbird.server

## services.netbird.server.enable

Whether to enable Netbird Server stack, comprising the dashboard, management API and signal service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/netbird/server.nix>

## services.netbird.server.enableNginx

Whether to enable Nginx reverse-proxy for the netbird server services. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/netbird/server.nix>

## services.netbird.server.domain

The domain under which the netbird server runs. Type: string Declared by: <nixpkgs/nixos/modules/services/networking/netbird/server.nix>
