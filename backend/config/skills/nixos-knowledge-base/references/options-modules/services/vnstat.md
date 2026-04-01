---
module: services.vnstat
option_count: 2
source: options.html
---

# services.vnstat

## services.vnstat.enable

Whether to enable update of network usage statistics via vnstatd. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/vnstat.nix>

## services.vnstat.package

The vnstat package to use. Type: package Default: pkgs.vnstat Declared by: <nixpkgs/nixos/modules/services/monitoring/vnstat.nix>
