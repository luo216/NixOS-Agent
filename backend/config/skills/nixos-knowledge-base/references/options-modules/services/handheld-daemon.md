---
module: services.handheld-daemon
option_count: 3
source: options.html
---

# services.handheld-daemon

## services.handheld-daemon.enable

Whether to enable Handheld Daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/handheld-daemon.nix>

## services.handheld-daemon.package

The handheld-daemon package to use. Type: package Default: pkgs.handheld-daemon Declared by: <nixpkgs/nixos/modules/services/hardware/handheld-daemon.nix>

## services.handheld-daemon.user

The user to run Handheld Daemon with. Type: string Declared by: <nixpkgs/nixos/modules/services/hardware/handheld-daemon.nix>
