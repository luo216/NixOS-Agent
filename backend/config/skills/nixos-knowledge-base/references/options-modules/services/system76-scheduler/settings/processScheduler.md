---
module: services.system76-scheduler.settings.processScheduler
option_count: 3
source: options.html
---

# services.system76-scheduler.settings.processScheduler

## services.system76-scheduler.settings.processScheduler.enable

Tweak scheduling of individual processes in real time. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/desktops/system76-scheduler.nix>

## services.system76-scheduler.settings.processScheduler.refreshInterval

Process list poll interval, in seconds Type: signed integer Default: 60 Declared by: <nixpkgs/nixos/modules/services/desktops/system76-scheduler.nix>

## services.system76-scheduler.settings.processScheduler.useExecsnoop

Use execsnoop (otherwise poll the precess list periodically). Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/desktops/system76-scheduler.nix>
