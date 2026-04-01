---
module: nix.optimise
option_count: 4
source: options.html
---

# nix.optimise

## nix.optimise.automatic

Automatically run the nix store optimiser at a specific time. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/nix-optimise.nix>

## nix.optimise.dates

Specification (in the format described by systemd.time(7)) of the time at which the optimiser will run. Type: (optionally newline-terminated) single-line string or list of string Default: [ "03:45" ] Declared by: <nixpkgs/nixos/modules/services/misc/nix-optimise.nix>

## nix.optimise.persistent

Takes a boolean argument. If true, the time when the service unit was last triggered is stored on disk. When the timer is activated, the service unit is triggered immediately if it would have been triggered at least once during the time when the timer was inactive. Such triggering is nonetheless subject to the delay imposed by RandomizedDelaySec=. This is useful to catch up on missed runs of the service when the system was powered down. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/misc/nix-optimise.nix>

## nix.optimise.randomizedDelaySec

Add a randomized delay before the optimizer will run. The delay will be chosen between zero and this value. This value must be a time span in the format specified by systemd.time(7) Type: (optionally newline-terminated) single-line string Default: "1800" Example: "45min" Declared by: <nixpkgs/nixos/modules/services/misc/nix-optimise.nix>
