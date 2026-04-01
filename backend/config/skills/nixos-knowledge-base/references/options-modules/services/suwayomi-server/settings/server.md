---
module: services.suwayomi-server.settings.server
option_count: 9
source: options.html
---

# services.suwayomi-server.settings.server

## services.suwayomi-server.settings.server.basicAuthEnabled

Whether to enable basic access authentication for Suwayomi-Server. Enabling this option is useful when hosting on a public network/the Internet . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/suwayomi-server.nix>

## services.suwayomi-server.settings.server.basicAuthPasswordFile

The password file containing the value that you have to provide when authenticating. Type: null or absolute path Default: null Example: "/var/secrets/suwayomi-server-password" Declared by: <nixpkgs/nixos/modules/services/web-apps/suwayomi-server.nix>

## services.suwayomi-server.settings.server.basicAuthUsername

The username value that you have to provide when authenticating. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/suwayomi-server.nix>

## services.suwayomi-server.settings.server.downloadAsCbz

Download chapters as .cbz files. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/suwayomi-server.nix>

## services.suwayomi-server.settings.server.extensionRepos

URL of repositories from which the extensions can be installed. Type: list of string Default: [ ] Example: [ "https://raw.githubusercontent.com/MY_ACCOUNT/MY_REPO/repo/index.min.json" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/suwayomi-server.nix>

## services.suwayomi-server.settings.server.ip

The ip that Suwayomi will bind to. Type: string Default: "0.0.0.0" Example: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/web-apps/suwayomi-server.nix>

## services.suwayomi-server.settings.server.localSourcePath

Path to the local source folder. Type: absolute path Default: suwayomi-server.dataDir Example: "/var/data/local_mangas" Declared by: <nixpkgs/nixos/modules/services/web-apps/suwayomi-server.nix>

## services.suwayomi-server.settings.server.port

The port that Suwayomi will listen to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Example: 4567 Declared by: <nixpkgs/nixos/modules/services/web-apps/suwayomi-server.nix>

## services.suwayomi-server.settings.server.systemTrayEnabled

Whether to enable a system tray icon, if possible. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/suwayomi-server.nix>
