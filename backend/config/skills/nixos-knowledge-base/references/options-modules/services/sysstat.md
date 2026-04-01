---
module: services.sysstat
option_count: 3
source: options.html
---

# services.sysstat

## services.sysstat.enable

Whether to enable sar system activity collection. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/sysstat.nix>

## services.sysstat.collect-args

Arguments to pass sa1 when collecting statistics Type: string Default: "1 1" Declared by: <nixpkgs/nixos/modules/services/monitoring/sysstat.nix>

## services.sysstat.collect-frequency

OnCalendar specification for sysstat-collect Type: string Default: "*:00/10" Declared by: <nixpkgs/nixos/modules/services/monitoring/sysstat.nix>
