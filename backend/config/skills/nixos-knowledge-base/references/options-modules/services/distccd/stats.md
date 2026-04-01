---
module: services.distccd.stats
option_count: 2
source: options.html
---

# services.distccd.stats

## services.distccd.stats.enable

Whether to enable statistics reporting via HTTP server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/development/distccd.nix>

## services.distccd.stats.port

The TCP port which the distccd statistics HTTP server will listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3633 Declared by: <nixpkgs/nixos/modules/services/development/distccd.nix>
