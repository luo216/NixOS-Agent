---
module: services.tuptime.timer
option_count: 2
source: options.html
---

# services.tuptime.timer

## services.tuptime.timer.enable

Whether to regularly log uptime to detect bad shutdowns. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/monitoring/tuptime.nix>

## services.tuptime.timer.period

systemd calendar event Type: string Default: "*:0/5" Declared by: <nixpkgs/nixos/modules/services/monitoring/tuptime.nix>
