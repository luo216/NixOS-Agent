---
module: services.timekpr
option_count: 3
source: options.html
---

# services.timekpr

## services.timekpr.enable

Whether to enable Timekpr-nExT, a screen time managing application that helps optimizing time spent at computer for your subordinates, children or even for yourself. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/timekpr.nix>

## services.timekpr.package

The timekpr package to use. Type: package Default: pkgs.timekpr Declared by: <nixpkgs/nixos/modules/services/security/timekpr.nix>

## services.timekpr.adminUsers

All listed users will become part of the timekpr group so they can manage timekpr settings without requiring sudo. Type: list of string Default: [ ] Example: [ "alice" "bob" ] Declared by: <nixpkgs/nixos/modules/services/security/timekpr.nix>
