---
module: services.netbird.ui
option_count: 2
source: options.html
---

# services.netbird.ui

## services.netbird.ui.enable

Controls presence netbird-ui wrappers, defaults to presence of graphical sessions. Type: boolean Default: config.services.displayManager.sessionPackages != [ ] || config.services.xserver.enable Declared by: <nixpkgs/nixos/modules/services/networking/netbird.nix>

## services.netbird.ui.package

The netbird-ui package to use. Type: package Default: pkgs.netbird-ui Declared by: <nixpkgs/nixos/modules/services/networking/netbird.nix>
