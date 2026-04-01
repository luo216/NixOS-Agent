---
module: services.system76-scheduler.settings.cfsProfiles.responsive
option_count: 5
source: options.html
---

# services.system76-scheduler.settings.cfsProfiles.responsive

## services.system76-scheduler.settings.cfsProfiles.responsive.bandwidth-size

sched_cfs_bandwidth_slice_us. Type: signed integer Default: 3 Declared by: <nixpkgs/nixos/modules/services/desktops/system76-scheduler.nix>

## services.system76-scheduler.settings.cfsProfiles.responsive.latency

sched_latency_ns. Type: signed integer Default: 4 Declared by: <nixpkgs/nixos/modules/services/desktops/system76-scheduler.nix>

## services.system76-scheduler.settings.cfsProfiles.responsive.nr-latency

sched_nr_latency. Type: signed integer Default: 10 Declared by: <nixpkgs/nixos/modules/services/desktops/system76-scheduler.nix>

## services.system76-scheduler.settings.cfsProfiles.responsive.preempt

Preemption mode. Type: one of “none”, “voluntary”, “full” Default: "full" Declared by: <nixpkgs/nixos/modules/services/desktops/system76-scheduler.nix>

## services.system76-scheduler.settings.cfsProfiles.responsive.wakeup-granularity

sched_wakeup_granularity_ns. Type: floating point number Default: 0.5 Declared by: <nixpkgs/nixos/modules/services/desktops/system76-scheduler.nix>
