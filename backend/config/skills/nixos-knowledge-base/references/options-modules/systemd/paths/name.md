---
module: systemd.paths.<name>
option_count: 26
source: options.html
---

# systemd.paths.<name>

## systemd.paths.<name>.enable

If set to false, this unit will be a symlink to /dev/null. This is primarily useful to prevent specific template instances (e.g. serial-getty@ttyS0) from being started. Note that enable=true does not make a unit start by default at boot; if you want that, see wantedBy. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/system/boot/systemd.nix>

## systemd.paths.<name>.after

If the specified units are started at the same time as this unit, delay this unit until they have started. Type: list of string matching the pattern [a-zA-Z0-9@%:_.\-]+[.](service|socket|device|mount|automount|swap|target|path|timer|scope|slice) Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/systemd.nix>

## systemd.paths.<name>.aliases

Aliases of that unit. Type: list of string matching the pattern [a-zA-Z0-9@%:_.\-]+[.](service|socket|device|mount|automount|swap|target|path|timer|scope|slice) Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/systemd.nix>

## systemd.paths.<name>.before

If the specified units are started at the same time as this unit, delay them until this unit has started. Type: list of string matching the pattern [a-zA-Z0-9@%:_.\-]+[.](service|socket|device|mount|automount|swap|target|path|timer|scope|slice) Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/systemd.nix>

## systemd.paths.<name>.bindsTo

Like ‘requires’, but in addition, if the specified units unexpectedly disappear, this unit will be stopped as well. Type: list of string matching the pattern [a-zA-Z0-9@%:_.\-]+[.](service|socket|device|mount|automount|swap|target|path|timer|scope|slice) Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/systemd.nix>

## systemd.paths.<name>.conflicts

If the specified units are started, then this unit is stopped and vice versa. Type: list of string matching the pattern [a-zA-Z0-9@%:_.\-]+[.](service|socket|device|mount|automount|swap|target|path|timer|scope|slice) Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/systemd.nix>

## systemd.paths.<name>.description

Description of this unit used in systemd messages and progress indicators. Type: (optionally newline-terminated) single-line string Default: "" Declared by: <nixpkgs/nixos/modules/system/boot/systemd.nix>

## systemd.paths.<name>.documentation

A list of URIs referencing documentation for this unit or its configuration. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/systemd.nix>

## systemd.paths.<name>.name

The name of this systemd unit, including its extension. This can be used to refer to this unit from other systemd units. Type: string Declared by: <nixpkgs/nixos/modules/system/boot/systemd.nix>

## systemd.paths.<name>.onFailure

A list of one or more units that are activated when this unit enters the “failed” state. Type: list of string matching the pattern [a-zA-Z0-9@%:_.\-]+[.](service|socket|device|mount|automount|swap|target|path|timer|scope|slice) Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/systemd.nix>

## systemd.paths.<name>.onSuccess

A list of one or more units that are activated when this unit enters the “inactive” state. Type: list of string matching the pattern [a-zA-Z0-9@%:_.\-]+[.](service|socket|device|mount|automount|swap|target|path|timer|scope|slice) Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/systemd.nix>

## systemd.paths.<name>.overrideStrategy

Defines how unit configuration is provided for systemd: asDropinIfExists creates a unit file when no unit file is provided by the package otherwise it creates a drop-in file named overrides.conf. asDropin creates a drop-in file named overrides.conf. Mainly needed to define instances for systemd template units (e.g. systemd-nspawn@mycontainer.service). See also systemd.unit(5). Type: one of “asDropinIfExists”, “asDropin” Default: "asDropinIfExists" Declared by: <nixpkgs/nixos/modules/system/boot/systemd.nix>

## systemd.paths.<name>.partOf

If the specified units are stopped or restarted, then this unit is stopped or restarted as well. Type: list of string matching the pattern [a-zA-Z0-9@%:_.\-]+[.](service|socket|device|mount|automount|swap|target|path|timer|scope|slice) Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/systemd.nix>

## systemd.paths.<name>.pathConfig

Each attribute in this set specifies an option in the [Path] section of the unit. See systemd.path(5) for details. Type: attribute set of (systemd option) Default: { } Example: { PathChanged = "/some/path"; Unit = "changedpath.service"; } Declared by: <nixpkgs/nixos/modules/system/boot/systemd.nix>

## systemd.paths.<name>.reloadTriggers

An arbitrary list of items such as derivations. If any item in the list changes between reconfigurations, the service will be reloaded. If anything but a reload trigger changes in the unit file, the unit will be restarted instead. Type: list of (systemd option) Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/systemd.nix>

## systemd.paths.<name>.requiredBy

Units that require (i.e. depend on and need to go down with) this unit. As discussed in the wantedBy option description this also creates .requires symlinks automatically. Type: list of string matching the pattern [a-zA-Z0-9@%:_.\-]+[.](service|socket|device|mount|automount|swap|target|path|timer|scope|slice) Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/systemd.nix>

## systemd.paths.<name>.requires

Start the specified units when this unit is started, and stop this unit when the specified units are stopped or fail. Type: list of string matching the pattern [a-zA-Z0-9@%:_.\-]+[.](service|socket|device|mount|automount|swap|target|path|timer|scope|slice) Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/systemd.nix>

## systemd.paths.<name>.requisite

Similar to requires. However if the units listed are not started, they will not be started and the transaction will fail. Type: list of string matching the pattern [a-zA-Z0-9@%:_.\-]+[.](service|socket|device|mount|automount|swap|target|path|timer|scope|slice) Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/systemd.nix>

## systemd.paths.<name>.restartTriggers

An arbitrary list of items such as derivations. If any item in the list changes between reconfigurations, the service will be restarted. Type: list of unspecified value Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/systemd.nix>

## systemd.paths.<name>.startLimitBurst

Configure unit start rate limiting. Units which are started more than startLimitBurst times within an interval time interval are not permitted to start any more. Type: signed integer Declared by: <nixpkgs/nixos/modules/system/boot/systemd.nix>

## systemd.paths.<name>.startLimitIntervalSec

Configure unit start rate limiting. Units which are started more than startLimitBurst times within an interval time interval are not permitted to start any more. Type: signed integer Declared by: <nixpkgs/nixos/modules/system/boot/systemd.nix>

## systemd.paths.<name>.unitConfig

Each attribute in this set specifies an option in the [Unit] section of the unit. See systemd.unit(5) for details. Type: attribute set of (systemd option) Default: { } Example: { RequiresMountsFor = "/data"; } Declared by: <nixpkgs/nixos/modules/system/boot/systemd.nix>

## systemd.paths.<name>.upheldBy

Keep this unit running as long as the listed units are running. This is a continuously enforced version of wantedBy. Type: list of string matching the pattern [a-zA-Z0-9@%:_.\-]+[.](service|socket|device|mount|automount|swap|target|path|timer|scope|slice) Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/systemd.nix>

## systemd.paths.<name>.upholds

Keeps the specified running while this unit is running. A continuous version of wants. Type: list of string matching the pattern [a-zA-Z0-9@%:_.\-]+[.](service|socket|device|mount|automount|swap|target|path|timer|scope|slice) Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/systemd.nix>

## systemd.paths.<name>.wantedBy

Units that want (i.e. depend on) this unit. The default method for starting a unit by default at boot time is to set this option to ["multi-user.target"] for system services. Likewise for user units (systemd.user.<name>.*) set it to ["default.target"] to make a unit start by default when the user <name> logs on. This option creates a .wants symlink in the given target that exists statelessly without the need for running systemctl enable. The [Install] section described in systemd.unit(5) however is not supported because it is a stateful process that does not fit well into the NixOS design. Type: list of string matching the pattern [a-zA-Z0-9@%:_.\-]+[.](service|socket|device|mount|automount|swap|target|path|timer|scope|slice) Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/systemd.nix>

## systemd.paths.<name>.wants

Start the specified units when this unit is started. Type: list of string matching the pattern [a-zA-Z0-9@%:_.\-]+[.](service|socket|device|mount|automount|swap|target|path|timer|scope|slice) Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/systemd.nix>
