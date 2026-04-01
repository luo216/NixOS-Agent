---
module: services.suwayomi-server
option_count: 7
source: options.html
---

# services.suwayomi-server

## services.suwayomi-server.enable

Whether to enable Suwayomi, a free and open source manga reader server that runs extensions built for Tachiyomi. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/suwayomi-server.nix>

## services.suwayomi-server.package

The suwayomi-server package to use. Type: package Default: pkgs.suwayomi-server Declared by: <nixpkgs/nixos/modules/services/web-apps/suwayomi-server.nix>

## services.suwayomi-server.dataDir

The path to the data directory in which Suwayomi-Server will download scans. Type: absolute path Default: "/var/lib/suwayomi-server" Example: "/var/data/mangas" Declared by: <nixpkgs/nixos/modules/services/web-apps/suwayomi-server.nix>

## services.suwayomi-server.group

Group under which Suwayomi-Server runs. Type: string Default: "suwayomi" Example: "medias" Declared by: <nixpkgs/nixos/modules/services/web-apps/suwayomi-server.nix>

## services.suwayomi-server.openFirewall

Whether to open the firewall for the port in services.suwayomi-server.settings.server.port. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/suwayomi-server.nix>

## services.suwayomi-server.settings

Configuration to write to server.conf. See https://github.com/Suwayomi/Suwayomi-Server/wiki/Configuring-Suwayomi-Server for more information. Type: open submodule of (HOCON value) Default: { } Example: { server = { socksProxyEnabled = true; socksProxyHost = "yourproxyhost.com"; socksProxyPort = "8080"; }; } Declared by: <nixpkgs/nixos/modules/services/web-apps/suwayomi-server.nix>

## services.suwayomi-server.user

User account under which Suwayomi-Server runs. Type: string Default: "suwayomi" Example: "root" Declared by: <nixpkgs/nixos/modules/services/web-apps/suwayomi-server.nix>
