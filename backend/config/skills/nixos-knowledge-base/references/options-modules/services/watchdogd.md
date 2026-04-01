---
module: services.watchdogd
option_count: 3
source: options.html
---

# services.watchdogd

## services.watchdogd.enable

Whether to enable watchdogd, an advanced system & process supervisor. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/watchdogd.nix>

## services.watchdogd.package

The watchdogd package to use. Type: package Default: pkgs.watchdogd Declared by: <nixpkgs/nixos/modules/services/monitoring/watchdogd.nix>

## services.watchdogd.settings

Configuration to put in watchdogd.conf. See watchdogd.conf(5) for more details. Type: open submodule of attribute set of (boolean or signed integer or floating point number or string or attribute set of (boolean or signed integer or floating point number or string)) Default: { } Declared by: <nixpkgs/nixos/modules/services/monitoring/watchdogd.nix>
