---
module: programs.ryzen-monitor-ng
option_count: 2
source: options.html
---

# programs.ryzen-monitor-ng

## programs.ryzen-monitor-ng.enable

Whether to enable ryzen_monitor_ng, a userspace application for setting and getting Ryzen SMU (System Management Unit) parameters via the ryzen_smu kernel driver. Monitor power information of Ryzen processors via the PM table of the SMU. SMU Set and Get for many parameters and CO counts. https://github.com/mann1x/ryzen_monitor_ng WARNING: Damage cause by use of your AMD processor outside of official AMD specifications or outside of factory settings are not covered under any AMD product warranty and may not be covered by your board or system manufacturer’s warranty . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/ryzen-monitor-ng.nix>

## programs.ryzen-monitor-ng.package

The ryzen-monitor-ng package to use. Type: package Default: pkgs.ryzen-monitor-ng Declared by: <nixpkgs/nixos/modules/programs/ryzen-monitor-ng.nix>
