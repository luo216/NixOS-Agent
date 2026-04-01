---
module: programs.k3b
option_count: 1
source: options.html
---

# programs.k3b

## programs.k3b.enable

Whether to enable k3b, the KDE disk burning application. Additionally to installing k3b enabling this will add setuid wrappers in /run/wrappers/bin for both cdrdao and cdrecord. On first run you must manually configure the path of cdrdae and cdrecord to correspond to the appropriate paths under /run/wrappers/bin in the “Setup External Programs” menu. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/programs/k3b.nix>
