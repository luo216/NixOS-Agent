---
module: services.lemmy.ui
option_count: 2
source: options.html
---

# services.lemmy.ui

## services.lemmy.ui.package

The lemmy-ui package to use. Type: package Default: pkgs.lemmy-ui Declared by: <nixpkgs/nixos/modules/services/web-apps/lemmy.nix>

## services.lemmy.ui.port

Port where lemmy-ui should listen for incoming requests. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 1234 Declared by: <nixpkgs/nixos/modules/services/web-apps/lemmy.nix>
