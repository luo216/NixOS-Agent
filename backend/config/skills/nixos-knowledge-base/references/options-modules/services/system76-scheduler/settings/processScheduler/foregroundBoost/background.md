---
module: services.system76-scheduler.settings.processScheduler.foregroundBoost.background
option_count: 6
source: options.html
---

# services.system76-scheduler.settings.processScheduler.foregroundBoost.background

## services.system76-scheduler.settings.processScheduler.foregroundBoost.background.class

CPU scheduler class. Type: null or one of “idle”, “batch”, “other”, “rr”, “fifo” Default: null Example: "batch" Declared by: <nixpkgs/nixos/modules/services/desktops/system76-scheduler.nix>

## services.system76-scheduler.settings.processScheduler.foregroundBoost.background.ioClass

IO scheduler class. Type: null or one of “idle”, “best-effort”, “realtime” Default: "idle" Example: "best-effort" Declared by: <nixpkgs/nixos/modules/services/desktops/system76-scheduler.nix>

## services.system76-scheduler.settings.processScheduler.foregroundBoost.background.ioPrio

IO scheduler priority. Type: null or integer between 0 and 7 (both inclusive) Default: null Example: 4 Declared by: <nixpkgs/nixos/modules/services/desktops/system76-scheduler.nix>

## services.system76-scheduler.settings.processScheduler.foregroundBoost.background.matchers

Process matchers. Type: null or (list of string) Default: [ ] Example: [ "include cgroup=\"/user.slice/*.service\" parent=\"systemd\"" "emacs" ] Declared by: <nixpkgs/nixos/modules/services/desktops/system76-scheduler.nix>

## services.system76-scheduler.settings.processScheduler.foregroundBoost.background.nice

Niceness. Type: null or integer between -20 and 19 (both inclusive) Default: 6 Declared by: <nixpkgs/nixos/modules/services/desktops/system76-scheduler.nix>

## services.system76-scheduler.settings.processScheduler.foregroundBoost.background.prio

CPU scheduler priority. Type: null or integer between 1 and 99 (both inclusive) Default: null Example: 49 Declared by: <nixpkgs/nixos/modules/services/desktops/system76-scheduler.nix>
