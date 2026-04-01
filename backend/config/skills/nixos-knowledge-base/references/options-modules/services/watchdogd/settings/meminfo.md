---
module: services.watchdogd.settings.meminfo
option_count: 5
source: options.html
---

# services.watchdogd.settings.meminfo

## services.watchdogd.settings.meminfo.enabled

Whether to enable watchdogd plugin meminfo. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/watchdogd.nix>

## services.watchdogd.settings.meminfo.critical

The critical watermark level. Alert sent to log, followed by reboot or script action. Type: nonnegative integer or floating point number, meaning >=0 Default: 0.95 Declared by: <nixpkgs/nixos/modules/services/monitoring/watchdogd.nix>

## services.watchdogd.settings.meminfo.interval

Amount of seconds between every poll. Type: unsigned integer, meaning >=0 Default: 300 Declared by: <nixpkgs/nixos/modules/services/monitoring/watchdogd.nix>

## services.watchdogd.settings.meminfo.logmark

Whether to log current stats every poll interval. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/watchdogd.nix>

## services.watchdogd.settings.meminfo.warning

The high watermark level. Alert sent to log. Type: nonnegative integer or floating point number, meaning >=0 Default: 0.9 Declared by: <nixpkgs/nixos/modules/services/monitoring/watchdogd.nix>
