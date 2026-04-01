---
module: services.psd
option_count: 2
source: options.html
---

# services.psd

## services.psd.enable

Whether to enable the Profile Sync daemon. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/desktops/profile-sync-daemon.nix>

## services.psd.resyncTimer

The amount of time to wait before syncing browser profiles back to the disk. Takes a systemd.unit time span. The time unit defaults to seconds if omitted. Type: string Default: "1h" Example: "1h 30min" Declared by: <nixpkgs/nixos/modules/services/desktops/profile-sync-daemon.nix>
