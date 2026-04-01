---
module: services.system76-scheduler.settings.cfsProfiles.default
option_count: 5
source: options.html
---

# services.system76-scheduler.settings.cfsProfiles.default

## services.system76-scheduler.settings.cfsProfiles.default.bandwidth-size

sched_cfs_bandwidth_slice_us. Type: signed integer Default: 5 Declared by: <nixpkgs/nixos/modules/services/desktops/system76-scheduler.nix>

## services.system76-scheduler.settings.cfsProfiles.default.latency

sched_latency_ns. Type: signed integer Default: 6 Declared by: <nixpkgs/nixos/modules/services/desktops/system76-scheduler.nix>

## services.system76-scheduler.settings.cfsProfiles.default.nr-latency

sched_nr_latency. Type: signed integer Default: 8 Declared by: <nixpkgs/nixos/modules/services/desktops/system76-scheduler.nix>

## services.system76-scheduler.settings.cfsProfiles.default.preempt

Preemption mode. Type: one of “none”, “voluntary”, “full” Default: "voluntary" Declared by: <nixpkgs/nixos/modules/services/desktops/system76-scheduler.nix>

## services.system76-scheduler.settings.cfsProfiles.default.wakeup-granularity

sched_wakeup_granularity_ns. Type: floating point number Default: 1.0 Declared by: <nixpkgs/nixos/modules/services/desktops/system76-scheduler.nix>
