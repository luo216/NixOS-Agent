---
module: services.zipline.settings
option_count: 2
source: options.html
---

# services.zipline.settings

## services.zipline.settings.CORE_HOSTNAME

The hostname to listen on. Type: string Default: "127.0.0.1" Example: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/web-apps/zipline.nix>

## services.zipline.settings.CORE_PORT

The port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Example: 8000 Declared by: <nixpkgs/nixos/modules/services/web-apps/zipline.nix>
