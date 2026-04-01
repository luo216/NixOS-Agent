---
module: services.opentracker
option_count: 3
source: options.html
---

# services.opentracker

## services.opentracker.enable

Whether to enable opentracker. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/torrent/opentracker.nix>

## services.opentracker.package

The opentracker package to use. Type: package Default: pkgs.opentracker Declared by: <nixpkgs/nixos/modules/services/torrent/opentracker.nix>

## services.opentracker.extraOptions

Configuration Arguments for opentracker See https://erdgeist.org/arts/software/opentracker/ for all params Type: strings concatenated with " " Default: "" Declared by: <nixpkgs/nixos/modules/services/torrent/opentracker.nix>
