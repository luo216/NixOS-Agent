---
module: services.filebrowser.settings
option_count: 5
source: options.html
---

# services.filebrowser.settings

## services.filebrowser.settings.address

The address to listen on. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/filebrowser.nix>

## services.filebrowser.settings.cache-dir

The directory where FileBrowser stores its cache. Type: absolute path (read only) Default: "/var/cache/filebrowser" Declared by: <nixpkgs/nixos/modules/services/web-apps/filebrowser.nix>

## services.filebrowser.settings.database

The path to FileBrowser’s Bolt database. Type: absolute path Default: "/var/lib/filebrowser/database.db" Declared by: <nixpkgs/nixos/modules/services/web-apps/filebrowser.nix>

## services.filebrowser.settings.port

The port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/web-apps/filebrowser.nix>

## services.filebrowser.settings.root

The directory where FileBrowser stores files. Type: absolute path Default: "/var/lib/filebrowser/data" Declared by: <nixpkgs/nixos/modules/services/web-apps/filebrowser.nix>
