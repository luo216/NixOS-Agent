---
module: systemd.units.<name>
option_count: 8
source: options.html
---

# systemd.units.<name>

## systemd.units.<name>.enable

If set to false, this unit will be a symlink to /dev/null. This is primarily useful to prevent specific template instances (e.g. serial-getty@ttyS0) from being started. Note that enable=true does not make a unit start by default at boot; if you want that, see wantedBy. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/system/boot/systemd.nix>

## systemd.units.<name>.aliases

Aliases of that unit. Type: list of string matching the pattern [a-zA-Z0-9@%:_.\-]+[.](service|socket|device|mount|automount|swap|target|path|timer|scope|slice) Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/systemd.nix>

## systemd.units.<name>.name

The name of this systemd unit, including its extension. This can be used to refer to this unit from other systemd units. Type: string Declared by: <nixpkgs/nixos/modules/system/boot/systemd.nix>

## systemd.units.<name>.overrideStrategy

Defines how unit configuration is provided for systemd: asDropinIfExists creates a unit file when no unit file is provided by the package otherwise it creates a drop-in file named overrides.conf. asDropin creates a drop-in file named overrides.conf. Mainly needed to define instances for systemd template units (e.g. systemd-nspawn@mycontainer.service). See also systemd.unit(5). Type: one of “asDropinIfExists”, “asDropin” Default: "asDropinIfExists" Declared by: <nixpkgs/nixos/modules/system/boot/systemd.nix>

## systemd.units.<name>.requiredBy

Units that require (i.e. depend on and need to go down with) this unit. As discussed in the wantedBy option description this also creates .requires symlinks automatically. Type: list of string matching the pattern [a-zA-Z0-9@%:_.\-]+[.](service|socket|device|mount|automount|swap|target|path|timer|scope|slice) Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/systemd.nix>

## systemd.units.<name>.text

Text of this systemd unit. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/system/boot/systemd.nix>

## systemd.units.<name>.upheldBy

Keep this unit running as long as the listed units are running. This is a continuously enforced version of wantedBy. Type: list of string matching the pattern [a-zA-Z0-9@%:_.\-]+[.](service|socket|device|mount|automount|swap|target|path|timer|scope|slice) Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/systemd.nix>

## systemd.units.<name>.wantedBy

Units that want (i.e. depend on) this unit. The default method for starting a unit by default at boot time is to set this option to ["multi-user.target"] for system services. Likewise for user units (systemd.user.<name>.*) set it to ["default.target"] to make a unit start by default when the user <name> logs on. This option creates a .wants symlink in the given target that exists statelessly without the need for running systemctl enable. The [Install] section described in systemd.unit(5) however is not supported because it is a stateful process that does not fit well into the NixOS design. Type: list of string matching the pattern [a-zA-Z0-9@%:_.\-]+[.](service|socket|device|mount|automount|swap|target|path|timer|scope|slice) Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/systemd.nix>
