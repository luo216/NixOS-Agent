---
module: services.pingvin-share.backend
option_count: 2
source: options.html
---

# services.pingvin-share.backend

## services.pingvin-share.backend.package

The backend package to use. Type: package Default: pkgs.pingvin-share.backend Declared by: <nixpkgs/nixos/modules/services/web-apps/pingvin-share.nix>

## services.pingvin-share.backend.port

The port that the backend service of Pingvin Share will listen to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Example: 9000 Declared by: <nixpkgs/nixos/modules/services/web-apps/pingvin-share.nix>
