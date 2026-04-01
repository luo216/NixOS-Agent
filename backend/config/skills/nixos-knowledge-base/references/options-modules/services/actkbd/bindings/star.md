---
module: services.actkbd.bindings.*
option_count: 4
source: options.html
---

# services.actkbd.bindings.*

## services.actkbd.bindings.*.attributes

List of attributes. Type: list of string Default: [ "exec" ] Declared by: <nixpkgs/nixos/modules/services/hardware/actkbd.nix>

## services.actkbd.bindings.*.command

What to run. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/hardware/actkbd.nix>

## services.actkbd.bindings.*.events

List of events to match. Type: list of (one of “key”, “rep”, “rel”) Default: [ "key" ] Declared by: <nixpkgs/nixos/modules/services/hardware/actkbd.nix>

## services.actkbd.bindings.*.keys

List of keycodes to match. Type: list of signed integer Declared by: <nixpkgs/nixos/modules/services/hardware/actkbd.nix>
