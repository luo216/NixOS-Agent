---
module: services.bcachefs.autoScrub
option_count: 3
source: options.html
---

# services.bcachefs.autoScrub

## services.bcachefs.autoScrub.enable

Whether to enable regular bcachefs scrub. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/tasks/filesystems/bcachefs.nix>

## services.bcachefs.autoScrub.fileSystems

List of paths to bcachefs filesystems to regularly call bcachefs scrub on. Defaults to all mount points with bcachefs filesystems. Type: list of absolute path Example: [ "/" ] Declared by: <nixpkgs/nixos/modules/tasks/filesystems/bcachefs.nix>

## services.bcachefs.autoScrub.interval

Systemd calendar expression for when to scrub bcachefs filesystems. The recommended period is a month but could be less. See systemd.time(7) for more information on the syntax. Type: string Default: "monthly" Example: "weekly" Declared by: <nixpkgs/nixos/modules/tasks/filesystems/bcachefs.nix>
