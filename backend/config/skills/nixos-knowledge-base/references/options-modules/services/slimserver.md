---
module: services.slimserver
option_count: 3
source: options.html
---

# services.slimserver

## services.slimserver.enable

Whether to enable slimserver. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/audio/slimserver.nix>

## services.slimserver.package

The slimserver package to use. Type: package Default: pkgs.slimserver Declared by: <nixpkgs/nixos/modules/services/audio/slimserver.nix>

## services.slimserver.dataDir

The directory where slimserver stores its state, tag cache, playlists etc. Type: absolute path Default: "/var/lib/slimserver" Declared by: <nixpkgs/nixos/modules/services/audio/slimserver.nix>
