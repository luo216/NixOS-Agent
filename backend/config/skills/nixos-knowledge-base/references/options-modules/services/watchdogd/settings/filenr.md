---
module: services.watchdogd.settings.filenr
option_count: 5
source: options.html
---

# services.watchdogd.settings.filenr

## services.watchdogd.settings.filenr.enabled

Whether to enable watchdogd plugin filenr. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/watchdogd.nix>

## services.watchdogd.settings.filenr.critical

The critical watermark level. Alert sent to log, followed by reboot or script action. Type: nonnegative integer or floating point number, meaning >=0 Default: 1.0 Declared by: <nixpkgs/nixos/modules/services/monitoring/watchdogd.nix>

## services.watchdogd.settings.filenr.interval

Amount of seconds between every poll. Type: unsigned integer, meaning >=0 Default: 300 Declared by: <nixpkgs/nixos/modules/services/monitoring/watchdogd.nix>

## services.watchdogd.settings.filenr.logmark

Whether to log current stats every poll interval. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/watchdogd.nix>

## services.watchdogd.settings.filenr.warning

The high watermark level. Alert sent to log. Type: nonnegative integer or floating point number, meaning >=0 Default: 0.9 Declared by: <nixpkgs/nixos/modules/services/monitoring/watchdogd.nix>
