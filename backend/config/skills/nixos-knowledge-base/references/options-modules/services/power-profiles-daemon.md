---
module: services.power-profiles-daemon
option_count: 2
source: options.html
---

# services.power-profiles-daemon

## services.power-profiles-daemon.enable

Whether to enable power-profiles-daemon, a DBus daemon that allows changing system behavior based upon user-selected power profiles. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/power-profiles-daemon.nix>

## services.power-profiles-daemon.package

The power-profiles-daemon package to use. Type: package Default: pkgs.power-profiles-daemon Declared by: <nixpkgs/nixos/modules/services/hardware/power-profiles-daemon.nix>
