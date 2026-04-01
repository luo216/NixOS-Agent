---
module: services.pretalx.settings.filesystem
option_count: 3
source: options.html
---

# services.pretalx.settings.filesystem

## services.pretalx.settings.filesystem.data

Base path for all other storage paths. Type: absolute path Default: "/var/lib/pretalx" Declared by: <nixpkgs/nixos/modules/services/web-apps/pretalx.nix>

## services.pretalx.settings.filesystem.logs

Path to the log directory, that pretalx logs message to. Type: absolute path Default: "/var/log/pretalx" Declared by: <nixpkgs/nixos/modules/services/web-apps/pretalx.nix>

## services.pretalx.settings.filesystem.static

Path to the directory that contains static files. Type: absolute path (read only) Default: "\${config.services.pretalx.finalPackage.static}/" Declared by: <nixpkgs/nixos/modules/services/web-apps/pretalx.nix>
