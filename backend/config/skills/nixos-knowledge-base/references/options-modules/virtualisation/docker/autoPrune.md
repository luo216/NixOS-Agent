---
module: virtualisation.docker.autoPrune
option_count: 5
source: options.html
---

# virtualisation.docker.autoPrune

## virtualisation.docker.autoPrune.enable

Whether to periodically prune Docker resources. If enabled, a systemd timer will run docker system prune -f as specified by the dates option. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/docker.nix>

## virtualisation.docker.autoPrune.dates

Specification (in the format described by systemd.time(7)) of the time at which the prune will occur. Type: string Default: "weekly" Declared by: <nixpkgs/nixos/modules/virtualisation/docker.nix>

## virtualisation.docker.autoPrune.flags

Any additional flags passed to docker system prune. Type: list of string Default: [ ] Example: [ "--all" ] Declared by: <nixpkgs/nixos/modules/virtualisation/docker.nix>

## virtualisation.docker.autoPrune.persistent

Takes a boolean argument. If true, the time when the service unit was last triggered is stored on disk. When the timer is activated, the service unit is triggered immediately if it would have been triggered at least once during the time when the timer was inactive. Such triggering is nonetheless subject to the delay imposed by RandomizedDelaySec=. This is useful to catch up on missed runs of the service when the system was powered down. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/virtualisation/docker.nix>

## virtualisation.docker.autoPrune.randomizedDelaySec

Add a randomized delay before each auto prune. The delay will be chosen between zero and this value. This value must be a time span in the format specified by systemd.time(7) Type: (optionally newline-terminated) single-line string Default: "0" Example: "45min" Declared by: <nixpkgs/nixos/modules/virtualisation/docker.nix>
