---
module: services.watchdogd.settings
option_count: 3
source: options.html
---

# services.watchdogd.settings

## services.watchdogd.settings.interval

The kick interval, i.e. how often watchdogd(8) should reset the WDT timer. Type: unsigned integer, meaning >=0 Default: 5 Declared by: <nixpkgs/nixos/modules/services/monitoring/watchdogd.nix>

## services.watchdogd.settings.safe-exit

With safeExit enabled, the daemon will ask the driver to disable the WDT before exiting. However, some WDT drivers (or hardware) may not support this. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/monitoring/watchdogd.nix>

## services.watchdogd.settings.timeout

The WDT timeout before reset. Type: unsigned integer, meaning >=0 Default: 15 Declared by: <nixpkgs/nixos/modules/services/monitoring/watchdogd.nix>
