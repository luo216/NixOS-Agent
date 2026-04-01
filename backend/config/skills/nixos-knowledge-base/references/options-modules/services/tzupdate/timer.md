---
module: services.tzupdate.timer
option_count: 2
source: options.html
---

# services.tzupdate.timer

## services.tzupdate.timer.enable

Enable the tzupdate timer to update the timezone automatically. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/misc/tzupdate.nix>

## services.tzupdate.timer.interval

The interval at which the tzupdate timer should run. See systemd.time(7) to understand the format. Type: string Default: "hourly" Declared by: <nixpkgs/nixos/modules/services/misc/tzupdate.nix>
