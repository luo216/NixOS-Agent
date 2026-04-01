---
module: services.wlock
option_count: 2
source: options.html
---

# services.wlock

## services.wlock.enable

Whether to enable wlock, a Wayland sessionlocker using the ext-session-lock-v1 protocol. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/desktops/wlock.nix>

## services.wlock.package

The wlock package to use. Type: package Default: pkgs.wlock Declared by: <nixpkgs/nixos/modules/services/desktops/wlock.nix>
