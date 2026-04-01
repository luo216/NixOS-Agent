---
module: services.wivrn.steam
option_count: 2
source: options.html
---

# services.wivrn.steam

## services.wivrn.steam.package

The steam package to use. Type: package Default: pkgs.steam Declared by: <nixpkgs/nixos/modules/services/video/wivrn.nix>

## services.wivrn.steam.importOXRRuntimes

Whether to enable Sets PRESSURE_VESSEL_IMPORT_OPENXR_1_RUNTIMES system-wide to allow Steam to automatically discover the WiVRn server. Note that you may have to logout for this variable to be visible . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/video/wivrn.nix>
