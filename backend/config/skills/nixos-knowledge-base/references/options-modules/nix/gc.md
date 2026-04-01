---
module: nix.gc
option_count: 5
source: options.html
---

# nix.gc

## nix.gc.automatic

Automatically run the garbage collector at a specific time. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/nix-gc.nix>

## nix.gc.dates

How often or when garbage collection is performed. For most desktop and server systems a sufficient garbage collection is once a week. This value must be a calendar event in the format specified by systemd.time(7). Type: (optionally newline-terminated) single-line string or list of string Default: [ "03:15" ] Example: "weekly" Declared by: <nixpkgs/nixos/modules/services/misc/nix-gc.nix>

## nix.gc.options

Options given to nix-collect-garbage when the garbage collector is run automatically. Type: (optionally newline-terminated) single-line string Default: "" Example: "--max-freed $((64 * 1024**3))" Declared by: <nixpkgs/nixos/modules/services/misc/nix-gc.nix>

## nix.gc.persistent

Takes a boolean argument. If true, the time when the service unit was last triggered is stored on disk. When the timer is activated, the service unit is triggered immediately if it would have been triggered at least once during the time when the timer was inactive. Such triggering is nonetheless subject to the delay imposed by RandomizedDelaySec=. This is useful to catch up on missed runs of the service when the system was powered down. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/misc/nix-gc.nix>

## nix.gc.randomizedDelaySec

Add a randomized delay before each garbage collection. The delay will be chosen between zero and this value. This value must be a time span in the format specified by systemd.time(7) Type: (optionally newline-terminated) single-line string Default: "0" Example: "45min" Declared by: <nixpkgs/nixos/modules/services/misc/nix-gc.nix>
