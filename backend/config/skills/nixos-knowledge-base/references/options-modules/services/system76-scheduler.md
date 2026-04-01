---
module: services.system76-scheduler
option_count: 5
source: options.html
---

# services.system76-scheduler

## services.system76-scheduler.enable

Whether to enable system76-scheduler. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/desktops/system76-scheduler.nix>

## services.system76-scheduler.package

Which System76-Scheduler package to use. Type: package Default: pkgs.system76-scheduler Declared by: <nixpkgs/nixos/modules/services/desktops/system76-scheduler.nix>

## services.system76-scheduler.assignments

Process profile assignments. Type: attribute set of (submodule) Default: { } Example: { nix-builds = { nice = 15; class = "batch"; ioClass = "idle"; matchers = [ "nix-daemon" ]; }; } Declared by: <nixpkgs/nixos/modules/services/desktops/system76-scheduler.nix>

## services.system76-scheduler.exceptions

Processes that are left alone. Type: list of string Default: [ ] Example: [ "include descends=\"schedtool\"" "schedtool" ] Declared by: <nixpkgs/nixos/modules/services/desktops/system76-scheduler.nix>

## services.system76-scheduler.useStockConfig

Use the (reasonable and featureful) stock configuration. When this option is true, services.system76-scheduler.settings are ignored. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/desktops/system76-scheduler.nix>
