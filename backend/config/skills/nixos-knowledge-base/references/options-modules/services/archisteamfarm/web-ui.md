---
module: services.archisteamfarm.web-ui
option_count: 2
source: options.html
---

# services.archisteamfarm.web-ui

## services.archisteamfarm.web-ui.enable

Whether to start the web-ui. This is the preferred way of configuring things such as the steam guard token. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/games/archisteamfarm.nix>

## services.archisteamfarm.web-ui.package

The ui package to use. ::: {.note} Contents must be in lib/dist ::: Type: package Default: pkgs.archisteamfarm.ui Declared by: <nixpkgs/nixos/modules/services/games/archisteamfarm.nix>
