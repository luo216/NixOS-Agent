---
module: services.triggerhappy.bindings.*
option_count: 3
source: options.html
---

# services.triggerhappy.bindings.*

## services.triggerhappy.bindings.*.cmd

What to run. Type: string Declared by: <nixpkgs/nixos/modules/services/hardware/triggerhappy.nix>

## services.triggerhappy.bindings.*.event

Event to match. Type: one of “press”, “hold”, “release” Default: "press" Declared by: <nixpkgs/nixos/modules/services/hardware/triggerhappy.nix>

## services.triggerhappy.bindings.*.keys

List of keys to match. Key names as defined in linux/input-event-codes.h Type: list of string Declared by: <nixpkgs/nixos/modules/services/hardware/triggerhappy.nix>
