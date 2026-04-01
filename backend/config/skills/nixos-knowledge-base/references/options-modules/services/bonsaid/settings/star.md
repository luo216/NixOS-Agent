---
module: services.bonsaid.settings.*
option_count: 5
source: options.html
---

# services.bonsaid.settings.*

## services.bonsaid.settings.*.command

Command to run when this transition is taken. This is executed inline by bonsaid and blocks handling of any other events until completion. To perform the command asynchronously, specify it like [ "setsid" "-f" "my-command" ]. Only effects transitions with type = "exec". Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/desktops/bonsaid.nix>

## services.bonsaid.settings.*.delay_duration

Nanoseconds to wait after the previous state change before performing this transition. This can be placed at the same level as a type = "event" transition to achieve a timeout mechanism. Only effects transitions with type = "delay". Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/desktops/bonsaid.nix>

## services.bonsaid.settings.*.event_name

Name of the event which should trigger this transition when received by bonsaid. Events are sent to bonsaid by running bonsaictl -e <event_name>. Only effects transitions with type = "event". Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/desktops/bonsaid.nix>

## services.bonsaid.settings.*.transitions

List of transitions out of this state. If left empty, then this state is considered a terminal state and entering it will trigger an immediate transition back to the root state (after processing side effects). Type: list of (open submodule of (JSON value)) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/desktops/bonsaid.nix>

## services.bonsaid.settings.*.type

Type of transition. Determines how bonsaid interprets the other options in this transition. Type: one of “delay”, “event”, “exec” Declared by: <nixpkgs/nixos/modules/services/desktops/bonsaid.nix>
