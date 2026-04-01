---
module: services.acpid
option_count: 6
source: options.html
---

# services.acpid

## services.acpid.enable

Whether to enable the ACPI daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/acpid.nix>

## services.acpid.acEventCommands

Shell commands to execute on an ac_adapter.* event. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/hardware/acpid.nix>

## services.acpid.handlers

Event handlers. Note Handler can be a single command. Type: attribute set of (submodule) Default: { } Example: { ac-power = { action = '' vals=($1) # space separated string to array of multiple values case ''${vals[3]} in 00000000) echo unplugged >> /tmp/acpi.log ;; 00000001) echo plugged in >> /tmp/acpi.log ;; *) echo unknown >> /tmp/acpi.log ;; esac ''; event = "ac_adapter/*"; }; } Declared by: <nixpkgs/nixos/modules/services/hardware/acpid.nix>

## services.acpid.lidEventCommands

Shell commands to execute on a button/lid.* event. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/hardware/acpid.nix>

## services.acpid.logEvents

Log all event activity. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/acpid.nix>

## services.acpid.powerEventCommands

Shell commands to execute on a button/power.* event. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/hardware/acpid.nix>
