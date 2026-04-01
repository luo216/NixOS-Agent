---
module: services.pingvin-share.frontend
option_count: 2
source: options.html
---

# services.pingvin-share.frontend

## services.pingvin-share.frontend.package

The frontend package to use. Type: package Default: pkgs.pingvin-share.frontend Declared by: <nixpkgs/nixos/modules/services/web-apps/pingvin-share.nix>

## services.pingvin-share.frontend.port

The port that the frontend service of Pingvin Share will listen to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Example: 8000 Declared by: <nixpkgs/nixos/modules/services/web-apps/pingvin-share.nix>
