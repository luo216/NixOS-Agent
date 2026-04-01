---
module: services.rustdesk-server
option_count: 3
source: options.html
---

# services.rustdesk-server

## services.rustdesk-server.enable

Whether to enable RustDesk, a remote access and remote control software, allowing maintenance of computers and other devices. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/rustdesk-server.nix>

## services.rustdesk-server.package

The rustdesk-server package to use. Type: package Default: pkgs.rustdesk-server Declared by: <nixpkgs/nixos/modules/services/monitoring/rustdesk-server.nix>

## services.rustdesk-server.openFirewall

Open the connection ports. TCP (21115, 21116, 21117, 21118, 21119) UDP (21116) Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/rustdesk-server.nix>
