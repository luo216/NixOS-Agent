---
module: services.seatd
option_count: 4
source: options.html
---

# services.seatd

## services.seatd.enable

Whether to enable seatd. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/desktops/seatd.nix>

## services.seatd.group

Group to own the seatd socket Type: string Default: "seat" Declared by: <nixpkgs/nixos/modules/services/desktops/seatd.nix>

## services.seatd.logLevel

Logging verbosity Type: one of “debug”, “info”, “error”, “silent” Default: "info" Declared by: <nixpkgs/nixos/modules/services/desktops/seatd.nix>

## services.seatd.user

User to own the seatd socket Type: string Default: "root" Declared by: <nixpkgs/nixos/modules/services/desktops/seatd.nix>
