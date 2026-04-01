---
module: services.etebase-server.settings.global
option_count: 4
source: options.html
---

# services.etebase-server.settings.global

## services.etebase-server.settings.global.debug

Whether to set django’s DEBUG flag. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/etebase-server.nix>

## services.etebase-server.settings.global.media_root

The media directory. Type: string Default: "${config.services.etebase-server.dataDir}/media" Declared by: <nixpkgs/nixos/modules/services/misc/etebase-server.nix>

## services.etebase-server.settings.global.secret_file

The path to a file containing the secret used as django’s SECRET_KEY. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/misc/etebase-server.nix>

## services.etebase-server.settings.global.static_root

The directory for static files. Type: string Default: "${config.services.etebase-server.dataDir}/static" Declared by: <nixpkgs/nixos/modules/services/misc/etebase-server.nix>
