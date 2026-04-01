---
module: services.komga
option_count: 6
source: options.html
---

# services.komga

## services.komga.enable

Whether to enable Komga, a free and open source comics/mangas media server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/komga.nix>

## services.komga.group

Group under which Komga runs. Type: string Default: "komga" Declared by: <nixpkgs/nixos/modules/services/web-apps/komga.nix>

## services.komga.openFirewall

Whether to open the firewall for the port in services.komga.settings.server.port. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/komga.nix>

## services.komga.settings

Komga configuration. See documentation. Type: open submodule of (YAML 1.1 value) Declared by: <nixpkgs/nixos/modules/services/web-apps/komga.nix>

## services.komga.stateDir

State and configuration directory Komga will use. Type: string Default: "/var/lib/komga" Declared by: <nixpkgs/nixos/modules/services/web-apps/komga.nix>

## services.komga.user

User account under which Komga runs. Type: string Default: "komga" Declared by: <nixpkgs/nixos/modules/services/web-apps/komga.nix>
